import { ThunkAction, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export type AppThunk<T> = ThunkAction<void, RootState, unknown, PayloadAction<T>>
