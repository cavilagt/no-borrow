import { RobotActionType, RobotDirectionType, State } from "../types/types";

const robotDirectionReducer = (state: State, actionType: RobotActionType) => {
  switch (actionType) {
    case RobotActionType.ROTATE_EAST:
      return RobotDirectionType.EAST;

    case RobotActionType.ROTATE_SOUTH:
      return RobotDirectionType.SOUTH;

    case RobotActionType.ROTATE_NORTH:
      return RobotDirectionType.NORTH;

    case RobotActionType.ROTATE_WEST:
        return RobotDirectionType.WEST;

    default:
      return state.direction;
  }
}

export default robotDirectionReducer;