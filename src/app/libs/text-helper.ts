export function findSpecialCharacters(text: string): string[] {
  const specialCharsToFind = ['\n', '\r', '\t', ' '];
  const foundChars = new Set<string>();
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (specialCharsToFind.includes(char)) {
      foundChars.add(char);
    }
  }
  return Array.from(foundChars);
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

