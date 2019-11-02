import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-2">
            Menüüüüüü
          </div>
          <div className="col-10">
            <svg className='Beam'>
              <rect x="13" y="14" width="500" height="200" rx="50" ry="100"
                    fill="none" stroke="blue" strokeWidth="10"/>
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
