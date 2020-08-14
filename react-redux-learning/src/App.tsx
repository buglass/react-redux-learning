import React from 'react';
import { CounterAdjustment } from './features/counter/components/CounterAdjustment';
import { CounterDisplay } from './features/counter/components/CounterDisplay';
import { InternationalisationComponent } from './features/internationalisation/InternationalisationComponent';
import { InternationalisationSelectionDisplay } from './features/internationalisation/InternationalisationSelectionDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InternationalisationSelectionDisplay />
        <CounterDisplay />
        <CounterAdjustment />
        <InternationalisationComponent />
      </header>
    </div>
  );
}

export default App;
