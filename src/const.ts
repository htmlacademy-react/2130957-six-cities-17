import {Place} from './types.ts';

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

export const PLACES: Place[] = [
  {
    id: '1',
    isPremium: true,
    image: 'img/apartment-01.jpg',
    price: 120,
    isBookmarked: false,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    rating: 80,
    city: 'Amsterdam',
  },
  {
    id: '2',
    isPremium: false,
    image: 'img/room.jpg',
    price: 80,
    isBookmarked: true,
    name: 'Wood and stone place',
    type: 'Room',
    rating: 80,
    city: 'Amsterdam',
  },
  {
    id: '3',
    isPremium: false,
    image: 'img/apartment-02.jpg',
    price: 132,
    isBookmarked: false,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    rating: 80,
    city: 'Amsterdam',
  },
  {
    id: '4',
    isPremium: true,
    image: 'img/apartment-03.jpg',
    price: 180,
    isBookmarked: false,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    rating: 100,
    city: 'Amsterdam',
  },
  {
    id: '5',
    isPremium: false,
    image: 'img/room.jpg',
    price: 80,
    isBookmarked: true,
    name: 'Wood and stone place',
    type: 'Room',
    rating: 80,
    city: 'Amsterdam',
  },
  {
    id: '6',
    isPremium: false,
    image: 'img/apartment-small-04.jpg',
    price: 180,
    isBookmarked: true,
    name: 'White Castle',
    type: 'Apartment',
    rating: 100,
    city: 'Cologne',
  }
];

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
