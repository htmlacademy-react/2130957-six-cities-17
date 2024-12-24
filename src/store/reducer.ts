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
  },
});

// Экспортируем редьюсеры
export const { changeCity, setOffers } = offersSlice.actions;

// Добавляем селекторы
export const selectActiveCity = (state: RootState): CityName => state.offers.city;
export const selectOffers = (state: RootState): Place[] => state.offers.offers;

// Экспорт редьюсера
export default offersSlice.reducer;
