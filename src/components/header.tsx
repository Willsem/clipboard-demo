import {
  Center,
  Flex,
  IconButton,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FiBookOpen, FiFileText, FiPenTool } from 'react-icons/fi';
import { MdDarkMode, MdLightMode, MdOutlineEventNote } from 'react-icons/md';

import { HeaderButton, Logo } from '.';
import { APPLICATION_WIDTH } from '../constants';
import styles from './header.module.scss';

export const Header: FC = () => {
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

          <HeaderButton path="/text" icon={<FiFileText />}>
            Text
          </HeaderButton>

          <HeaderButton path="/read" icon={<FiBookOpen />}>
            Read
          </HeaderButton>

          <HeaderButton path="/write" icon={<FiPenTool />}>
            Write
          </HeaderButton>

          <HeaderButton path="/events" icon={<MdOutlineEventNote />}>
            Events
          </HeaderButton>

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
