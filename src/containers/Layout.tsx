import React from "react";
import { Board } from "../components/game-board/Board";
import Gamepad from "../components/gamepad/Gamepad";
import './layout.css';

const Layout:React.FC = () => {
  return (
    <div className="layout">
      <Board />
      <div className="controls">
        <Gamepad />
      </div>
    </div>
  );
};

export default Layout;
