import { CreateToastFnReturn, useToast } from '@chakra-ui/react';

export function useErrorToast(): CreateToastFnReturn {
  return useToast({
    status: 'error',
    variant: 'left-accent',
    position: 'top-right',
    isClosable: true,
  });
}
