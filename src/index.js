import React from 'react';
import ReactDOM from 'react-dom';
import { ExpenseProvider } from "./Context"
import App from './App';


ReactDOM.render(
  <ExpenseProvider>
    <App />
  </ExpenseProvider>,
  document.getElementById('root')
);


