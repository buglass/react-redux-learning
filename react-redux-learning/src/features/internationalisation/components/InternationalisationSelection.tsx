import React from 'react';
import { useDispatch } from 'react-redux';
import { setRegion } from '../internationalisationSlice';

export function InternationalisationSelection () {
  const dispatch = useDispatch();
  
  return (
    <div>
        <button id="selectEnglish" onClick={() => dispatch(setRegion('English'))}>English</button>
        <button id="selectCymraeg" onClick={() => dispatch(setRegion('Cymraeg'))}>Cymraeg</button>
    </div>
  )
}