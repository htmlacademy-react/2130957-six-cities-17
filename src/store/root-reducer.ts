import { combineReducers } from '@reduxjs/toolkit';
import loadingSlice from './slices/loading';
import offersSlice from './slices/offers';

export const rootReducer = combineReducers({
  loading: loadingSlice,
  offers: offersSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
