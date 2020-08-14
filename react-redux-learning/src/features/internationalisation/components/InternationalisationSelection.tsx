import React from 'react';
import { useDispatch } from 'react-redux';
import { setRegion } from '../internationalisationSlice';

export function InternationalisationSelection () {
  const dispatch = useDispatch();
  
  return (
    <div>
        <button onClick={() => dispatch(setRegion('English'))}>English</button>
        <button onClick={() => dispatch(setRegion('Cymraeg'))}>Cymraeg</button>
    </div>
  )
}