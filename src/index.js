import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* Set Default Font */}
    <div className="font-sans">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
