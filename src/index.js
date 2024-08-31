import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/style.css';

// Component Imports

import Drafter from './components/draft';
import Outliner from './components/outline';
import Reader from './components/reader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='outlineDraft'>
    {/* outlineOnly outlineDraft outlineReader */}
    <Outliner/>
    <Drafter/>
    <Reader/>
  </div>

);
