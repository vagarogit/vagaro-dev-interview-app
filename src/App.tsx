// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoxRenderer from './components/BoxRenderer';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BoxRenderer />} />
    </Routes>
  );
};

export default App;
