import React from 'react';
import './Button2.css';

const ButtonComponent2 = ({ onClick, text }) => {
return (
    <>
    <button className="submit"  onClick={onClick}>
    {text}</button>
    </>
);
}

export default ButtonComponent2;