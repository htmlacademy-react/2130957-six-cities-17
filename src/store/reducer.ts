import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityName, Place, SortOptionName } from '../types';
import { RootState } from './index';
import { sortOptionNames, DEFAULT_CITY, LOCATIONS } from '../const';
import { PLACES } from '../mocks/offers';

export interface State {
  city: CityName;
  offers: Place[];
  sortOption: SortOptionName;
}

const getInitialCity = (): CityName => {
  const params = new URLSearchParams(window.location.search);
  const cityFromURL = params.get('city') as CityName;

  if (cityFromURL && Object.values(LOCATIONS).includes(cityFromURL)) {
    return cityFromURL;
  }

  return DEFAULT_CITY;
};

export const initialState: State = {
  city: getInitialCity(),
  offers: PLACES,
  sortOption: sortOptionNames.Popular,
};


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
