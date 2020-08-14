import React from 'react';
import { CounterAdjustment } from './features/counter/components/CounterAdjustment';
import { CounterDisplay } from './features/counter/components/CounterDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterDisplay />
        <CounterAdjustment />
      </header>
    </div>
  );
}

export default App;
