import Main from './component/Main';
import React, { useState } from 'react';
import ButtonComponent1 from './ButtonComponent1';
import ButtonComponent2 from './ButtonComponent2';
import TextFieldComponent1 from './TextFieldComponent1';
import H2Component from './H2Component';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';





const App = () => {
  const [inputValue, setInputValue] = useState("");
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

const handleCancel = () => {
console.log("Cancel Button clicked!");

};

const handleSubmit = () => {
console.log("Submit Button clicked!")
};

  return (
    <>
    <div className='App'>
    <Main />
      <H2Component text="Creep" />
      <ButtonComponent1 onClick={handleCancel} text="Cancel"/>
      <ButtonComponent2 onClick={handleSubmit} text="Submit" />
      <TextFieldComponent1 value={inputValue} onChange={handleInputChange} />
      <img src={img1} alt="Img1" className="img1" />;
      <img src={img2} alt="Img2" className="img2" />;
      <img src={img3} alt="Img3" className="img3" />;
      <img src={img4} alt="Img4" className="img4" />;
      </div>
      </>
  );
}

export default App;
