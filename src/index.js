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
     




// DATABASE STRUCTURE:
// Project Table: project id, title, description
// Series Table: plot id, title, content, 
// Trilogy Table: trilogy id, relevant books, trilogy title, trilogy summary, 
// Book Table: book ID (series, book), book title, book summary, book design, 
// Chapter Table: chapter ID (series, book, chapter), chapter title, chapter summary
// Draft Table: sentence ID (series, book, chapter, paragraph, sentence)