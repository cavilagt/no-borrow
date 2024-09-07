import React, { useReducer } from "react";
import AppContext, { initialState } from "./AppContext";
import rootReducer from "../reducers";
import { RobotActionType } from "../types/types";

type ComponentProps = {
  children: React.ReactNode,
};

const AppContextProvider:React.FunctionComponent<ComponentProps> = ({ children }) => {
    const [ state, dispatch ] = useReducer( rootReducer, initialState );

    const rotateNorth = () => {
      dispatch({ type:RobotActionType.ROTATE_NORTH });
    }

    const rotateSouth = () => {
      dispatch({ type:RobotActionType.ROTATE_SOUTH });
    }

    const rotateWest = () => {
      dispatch({ type:RobotActionType.ROTATE_WEST });
    }

    const rotateEast = () => {
      dispatch({ type:RobotActionType.ROTATE_EAST });
    }

    const resetRobotPosition = () => {
      dispatch({ type:RobotActionType.RESET_POSITION });
    }

    const moveForwards = () => {
      dispatch({ type:RobotActionType.MOVE_FORWARDS });
    }
    
    const providerValue = { state, dispatch, rotateNorth, rotateSouth, rotateEast, rotateWest, moveForwards, resetRobotPosition };
    
    return (
      <AppContext.Provider value={ providerValue }>
        {children}
      </AppContext.Provider>
    );
  }

  export default AppContextProvider;