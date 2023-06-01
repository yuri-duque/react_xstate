import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Todo from './components/Todo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Todo />
  </React.StrictMode>
);
