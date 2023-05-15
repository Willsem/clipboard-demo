export async function writeTextClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}
