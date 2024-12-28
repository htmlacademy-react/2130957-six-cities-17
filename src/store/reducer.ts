import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './get-initial-state';
import { CityName, Place } from '../types';
import { RootState } from './index';

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<CityName>) {
      state.city = action.payload;
    },
    setOffers(state, action: PayloadAction<Place[]>) {
      state.offers = action.payload;
    },
    changeSortOption(state, action: PayloadAction<string>) {
      state.sortOption = action.payload;
    },
  },
});

export const { changeCity, setOffers, changeSortOption } = offersSlice.actions;

export const selectActiveCity = (state: RootState): CityName => state.offers.city;
export const selectOffers = (state: RootState): Place[] => state.offers.offers;
export const selectSortOption = (state: RootState): string => state.offers.sortOption;

export default offersSlice.reducer;
