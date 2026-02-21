#!/usr/bin/env python3
"""
build.py -- Reads markdown files from content/ and generates js/content.js.

Usage: python3 build.py

Edit workflow: edit .md files in content/ -> run python3 build.py -> refresh browser.
"""

import json
import os
import re
import shutil
import sys

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
CONTENT_DIR = os.path.join(ROOT_DIR, 'content')
OUTPUT_FILE = os.path.join(ROOT_DIR, 'js', 'content.js')
DIST_DIR = os.path.join(ROOT_DIR, 'dist')

# How-I-Work file order (matches sidebar order)
HIW_FILES = [
    'skill',
    'customer-intimacy',
    'cross-functional-leadership',
    'build-to-discover',
    'strategy-to-shipping-code',
    'engineering-collaboration',
    'trust-as-the-product',
    'antipattern-mvp-trap',
]

# Projects file order (matches sidebar order)
PROJECT_FILES = [
    'childrens-hospital',
    'tech-campus-hq',
    'competition-bot',
    'gonggpt',
    'claude-workflows',
    'ui-annotator',
    'claudechatsearch',
    'findcpa',
]


def parse_frontmatter(text):
    """Parse YAML-like frontmatter between --- markers. Returns (metadata_dict, body_text)."""
    if not text.startswith('---'):
        return {}, text
    end = text.find('---', 3)
    if end == -1:
        return {}, text
    fm_block = text[3:end].strip()
    body = text[end + 3:].strip()
    meta = {}
    for line in fm_block.split('\n'):
        line = line.strip()
        if ':' in line:
            key, val = line.split(':', 1)
            meta[key.strip()] = val.strip()
    return meta, body


def parse_hero(filepath):
    """Parse hero.md into structured data."""
    with open(filepath, 'r') as f:
        text = f.read()
    meta, body = parse_frontmatter(text)

    diff_lines = []
    stats = []
    section = None

    for line in body.split('\n'):
        stripped = line.strip()
        if stripped == '## Diff':
            section = 'diff'
            continue
        elif stripped == '## Stats':
            section = 'stats'
            continue
        elif stripped.startswith('## '):
            section = None
            continue

        if section == 'diff':
            if stripped.startswith('+ '):
                diff_lines.append({'type': 'added', 'text': stripped[2:]})
            elif stripped.startswith('- '):
                diff_lines.append({'type': 'removed', 'text': stripped[2:]})
            elif not stripped and diff_lines:
                diff_lines.append({'type': 'context', 'text': ''})
        elif section == 'stats' and stripped.startswith('- '):
            parts = stripped[2:].split(' / ', 1)
            if len(parts) == 2:
                stats.append({'value': parts[0].strip(), 'label': parts[1].strip()})

    return {
        'badge': meta.get('badge', ''),
        'name': meta.get('name', ''),
        'subtitle': meta.get('subtitle', ''),
        'explainer': meta.get('explainer', ''),
        'diffLines': diff_lines,
        'stats': stats,
    }


def parse_how_i_work(directory):
    """Parse how-i-work/*.md files into line arrays."""
    files = {}
    for name in HIW_FILES:
        filepath = os.path.join(directory, name + '.md')
        if not os.path.exists(filepath):
            print(f'  Warning: {filepath} not found, skipping', file=sys.stderr)
            continue
        with open(filepath, 'r') as f:
            lines = f.read().rstrip('\n').split('\n')
        files[name] = {'content': lines}
    return files


def parse_projects(directory):
    """Parse projects/*.md files into structured data."""
    projects = []
    for name in PROJECT_FILES:
        filepath = os.path.join(directory, name + '.md')
        if not os.path.exists(filepath):
            print(f'  Warning: {filepath} not found, skipping', file=sys.stderr)
            continue
        with open(filepath, 'r') as f:
            text = f.read()
        meta, body = parse_frontmatter(text)

        project = {
            'id': meta.get('id', ''),
            'filename': meta.get('filename', name + '.md'),
            'tier': meta.get('tier', 'compact'),
        }

        if meta.get('link'):
            project['link'] = meta['link']

        # Parse body sections
        sections = {}
        current_section = 'body'
        sections['body'] = []

        for line in body.split('\n'):
            stripped = line.strip()
            if stripped.startswith('# ') and current_section == 'body' and not sections['body']:
                # Title line
                project['title'] = stripped[2:]
                continue
            elif stripped == '## Before':
                current_section = 'before'
                sections['before'] = []
                continue
            elif stripped == '## After':
                current_section = 'after'
                sections['after'] = []
                continue
            elif stripped == '## Outcome':
                current_section = 'outcome'
                sections['outcome'] = []
                continue
            elif stripped.startswith('## '):
                current_section = stripped[3:].lower()
                sections[current_section] = []
                continue

            sections.setdefault(current_section, []).append(line)

        # Clean up sections -- join lines, strip whitespace
        for key in sections:
            sections[key] = '\n'.join(sections[key]).strip()

        project['body'] = sections.get('body', '')
        project['before'] = sections.get('before', '')
        project['after'] = sections.get('after', '')
        project['outcome'] = sections.get('outcome', '')

        projects.append(project)

    return projects


def parse_experience(filepath):
    """Parse experience.md into changelog entries."""
    with open(filepath, 'r') as f:
        text = f.read()

    entries = []
    # Split on --- separators or # h1 headers
    blocks = re.split(r'\n---\n|\n(?=# v)', text)

    for block in blocks:
        block = block.strip()
        if not block:
            continue

        entry = {'sections': []}

        # Parse header: # v7.0 | R-Zero -- VP Product | 2023 - Present
        header_match = re.match(r'^# (v[\d.]+) \| (.+?) \| (.+?)$', block, re.MULTILINE)
        if header_match:
            entry['version'] = header_match.group(1)
            entry['title'] = header_match.group(2)
            entry['period'] = header_match.group(3)
        else:
            # Try alternate format for education: # v1.0 | Education | Northwestern University
            header_match = re.match(r'^# (v[\d.]+) \| (.+?) \| (.+?)$', block, re.MULTILINE)
            if not header_match:
                continue

        current_section = None
        for line in block.split('\n')[1:]:  # Skip header line
            stripped = line.strip()
            if stripped.startswith('## '):
                label = stripped[3:].strip()
                current_section = {'label': label.lower(), 'items': []}
                entry['sections'].append(current_section)
            elif stripped.startswith('- ') and current_section is not None:
                current_section['items'].append(stripped[2:])

        entries.append(entry)

    return entries


def parse_testimonials(filepath):
    """Parse testimonials.md into review entries."""
    with open(filepath, 'r') as f:
        text = f.read()

    reviews = []
    blocks = text.split('\n---\n')

    for block in blocks:
        block = block.strip()
        if not block:
            continue

        # Parse header: # Name | Role, Company
        header_match = re.match(r'^# (.+?) \| (.+?)$', block, re.MULTILINE)
        if not header_match:
            continue

        name = header_match.group(1)
        role = header_match.group(2)
        # Body is everything after the header line
        body_lines = block.split('\n')[1:]
        body = '\n'.join(body_lines).strip()

        reviews.append({
            'name': name,
            'role': role,
            'body': body,
        })

    return reviews


def parse_contact(filepath):
    """Parse contact.md into structured data."""
    with open(filepath, 'r') as f:
        text = f.read()

    meta, body = parse_frontmatter(text)

    cards = []
    current_card = None
    intro = []
    parsing_intro = True

    for line in body.split('\n'):
        stripped = line.strip()
        if stripped.startswith('## '):
            parsing_intro = False
            current_card = {'title': stripped[3:], 'desc': ''}
            cards.append(current_card)
        elif current_card is not None:
            if stripped:
                current_card['desc'] = (current_card['desc'] + ' ' + stripped).strip()
        elif parsing_intro and stripped:
            intro.append(stripped)

    return {
        'heading': meta.get('heading', ''),
        'cta_href': meta.get('cta_href', ''),
        'cta_text': meta.get('cta_text', ''),
        'intro': ' '.join(intro),
        'cards': cards,
    }


def generate_js(hero, hiw, projects, experience, testimonials, contact):
    """Generate js/content.js from parsed data."""
    lines = [
        '// Auto-generated by build.py -- do not edit directly.',
        '// Edit the .md files in content/ and run: python3 build.py',
        '',
        'var heroContent = ' + json.dumps(hero, indent=2, ensure_ascii=False) + ';',
        '',
        'var howIWorkFiles = ' + json.dumps(hiw, indent=2, ensure_ascii=False) + ';',
        '',
        'var projectsContent = ' + json.dumps(projects, indent=2, ensure_ascii=False) + ';',
        '',
        'var experienceContent = ' + json.dumps(experience, indent=2, ensure_ascii=False) + ';',
        '',
        'var testimonialsContent = ' + json.dumps(testimonials, indent=2, ensure_ascii=False) + ';',
        '',
        'var contactContent = ' + json.dumps(contact, indent=2, ensure_ascii=False) + ';',
        '',
    ]
    return '\n'.join(lines)


def assemble_dist():
    """Copy only servable files into dist/ for deployment."""
    if os.path.exists(DIST_DIR):
        shutil.rmtree(DIST_DIR)
    os.makedirs(DIST_DIR)

    # Files and directories to include in the deployment
    items = [
        'index.html',
        'splash-data.js',
        'css',
        'js',
    ]

    for item in items:
        src = os.path.join(ROOT_DIR, item)
        dst = os.path.join(DIST_DIR, item)
        if os.path.isdir(src):
            shutil.copytree(src, dst)
        elif os.path.isfile(src):
            shutil.copy2(src, dst)
        else:
            print(f'  Warning: {item} not found, skipping', file=sys.stderr)

    # Count files for summary
    file_count = sum(len(files) for _, _, files in os.walk(DIST_DIR))
    print(f'build.py: Assembled dist/ ({file_count} files)')


def main():
    print('build.py: Reading content files...')

    hero = parse_hero(os.path.join(CONTENT_DIR, 'hero.md'))
    print('  hero.md')

    hiw = parse_how_i_work(os.path.join(CONTENT_DIR, 'how-i-work'))
    print(f'  how-i-work/ ({len(hiw)} files)')

    projects = parse_projects(os.path.join(CONTENT_DIR, 'projects'))
    print(f'  projects/ ({len(projects)} files)')

    experience = parse_experience(os.path.join(CONTENT_DIR, 'experience.md'))
    print(f'  experience.md ({len(experience)} entries)')

    testimonials = parse_testimonials(os.path.join(CONTENT_DIR, 'testimonials.md'))
    print(f'  testimonials.md ({len(testimonials)} reviews)')

    contact = parse_contact(os.path.join(CONTENT_DIR, 'contact.md'))
    print('  contact.md')

    js = generate_js(hero, hiw, projects, experience, testimonials, contact)

    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, 'w') as f:
        f.write(js)

    print(f'build.py: Generated {OUTPUT_FILE} ({len(js)} bytes)')

    assemble_dist()


if __name__ == '__main__':
    main()
