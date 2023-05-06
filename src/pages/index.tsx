import { Box, Center } from '@chakra-ui/react';
import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Header } from '../components';
import { APPLICATION_WIDTH } from '../constants';
import { NotFoundPage } from './not-found';
import { ReadPage } from './read';
import { WritePage } from './write';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Center>
        <Box w={APPLICATION_WIDTH} pt="24px">
          <Routes>
            <Route path="/" element={<Navigate to="/read" replace={true} />} />
            <Route path="/read" element={<ReadPage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>
      </Center>
    </BrowserRouter>
  );
};
