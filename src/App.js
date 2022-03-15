import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Curriculum from './pages/curriculum/curriculum';
import Practice from './pages/practice/practice';
import Grade from './pages/practice/grade';
import Subject from './pages/practice/subject';
import Section from './pages/practice/section';
import Unit from './pages/practice/unit';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/curriculum" element={<Curriculum />} />
      <Route exact path="/practice" element={<Practice />} />
      <Route exact path="/practice/:grade" element={<Grade />} />
      <Route exact path="/practice/:grade/:subject" element={<Subject />} />
      <Route exact path="/practice/:grade/:subject/:section" element={<Section />} />
      <Route exact path="/practice/:grade/:subject/:section/:unit" element={<Unit />} />
    </Routes>
  );
}

export default App;
