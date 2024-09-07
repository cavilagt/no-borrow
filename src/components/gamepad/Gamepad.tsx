import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import { Button } from './Button';
import './gamepad.css';

enum Key {
  ARROW_UP = 'ArrowUp',
  ARROW_DOWN = 'ArrowDown',
  ENTER = 'Enter',
  ARROW_LEFT = 'ArrowLeft',
  ARROW_RIGHT = 'ArrowRight',
}

const Gamepad: React.FC = () => {
  const { rotateNorth, rotateSouth, rotateEast, rotateWest, moveForwards } = useContext(AppContext);

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case Key.ARROW_DOWN:
        rotateSouth && rotateSouth()
        break;

      case Key.ARROW_LEFT:
        rotateWest && rotateWest()
        break;

      case Key.ARROW_RIGHT:
        rotateEast && rotateEast()
        break;

      case Key.ARROW_UP:
        rotateNorth && rotateNorth()
        break;
        
      case Key.ENTER:
        moveForwards && moveForwards()
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className='gamepad'>
      <Button className='oneButtonRow' onClick={rotateNorth}>{'\u2B9D'}</Button>
      <Button onClick={rotateWest}>{'\u2B9C'}</Button>
      <Button onClick={moveForwards}>GO</Button>
      <Button onClick={rotateEast}>{'\u2B9E'}</Button>
      <Button className='oneButtonRow' onClick={rotateSouth}>{'\u2B9F'}</Button>
    </div>
  );
};

export default Gamepad;