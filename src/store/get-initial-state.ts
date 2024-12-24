import { Place, CityName, SortOptionName } from '../types';
import { PLACES } from '../mocks/offers';
import { LOCATIONS } from '../const';
import { DEFAULT_CITY } from '../const';
import { sortOptionNames } from '../const';

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
