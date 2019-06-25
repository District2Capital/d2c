import React from 'react';
import logo from '../assets/logo.png';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='banner topbanner'></div>
      <div id='betweenbanners'>
        <div id='logobanner'>
          <div id='logocentered'>
            <img className="mb-4" id="d2clogo" src={logo} alt="D2C logo" />
            {/*<p className="my-3" id="d2ctitle">DISTRICT 2 CAPITAL</p>*/}
            <a className="text-decoration-none" href="https://portal.district2capital.com">
              <div className="loginBtn">
                <p>Portal</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='banner bottombanner'></div>
    </div>
  );
}

export default App;
