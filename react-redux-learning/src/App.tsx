import React from 'react';
import { CounterAdjustment } from './features/counter/components/CounterAdjustment';
import { CounterDisplay } from './features/counter/components/CounterDisplay';
import { InternationalisationSelection } from './features/internationalisation/components/InternationalisationSelection';
import { InternationalisationIndicator } from './features/internationalisation/components/InternationalisationIndicator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InternationalisationIndicator />
        <CounterDisplay />
        <CounterAdjustment />
        <InternationalisationSelection />
      </header>
    </div>
  );
}

export default App;
