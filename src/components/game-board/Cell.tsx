import React from "react";

import './cell.css';
import Robot from "../Robot";
import { PositionType, RobotDirectionType } from "../../types/types";

type ComponentProps = {
  cellPosition: PositionType,
  robotPosition?: PositionType,
  direction?: RobotDirectionType,
};

export const Cell: React.FC< ComponentProps > = ({cellPosition, robotPosition, direction}) => {
  const isRobotHere = robotPosition
                      && cellPosition.x === robotPosition.x
                      && cellPosition.y === robotPosition.y;

  const className = isRobotHere ? 'cell active' : 'cell';

  return (
    <div className={ className }>
      {
        isRobotHere && <Robot direction={direction} />
      }
    </div>
  );
};