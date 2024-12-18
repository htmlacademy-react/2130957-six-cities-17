import { Place, CityName } from '../types';
import { PLACES } from '../mocks/offers';
import { LOCATIONS } from '../const';

export interface State {
  city: CityName;
  offers: Place[];
}

export const initialState: State = {
  city: LOCATIONS.PARIS,
  offers: PLACES,
};
