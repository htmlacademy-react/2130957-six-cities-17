import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers } from './action';
import { initialState } from './types';

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export default reducer;
