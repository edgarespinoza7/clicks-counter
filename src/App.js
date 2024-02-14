import { useState } from 'react';
import './App.css';
import freeCodeCampLogo from "./images/fcc_primary_large.svg";
import Button from './components/Button';
import Counter from './components/Counter';


function App() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  const restartCounter = () => {
    setCount(0);
  }



  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp" />
      </div>

      <div className="main-container">
        <Counter numOfClicks={count} />
        <Button
          text="Click"
          isClickButton={true}
          handleClick={handleClick}
        />
        <Button
          text="Restart"
          isClickButton={false}
          handleClick={restartCounter}
        />

      </div>
    </div>
  );
}

export default App;
