import { ChakraProvider } from '@chakra-ui/react';
import { FC } from 'react';

import { Router } from '../pages';

export const App: FC = () => {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
};
