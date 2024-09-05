// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ArticlePage from './components/ArticlePage';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Dynamic slug route */}
      <Route path="/article/:slug" element={<ArticlePage />} />
    </Routes>
  );
};

export default App;
