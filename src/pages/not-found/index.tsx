import { Flex, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './index.module.scss';

export const NotFoundPage: FC = () => {
  const location = useLocation();

  return (
    <Flex className={styles.notFoundPage} w="100%" alignItems="center" justifyContent="center" flexDir="column">
      <Heading size="3xl">Not Found</Heading>
      <Text fontSize="xl">The page "{location.pathname}" does not exist</Text>
    </Flex>
  );
};
