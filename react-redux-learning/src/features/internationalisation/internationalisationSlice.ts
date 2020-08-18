import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/rootReducer';
import { AppThunk } from '../../app/types';

export interface IRegion {
  name: string;
  style: string;
}

export interface IState {
  region: IRegion;
}

const initialState: IState = {
  region: {
    name: "English",
    style: "englishStyle"
  }
}

export const internationalisationSlice = createSlice({
  name: 'internationalisation',
  initialState: initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<string>) => {

      // This allows the reducer action to set the component style.
      // This allows the component to be completely dumb.
      // This logic could be delegated elsewhere though.
      // At the moment we can't test it because we haven't figured out how to test Thunks.
      // We could leave it here and have a fat reducer.
      // We could move it to an action and have a fat action.
      // We could have an intelligent component which does this and passes the result to the dumb component.
      // The third option is (I think) essentially what's been done in the meds UI with ViewModels.
      const regionName = action.payload;
      var regionStyle = "";
      if (regionName === "English") regionStyle = "englishStyle"
      else if (regionName === "Cymraeg") regionStyle = "cymraegStyle"
      
      state.region = {
        name: regionName,
        style: regionStyle
      };
    }
  }
});

const { set } = internationalisationSlice.actions;

export const setRegion = (region: string):
  AppThunk<string> =>
  async dispatch =>
{
  dispatch(set(region));
};

export const selectRegion = (state: RootState) => state.internationalisationReducer.region;

export default internationalisationSlice.reducer;
