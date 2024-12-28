import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Place } from '../../types';
import { RootState } from '../index';
import { Slices } from '../../const';

export interface State {
  offers: Place[];
}

export const initialState: State = {
  offers: [],
};

const offersSlice = createSlice({
  name: Slices.Offers,
  initialState,
  reducers: {
    setOffers(state, action: PayloadAction<Place[]>) {
      state.offers = action.payload;
    },
  },
});

export const { setOffers } = offersSlice.actions;

export const selectOffers = (state: RootState): Place[] => state.offers.offers;

export default offersSlice.reducer;
