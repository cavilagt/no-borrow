import React from 'react';
import { ReactComponent as RobotIcon } from '../assets/robot.svg';
import { RobotDirectionType } from '../types/types';
import './robot.css';


type ComponentProps = {
  direction?: RobotDirectionType,
};

const Robot: React.FC<ComponentProps> = ({ direction }) => {
  return <RobotIcon className={`robot${direction ? ` ${direction}` : ''}`} />;
};

export default Robot;