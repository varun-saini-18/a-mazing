import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
// Yarn dev:server

import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer.js';

const jsx = ( 
  <div className="App">
      <PathfindingVisualizer></PathfindingVisualizer>
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'))
