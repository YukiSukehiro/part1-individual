import React from 'react';
import './Button1.css';

const ButtonComponent1 = ({ onClick, text }) => {
  return (
    <>
    <button className="cancel"  onClick={onClick}>
      {text}</button>
      </>
      
  );
}

export default ButtonComponent1;
