import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Scene from './components/Scene';
import Home from './pages/Home';
import GenericPage from './pages/GenericPage';
import MyLife from './pages/MyLife';
import Pursuits from './pages/Pursuits';
import Experiences from './pages/Experiences';
import GlobalMenu from './components/Menu';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <>
      <div className="canvas-container">
        <Scene />
      </div>
      <div className="content-overlay">
        <GlobalMenu />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/mylife" element={<MyLife />} />
            <Route path="/pursuits" element={<Pursuits />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/clubs" element={<GenericPage title="Clubs" />} />
            <Route path="/gallery" element={<GenericPage title="Gallery" />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
