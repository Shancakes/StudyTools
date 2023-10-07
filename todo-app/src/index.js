import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TodoList from './App';

ReactDOM.render(
  <React.StrictMode>
    <TodoList /> {/* Render the TodoList component */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
