import React from "react";
import { AppActions, RobotDirectionType, State } from "../types/types";

export const initialState: State = {
  rows: 5,
  columns: 5,
  robotPosition: {x:0, y:0},
  direction: RobotDirectionType.EAST
};

export type AppContextType = {
  state:State,
  dispatch: ( action:AppActions ) => void,
  rotateNorth: () => void,
  rotateSouth: () => void,
  rotateEast: () => void,
  rotateWest: () => void,
  moveForwards: () => void,
  resetRobotPosition: () => void,
}

export default React.createContext<Partial<AppContextType>>({});
