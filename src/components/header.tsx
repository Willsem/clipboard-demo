import {
  Button,
  Center,
  Flex,
  IconButton,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FiBookOpen, FiPenTool } from 'react-icons/fi';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

import { Logo } from '.';
import { APPLICATION_WIDTH } from '../constants';
import styles from './header.module.scss';

export const Header: FC = () => {
  const location = useLocation();

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <header className={styles.header}>
      <Center boxShadow="base" padding="12px">
        <Flex
          gap="16px"
          w={APPLICATION_WIDTH}
          alignItems="center"
          pl="12px"
          pr="12px"
        >
          <Logo />
          <Link to="/read">
            <Button
              leftIcon={<FiBookOpen />}
              colorScheme="blue"
              variant="ghost"
              isActive={location.pathname === '/read'}
            >
              Read
            </Button>
          </Link>
          <Link to="/write">
            <Button
              leftIcon={<FiPenTool />}
              colorScheme="blue"
              variant="ghost"
              isActive={location.pathname === '/write'}
            >
              Write
            </Button>
          </Link>
          <Spacer />
          <IconButton
            icon={colorMode === 'dark' ? <MdLightMode /> : <MdDarkMode />}
            aria-label="switch color mode"
            variant="ghost"
            size="lg"
            onClick={toggleColorMode}
          />
        </Flex>
      </Center>
    </header>
  );
};
