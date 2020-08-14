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
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} >
          Decrement
        </button>
      </div>
      
      <div>
        <input
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))} >
          Add Async
        </button>
      </div>
    </div>
  );
}
