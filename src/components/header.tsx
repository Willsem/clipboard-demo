import { Button, Center, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { FiBookOpen, FiPenTool } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

import { Logo } from '.';
import { APPLICATION_WIDTH } from '../constants';
import styles from './header.module.scss';

export const Header: FC = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <Center>
        <Flex gap={5} w={APPLICATION_WIDTH}>
          <Logo />
          <Link to="/read">
            <Button
              leftIcon={<FiBookOpen />}
              colorScheme="teal"
              variant="ghost"
              isActive={location.pathname === '/read'}
            >
              Read
            </Button>
          </Link>
          <Link to="/write">
            <Button
              leftIcon={<FiPenTool />}
              colorScheme="teal"
              variant="ghost"
              isActive={location.pathname === '/write'}
            >
              Write
            </Button>
          </Link>
        </Flex>
      </Center>
    </header>
  );
};
