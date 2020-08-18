import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync
} from '../counterSlice';

export function CounterAdjustment() {
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div>
        <button id="incrementCounter" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button id="decrementCounter" onClick={() => dispatch(decrement())} >
          Decrement
        </button>
      </div>
      
      <div>
        <input
          id="incrementAmount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)} />
        <button id="incrementByAmount" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))} >
          Add Async
        </button>
      </div>
    </div>
  );
}
