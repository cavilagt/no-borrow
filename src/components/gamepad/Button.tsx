import React from "react";
import './button.css';

type ComponentProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button: React.FC< ComponentProps > = ({ className='', children, onClick }) => {
  
  const buttonClassName = `button`;

  return (
      <div className={ `${buttonClassName} ${className}` } onClick={onClick}>{children}</div>
  );
};