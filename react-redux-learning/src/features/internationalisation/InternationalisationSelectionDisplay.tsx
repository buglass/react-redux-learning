import React from 'react';
import { useSelector } from 'react-redux';
import { selectRegion } from './internationalisationSlice';

// Just a testbed for a visual check of the display coming through.
// Could have a pretty flag though.
export function InternationalisationSelectionDisplay () {
  return (
    <div>
      <span>{useSelector(selectRegion)}</span>
    </div>
  )
}