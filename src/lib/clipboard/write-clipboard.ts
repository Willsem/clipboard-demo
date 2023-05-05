import { ClipboardContentItem } from '.';

export async function writeClipboard(content: ClipboardContentItem[]): Promise<void> {
  const clipboardItems = content.map(
    item =>
      new ClipboardItem({
        [item.type]: new Blob([item.content], {
          type: item.type,
        }),
      }),
  );

  return navigator.clipboard.write(clipboardItems);
}
