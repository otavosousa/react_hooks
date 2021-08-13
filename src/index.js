import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setColor } from './global.style'

setColor({
  primary: 'red'
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
