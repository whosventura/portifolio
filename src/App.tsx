import React from 'react';

import { Route, BrowserRouter, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
