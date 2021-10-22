import React from 'react';
import { Provider } from 'react-redux';
import { Router } from './Router';
import './App.css';
import { store } from './Store';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
