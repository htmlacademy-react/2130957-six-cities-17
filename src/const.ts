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

export const LOCATIONS = [
  { city: 'Paris', isActive: false },
  { city: 'Cologne', isActive: false },
  { city: 'Brussels', isActive: false },
  { city: 'Amsterdam', isActive: true },
  { city: 'Hamburg', isActive: false },
  { city: 'Dusseldorf', isActive: false },
];

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

