import { Grid, GridItem, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

import { ControlInput } from '../../../components';

interface Props {
  index: number;
  onRemove: () => void;
}

export const InputRow: FC<Props> = ({ index, onRemove }) => {
  return (
    <Grid templateColumns="repeat(25, 1fr)" gap="16px">
      <GridItem colSpan={6}>
        <ControlInput
          name={`items.${index}.type`}
          required
          placeholder="Type"
          errorBorderColor="red"
        />
      </GridItem>
      <GridItem colSpan={18}>
        <ControlInput
          name={`items.${index}.content`}
          required
          placeholder="Content"
          errorBorderColor="red"
        />
      </GridItem>
      <GridItem>
        <IconButton
          colorScheme="red"
          variant="outline"
          icon={<BsFillTrashFill />}
          aria-label="delete content"
          onClick={onRemove}
        />
      </GridItem>
    </Grid>
  );
};
