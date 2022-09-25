import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import ManageTypes from '../views/ManageTypes';
import TypeView from '../views/TypeView';

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path='/:id' element={<TypeView />} />
        <Route path='/manage-types' element={<ManageTypes />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Index;
