import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/style.css';

// Component Imports

import Interface from './components/interface';
import Dashboard from './components/dashboard';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div id="screenContainer" className='interfaceOpen'>
    {/* interfaceOpen interfaceClosed */}
    <Interface/>
    <Dashboard/>
  </div>

);
     