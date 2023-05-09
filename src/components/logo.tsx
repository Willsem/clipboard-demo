import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

import favicon from '../assets/favicon.svg';
import styles from './logo.module.scss';

export const Logo: FC = () => {
  return (
    <Flex gap="8px" alignItems="center">
      <img src={favicon} className={styles.logo__icon} />
      <Text fontSize="2xl" colorScheme="blue">
        Clipboard Demo
      </Text>
    </Flex>
  );
};
