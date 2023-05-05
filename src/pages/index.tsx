import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Header } from '../components';
import { NotFoundPage } from './not-found';
import { ReadPage } from './read';
import { WritePage } from './write';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/read" replace={true} />} />
        <Route path="/read" element={<ReadPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
