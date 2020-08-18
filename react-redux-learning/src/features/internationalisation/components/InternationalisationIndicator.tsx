import React from 'react';
import { useSelector } from 'react-redux';
import { selectRegion } from '../internationalisationSlice';
import '../../../styles.css';

// Just a testbed for a visual check of the display coming through.
// Could have a pretty flag though.
export function InternationalisationIndicator () {
  const region = useSelector(selectRegion);
  return (
    <div id="internationalisationIndicatorDiv" className={region.style}>
      <span>{region.name}</span>
    </div>
  )
}