import { ReviewFormType } from './types';
import { LocationType } from './types';
import { CityName } from './types';

export const CardSettings = {
  AllPlaces: 312
} as const;

export const AuthStatus = {
  Auth : 'AUTH',
  NoAuth : 'NO_AUTH',
  Unknown  : 'UNKNOWN',
} as const;

export const AppRoutes = {
  Main: '/',
  Login: '/login',
  Favourites: '/favourites',
  Offer: '/offer/:id',
  Error: '*'
} as const;

export const LOCATIONS = {
  PARIS: 'Paris',
  COLOGNE:'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
} as const;


export enum CardType {
  Favorites = 'favorites',
  Cities = 'cities',
  Neighbourhoods = 'near-places',
}

export const classMap = {
  favorites: {
    card: 'favorites__card',
    imageWrapper: 'favorites__image-wrapper',
    imageWidth: 150,
    imageHeight: 110,
    info: 'favorites__card-info',
  },
  cities: {
    card: 'cities__card',
    imageWrapper: 'cities__image-wrapper',
    imageWidth: 260,
    imageHeight: 200,
    info: '',
  },
  'near-places': {
    card: 'near-places',
    imageWrapper: 'near-places__image-wrapper',
    imageWidth: 260,
    imageHeight: 200,
    info: '',
  },
};

export const DEFAULT_STATE: ReviewFormType = {
  rating: 0,
  review: '',
};

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const DEFAULT_CITY: LocationType = {
  latitude: 52.37454,
  longitude: 4.897976,
  zoom: 13,
};

export const CityLocation: Record<CityName, LocationType> = {
  Paris: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 12,
  },
  Cologne: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 12,
  },
  Brussels: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 12,
  },
  Amsterdam: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 12,
  },
  Hamburg: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 12,
  },
  Dusseldorf: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 12,
  },
};

export enum MapClassName {
  CitiesMap = 'cities__map map',
  OfferMap = 'offer__map map',
}
