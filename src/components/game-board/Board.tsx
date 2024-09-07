import React, { useContext } from "react";

import './board.css';
import { Cell } from "./Cell";
import { PositionType } from "../../types/types";
import AppContext from "../../context/AppContext";

export const Board: React.FC = () => {
  const { state } = useContext(AppContext);
  const { rows, columns, robotPosition, direction } = state!;

  const renderBoard = () => {
    let board:PositionType[] = [];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        board.push({x, y});
      }
    }

    return board.map((cell =>
      <Cell key={`${cell.x}${cell.y}`} cellPosition={cell} robotPosition={robotPosition} direction={direction} />
    ))
  }


  return (
    <div className="board">
      { renderBoard() }
    </div>
  );
};