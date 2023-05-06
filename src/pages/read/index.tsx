import { Box, Button, Table, TableCaption, Tbody, Td, Th, Thead, Tr, useToast } from '@chakra-ui/react';
import { FC, useState } from 'react';

import { ClipboardContentItem, readClipboard } from '../../lib/clipboard';

export const ReadPage: FC = () => {
  const [items, setItems] = useState<ClipboardContentItem[]>([]);
  const toast = useToast();

  const clickInspectClipboard = () =>
    readClipboard()
      .then(i => setItems(i))
      .catch((e: Error) => {
        toast({
          title: 'Error while reading the clipboard',
          description: e.message,
          status: 'error',
          variant: 'left-accent',
          position: 'top-right',
          isClosable: true,
        });
      });

  const tBody = items.map(item => (
    <Tr>
      <Td>{item.type}</Td>
      <Td>{item.content}</Td>
    </Tr>
  ));

  return (
    <Box>
      <Button onClick={clickInspectClipboard}>Inspect your clipboard</Button>
      <Table variant="simple">
        <TableCaption>Clipboard content</TableCaption>
        <Thead>
          <Tr>
            <Th>Type</Th>
            <Th>Content</Th>
          </Tr>
        </Thead>
        <Tbody>{tBody}</Tbody>
      </Table>
    </Box>
  );
};
