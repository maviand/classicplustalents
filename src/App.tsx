import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import World from './pages/World';
import Player from './pages/Player';
import Races from './pages/Races';
import Runes from './pages/Runes';
import Talents from './pages/Talents';
import PvE from './pages/PvE';
import PvP from './pages/PvP';
import WorldSystems from './pages/WorldSystems';
import Professions from './pages/Professions';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="world" element={<World />} />
            
            <Route path="player" element={<Player />}>
              <Route index element={<Navigate to="races" replace />} />
              <Route path="races" element={<Races />} />
              <Route path="classes" element={<Navigate to="/player/talents" replace />} />
              <Route path="runes" element={<Runes />} />
              <Route path="talents" element={<Talents />} />
            </Route>
            
            <Route path="pve" element={<PvE />} />
            <Route path="pvp" element={<PvP />} />
            <Route path="systems" element={<WorldSystems />} />
            <Route path="professions" element={<Professions />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}
