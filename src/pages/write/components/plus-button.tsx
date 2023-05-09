import { IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

interface Props {
  onClick: () => void;
}

export const PlusButton: FC<Props> = ({ onClick }) => {
  return (
    <IconButton
      colorScheme="blue"
      variant="outline"
      icon={<AiOutlinePlus />}
      aria-label="add content"
      onClick={onClick}
    />
  );
};
