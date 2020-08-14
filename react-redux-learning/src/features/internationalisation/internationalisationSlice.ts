import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/rootReducer';
import { AppThunk } from '../../app/types';

export interface IState {
  region: string;
}

const initialState: IState = {
  region: "English"
}

export const internationalisationSlice = createSlice({
  name: 'internationalisation',
  initialState: initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<string>) => {
      state.region = action.payload;
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
