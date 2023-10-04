import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (e) => {
    const buttonValue = e.target.value;

    if (buttonValue === 'C') {
      setValue('');
    } else if (buttonValue === 'DE') {
      setValue(value.slice(0, -1));
    } else if (buttonValue === '=') {
      try {
        setValue(eval(value).toString());
      } catch (error) {
        setValue('Error');
      }
    } else {
      setValue(value + buttonValue);
    }
  };

  return (
    <div>
      <h1 className='head'><center>Calculator of Miguel Carlos - IT3A</center></h1>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div className="display">
              <input className="inputbutton" type="text" value={value} />
            </div>
            <div>
              <input type="button" value="C" onClick={handleButtonClick} />
              <input type="button" value="DE" onClick={handleButtonClick} />
              <input type="button" value="." onClick={handleButtonClick} />
              <input type="button" value="/" onClick={handleButtonClick} />
            </div>
            <div>
              <input type="button" value="7" onClick={handleButtonClick} />
              <input type="button" value="8" onClick={handleButtonClick} />
              <input type="button" value="9" onClick={handleButtonClick} />
              <input type="button" value="*" onClick={handleButtonClick} />
            </div>
            <div>
              <input type="button" value="4" onClick={handleButtonClick} />
              <input type="button" value="5" onClick={handleButtonClick} />
              <input type="button" value="6" onClick={handleButtonClick} />
              <input type="button" value="+" onClick={handleButtonClick} />
            </div>
            <div>
              <input type="button" value="1" onClick={handleButtonClick} />
              <input type="button" value="2" onClick={handleButtonClick} />
              <input type="button" value="3" onClick={handleButtonClick} />
              <input type="button" value="-" onClick={handleButtonClick} />
            </div>
            <div>
              <input type="button" value="00" onClick={handleButtonClick} />
              <input type="button" value="0" onClick={handleButtonClick} />
              <input type="button" value="=" className="equal" onClick={handleButtonClick} />
            </div>
          </form>
        </div>
        <div className='carlos-button'>
          <input type='button' value={"Carlos"} onClick={e => setValue('Miguel Carlos')} />
        </div>
      </div>
    </div>
  );
}

export default App;
