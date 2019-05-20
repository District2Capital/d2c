import React from 'react';
import logo from '../assets/logo.png';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='banner topbanner'></div>
      <div id='betweenbanners'>
        <div id='logobanner'>
          <div id='logocentered'>
            <img id="d2clogo" src={logo} alt="D2C logo"/>
            <p id="d2ctitle">DISTRICT 2 CAPITAL</p>
          </div>
        </div>
      </div>
      <div className='banner bottombanner'></div>
    </div>
  );
}

export default App;
