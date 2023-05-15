export async function readTextClipboard(): Promise<string> {
  return navigator.clipboard.readText();
}
