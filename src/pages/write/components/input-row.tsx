import { Grid, GridItem, IconButton, Input } from '@chakra-ui/react';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { BsFillTrashFill } from 'react-icons/bs';

interface Props {
  index: number;
  onRemove: () => void;
}

export const InputRow: FC<Props> = ({ index, onRemove }) => {
  const { control } = useFormContext();

  return (
    <Grid templateColumns="repeat(13, 1fr)" gap="16px">
      <GridItem colSpan={3}>
        <Controller
          name={`items.${index}.type`}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input placeholder="Type" {...field} />}
        />
      </GridItem>
      <GridItem colSpan={9}>
        <Controller
          name={`items.${index}.content`}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input placeholder="Content" {...field} />}
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
