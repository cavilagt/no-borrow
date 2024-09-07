import { AppActions, PositionType, RobotActionType, RobotDirectionType, State } from "../types/types";

const defaultValue:PositionType = {
  x:0,
  y:0,
}

const robotActionReducer = (state: State, action: AppActions) => {
  if (action.type !== RobotActionType.MOVE_FORWARDS.toString())
    return state.robotPosition;

  const {robotPosition, rows, columns, direction} = state;

  switch (direction) {
    case RobotDirectionType.EAST:
      return (robotPosition.x >= columns-1) ?
        robotPosition
        : {...robotPosition, x: state.robotPosition.x + 1};

    case RobotDirectionType.WEST:
      return (robotPosition.x === 0) ?
        robotPosition
        : {...robotPosition, x: state.robotPosition.x - 1};

    case RobotDirectionType.SOUTH:
      return (robotPosition.y >= rows-1) ?
        robotPosition
        : {...robotPosition, y: state.robotPosition.y + 1};

    case RobotDirectionType.NORTH:
      return (robotPosition.y === 0) ?
        robotPosition
        : {...robotPosition, y: state.robotPosition.y - 1};
    
    default:
      return {...defaultValue};
  }
};

export default robotActionReducer;