import { Box, Spacer, Textarea } from '@chakra-ui/react';
import { ClipboardEvent, FC } from 'react';

import { CUSTOM_MIME_TYPE, SECRET_KEY } from '../../constants';
import { readClipboard, writeClipboard } from '../../lib/clipboard';
import { useErrorToast, useSuccessToast } from '../../providers';

export const EventsPage: FC = () => {
  const toast = useSuccessToast();
  const errorToast = useErrorToast();

  const onWriteClipboard = (e: ClipboardEvent) => {
    const selection = document.getSelection();

    writeClipboard([
      {
        type: 'text/plain',
        content: selection + ' (copied from clipboard-demo)',
      },
      {
        type: CUSTOM_MIME_TYPE,
        content: SECRET_KEY,
      },
    ])
      .then(() => {
        toast({
          title: e.type,
          description: `Successfully ${e.type} data`,
        });
      })
      .catch((error: Error) => {
        errorToast({
          title: e.type,
          description: error.message,
        });
      });

    e.preventDefault();
  };

  const onPaste = async (e: ClipboardEvent) => {
    e.preventDefault();

    readClipboard()
      .then(items => {
        let wasCustom = false;
        let text = '';
        for (const item of items) {
          if (item.type === CUSTOM_MIME_TYPE && item.content === SECRET_KEY) {
            wasCustom = true;
          }

          if (item.type === 'text/plain') {
            text = item.content;
          }
        }

        if (!wasCustom) {
          errorToast({
            title: e.type,
            description: 'You did not copy from this page',
          });

          return;
        }

        const target = e.target as HTMLTextAreaElement;
        target.value += text;

        toast({
          title: e.type,
          description: 'Successfully pasted data',
        });
      })
      .catch((error: Error) => {
        errorToast({
          title: e.type,
          description: error.message,
        });
      });
  };

  return (
    <Box>
      <Textarea
        autoComplete="off"
        placeholder="Try to cut or copy this text"
        value="Try to cut or copy this text"
        rows={1}
        resize="none"
        onCopy={onWriteClipboard}
        onCut={onWriteClipboard}
      />
      <Spacer h="12px" />
      <Textarea
        autoComplete="off"
        placeholder="And then paste it here"
        rows={10}
        resize="none"
        onPaste={onPaste}
      />
    </Box>
  );
};
