import { Text } from '@chakra-ui/react';
import { FC } from 'react';

import favicon from '../assets/favicon.svg';
import styles from './logo.module.scss';

export const Logo: FC = () => {
  return (
    <>
      <img src={favicon} className={styles.logo__icon} />
      <Text fontSize="3xl">Clipboard Demo</Text>
    </>
  );
};
