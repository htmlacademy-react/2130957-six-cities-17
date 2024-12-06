import { LOCATIONS } from '../const';
import { Place } from '../types';

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
    city: LOCATIONS.AMSTERDAM,
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
    city: LOCATIONS.AMSTERDAM,
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
    city: LOCATIONS.AMSTERDAM,
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
    city: LOCATIONS.AMSTERDAM,
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
    city: LOCATIONS.AMSTERDAM,
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
    city: LOCATIONS.COLOGNE,
  },
  {
    id: '7',
    isPremium: false,
    image: 'img/room.jpg',
    price: 80,
    isBookmarked: true,
    name: 'Wood and stone place',
    type: 'Room',
    rating: 80,
    city: LOCATIONS.BRUSSELS,
  },
  {
    id: '8',
    isPremium: false,
    image: 'img/apartment-small-04.jpg',
    price: 180,
    isBookmarked: true,
    name: 'White Castle',
    type: 'Apartment',
    rating: 100,
    city: LOCATIONS.DUSSELDORF,
  },
  {
    id: '9',
    isPremium: true,
    image: 'img/apartment-03.jpg',
    price: 180,
    isBookmarked: false,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    rating: 100,
    city: LOCATIONS.HAMBURG,
  },
  {
    id: '10',
    isPremium: true,
    image: 'img/apartment-03.jpg',
    price: 180,
    isBookmarked: false,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    rating: 100,
    city: LOCATIONS.PARIS
  },
];