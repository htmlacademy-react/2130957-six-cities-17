import { combineReducers } from '@reduxjs/toolkit';
import loadingSlice from './slices/loading';
import offersSlice from './slices/offers';
import sortSlice from './slices/sort';
import citySlice from './slices/city';

export const rootReducer = combineReducers({
  loading: loadingSlice,
  offers: offersSlice,
  sort: sortSlice,
  city: citySlice,
});

export type RootState = ReturnType<typeof rootReducer>;
