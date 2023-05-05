import { ClipboardContentItem } from '.';

export async function readClipboard(): Promise<ClipboardContentItem[]> {
  return navigator.clipboard.read().then(async items => {
    const result: ClipboardContentItem[] = [];

    for (const item of items) {
      for (const type of item.types) {
        const blob = await item.getType(type);
        const text = await blob.text();
        result.push({
          type: type,
          content: text,
        });
      }
    }

    return result;
  });
}
