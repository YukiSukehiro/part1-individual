import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './TextFieldComponent1.css';

const TextFieldComponent1 = ({ value1,value2,value3,value4, onChange }) => {
  return (
    <>
    <input className="textfield1" type="text" placeholder="Username" value={value1} onChange={onChange} />
    <FontAwesomeIcon icon={faUser} className="user-icon" />
    <input className="textfield2" type="text" placeholder="Address" value={value2} onChange={onChange} />
    <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
    <input className="textfield3" type="text" placeholder="+63 |" value={value3} onChange={onChange} />
    <FontAwesomeIcon icon={faPhone} className="phone-icon" />
    <input className="textfield4" type="text" placeholder="Email" value={value4} onChange={onChange} />
    <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" />

    </>
  );
}

export default TextFieldComponent1;
