import {
  Box,
  Button,
  Spacer,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FC, useState } from 'react';

import { ClipboardContentItem, readClipboard } from '../../lib/clipboard';
import { useErrorToast } from '../../providers';

export const ReadPage: FC = () => {
  const [items, setItems] = useState<ClipboardContentItem[]>([]);
  const toast = useErrorToast();

  const clickInspectClipboard = () =>
    readClipboard()
      .then(i => setItems(i))
      .catch((e: Error) => {
        toast({
          title: 'Error while reading the clipboard',
          description: e.message,
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
      <Button onClick={clickInspectClipboard} colorScheme="blue">
        Inspect your clipboard
      </Button>
      <Spacer h="24px" />
      <Table variant="simple" colorScheme="blue">
        <TableCaption color="grey">Clipboard content</TableCaption>
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
