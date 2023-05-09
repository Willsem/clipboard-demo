import { CreateToastFnReturn, useToast } from '@chakra-ui/react';

export function useSuccessToast(): CreateToastFnReturn {
  return useToast({
    status: 'success',
    variant: 'left-accent',
    position: 'top-right',
    isClosable: true,
  });
}
