import { createAction } from '@reduxjs/toolkit';
import { CityName, Place } from '../types';

export const changeCity = createAction<CityName>('offers/changeCity');

export const setOffers = createAction<Place[]>('offers/setOffers');

export const changeSortOption = createAction<string>('offers/changeSortOption');
