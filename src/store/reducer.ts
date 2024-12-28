import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityName, Place, SortOptionName } from '../types';
import { RootState } from './index';
import { sortOptionNames, DEFAULT_CITY, LOCATIONS } from '../const';

export interface State {
  city: CityName;
  offers: Place[];
  sortOption: SortOptionName;
  loading: boolean;
  error: boolean;
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
  offers: [],
  sortOption: sortOptionNames.Popular,
  loading: true,
  error: false,
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
    getLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
    },
  },
});

export const { changeCity, setOffers, changeSortOption, getLoading, setError } = offersSlice.actions;

export const selectLoading = (state: RootState): boolean => state.offers.loading;
export const selectActiveCity = (state: RootState): CityName => state.offers.city;
export const selectOffers = (state: RootState): Place[] => state.offers.offers;
export const selectSortOption = (state: RootState): string => state.offers.sortOption;
export const selectError = (state: RootState): boolean => state.offers.error;

export default offersSlice.reducer;
