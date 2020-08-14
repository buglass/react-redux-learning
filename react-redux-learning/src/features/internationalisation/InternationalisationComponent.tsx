import React from 'react';
import { useDispatch } from 'react-redux';
import { setRegion } from '../internationalisation/internationalisationSlice';

export function InternationalisationComponent () {
  const dispatch = useDispatch();
  
  return (
    <div>
        <button onClick={() => dispatch(setRegion('English'))}>English</button>
        <button onClick={() => dispatch(setRegion('Cymraeg'))}>Cymraeg</button>
    </div>
  )
}