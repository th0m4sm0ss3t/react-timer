// == Import npm
import React, { useState, useEffect } from 'react'; // import the useState Hook

// == Import
import TimerLogo from 'src/assets/img/logoTimer.svg';
import './styles.scss';

// == Composant
const App = () => {
  // initialize 2 states : 
  //  - seconds (for the value of our timer)
  //  - isActive (for the state of our timer - paused or working)
  const [seconds, setSeconds] = useState(0); // default -> 0
  const [isActive, setIsActive] = useState(false); // default -> paused

  // useEffect
  useEffect(() => {
    let interval = null;
    
    if(isActive) { // detection of isActive
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1); // increment the value by 1 second
      }, 1000);
    } else if (!isActive && seconds !== 0) { // if isActive is false
      clearInterval(interval); // clean
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  // function that will change the value of isActive
  function toggle() {
    setIsActive(!isActive);
  }

  // function that will reset our timer
  function reset() {
    setSeconds(0);
    setIsActive(false);
  }
  
  return (
    <div className="app">
      <img src={TimerLogo} alt="react logo" className="logo" />
      <h1 className="title">Creating a Timer using <span className="span">React.js</span> and <span className="span">Hooks</span></h1>
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ?'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

// == Export
export default App;
