import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Game } from "./components/game-input";
import { GameProvider } from "./context/GameContext";


const App = () => {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </GameProvider>
  );
};

export default App;
