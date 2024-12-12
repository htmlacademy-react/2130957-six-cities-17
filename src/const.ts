import { ReviewFormType } from './types';

export const CardSettings = {
  AllPlaces: 312
} as const;

export const AuthStatus = {
  Auth : 'AUTH',
  NoAuth : 'NO_AUTH',
  Unknown  : 'UNKNOWN',
} as const;

export const AppRoutes = {
  Main : '/',
  Login : '/login',
  Favourites : '/favourites',
  Offer : '/offer/:id',
  Error : '*'
} as const;

export enum LOCATIONS {
  PARIS = 'Paris',
  COLOGNE = 'Cologne',
  BRUSSELS = 'Brussels',
  AMSTERDAM = 'Amsterdam',
  HAMBURG = 'Hamburg',
  DUSSELDORF = 'Dusseldorf',
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
};

export const DEFAULT_STATE: ReviewFormType = {
  rating: 0,
  review: '',
};
