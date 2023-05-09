import { ClipboardContentItem } from '.';

export async function writeClipboard(
  content: ClipboardContentItem[],
): Promise<void> {
  const itemContent: Record<string, Blob> = {};
  content.forEach(item => {
    itemContent[item.type] = new Blob([item.content], {
      type: item.type,
    });
  });

  return navigator.clipboard.write([new ClipboardItem(itemContent)]);
}
