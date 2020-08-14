import { createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/rootReducer';

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
  ThunkAction<void, ReturnType<typeof internationalisationSlice.reducer>, unknown, PayloadAction<string>> =>
  async dispatch =>
{
  dispatch(set(region));
};

export const selectRegion = (state: RootState) => state.internationalisationReducer.region;

export default internationalisationSlice.reducer;
