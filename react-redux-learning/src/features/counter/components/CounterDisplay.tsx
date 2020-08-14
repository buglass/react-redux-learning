import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../counterSlice';

export function CounterDisplay () {
  return (
    <div>
      <span>Current count: </span>
      <span>{useSelector(selectCount)}</span>
    </div>
  )
}