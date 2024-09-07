export type PositionType = {
  x: number;
  y: number;
}

export type State = {
  rows: number,
  columns: number,
  robotPosition: PositionType,
  direction: RobotDirectionType,
}

export enum RobotActionType {
  ROTATE_NORTH='ROTATE_NORTH',
  ROTATE_SOUTH='ROTATE_SOUTH',
  ROTATE_EAST='ROTATE_EAST',
  ROTATE_WEST='ROTATE_WEST',
  MOVE_FORWARDS ='MOVE_FORWARDS',
  RESET_POSITION='RESET_POSITION',
}

export enum RobotDirectionType {
  NORTH ='north',
  EAST = 'east',
  WEST = 'west',
  SOUTH = 'south',
}

type MoveUp = {
  type: RobotActionType.ROTATE_NORTH
};
type MoveDown = {
  type: RobotActionType.ROTATE_SOUTH
};
type MoveLeft = {
  type: RobotActionType.ROTATE_EAST
};
type MoveRight = {
  type: RobotActionType.ROTATE_WEST
};
type MoveForwards = {
  type: RobotActionType.MOVE_FORWARDS
};
type ResetPosition = {
  type: RobotActionType.RESET_POSITION
};

export type RobotAction = MoveUp | MoveDown | MoveLeft | MoveRight | MoveForwards | ResetPosition;

export type AppActions = RobotAction;
