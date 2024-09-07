import { AppActions, State } from "../types/types";
import robotActionReducer from "./RobotActionReducer";
import robotDirectionReducer from "./RobotDirectionReducer";

const rootReducer = (state: State, action: AppActions):State => {
  return {
    rows: state.rows,
    columns: state.columns,
    robotPosition: robotActionReducer(state, action),
    direction: robotDirectionReducer(state, action.type),
  };
};

export default rootReducer;