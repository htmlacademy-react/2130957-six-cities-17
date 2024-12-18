import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Place, CityName } from '../types';
import { initialState } from './types';

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
  },
});

export const { changeCity, setOffers } = offersSlice.actions;
export default offersSlice.reducer;
