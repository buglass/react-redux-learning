import React from 'react';
import { useSelector } from 'react-redux';
import { selectRegion } from '../internationalisationSlice';
import '../../../styles.css';

// Just a testbed for a visual check of the display coming through.
// Could have a pretty flag though.
export function InternationalisationIndicator () {
  return (
    <div id="internationalisationIndicatorDiv" className="englishStyle">
      <span>{useSelector(selectRegion)}</span>
    </div>
  )
}