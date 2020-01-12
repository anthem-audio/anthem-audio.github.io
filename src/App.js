import React from 'react';
import Background from './components/Background';
import './App.css';
import Foreground from './components/Foreground';

function App() {
  return (
    <div className="app">
      <Background />
      <Foreground />
    </div>
  );
}

export default App;
