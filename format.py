import re

with open('/Users/loren/syncthing/work-active/Biteral/repositories/biteral-doc/docs/guide/integration-data/events/types.md', 'r') as f:
    content = f.read()

def replacer(match):
    params_text = match.group(0)
    
    # Strip leading/trailing whitespace
    pairs = params_text.replace('##### Parámetros\n\n', '').strip().split('\n\n')
    
    table_lines = [
        "| Parámetro| Valor |",
        "| :--- | :--- |"
    ]
    
    for pair in pairs:
        lines = pair.strip().split('\n')
        # Expecting at least 2 lines: the badge, and the ': value'
        if len(lines) >= 2 and lines[1].startswith(': '):
            param = lines[0].strip()
            value = lines[1][2:].strip()
            table_lines.append(f"| {param} | {value} |")
        else:
            # Just ignore if it doesn't match expected pattern, though it shouldn't happen based on the file content.
            pass
            
    return "\n".join(table_lines) + "\n"

# Find all blocks starting with ##### Parámetros until the next </details>
parts = re.split(r'(##### Parámetros.*?(?=\n</details>))', content, flags=re.DOTALL)
new_content = ""
for part in parts:
    if part.startswith('##### Parámetros'):
        new_content += replacer(re.match(r'(##### Parámetros.*)', part, flags=re.DOTALL))
    else:
        new_content += part

with open('/Users/loren/syncthing/work-active/Biteral/repositories/biteral-doc/docs/guide/integration-data/events/types.md', 'w') as f:
    f.write(new_content)

print("done")
