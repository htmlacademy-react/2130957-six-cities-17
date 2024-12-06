import { LOCATIONS } from './const';

type Place = {
  id: string;
  isPremium?: boolean;
  image: string;
  price: number;
  isBookmarked?: boolean;
  rating: number;
  name: string;
  type: string;
  city: LOCATIONS;
};

export type {Place};
