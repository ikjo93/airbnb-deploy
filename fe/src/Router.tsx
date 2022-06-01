import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import NotFound from '@/pages/NoteFound';
import Search from '@/pages/Search';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
