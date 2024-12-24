import { LOCATIONS, sortOptionNames} from './const';

export type CityName = (typeof LOCATIONS)[keyof typeof LOCATIONS];

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityType = {
  name: CityName;
  location: LocationType;
}

export type Place = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type ReviewFormType = {
  rating: number;
  review: string;
}

export type Point = Pick<Place, 'id' | 'location'>;

export type ReviewItemType = {
  id: string;
  rating: number;
  review: string;
  userName: string;
  userAvatarUrl: string;
  date: {
    value: string;
    display: string;
  };
}

export type sortOptionNamesType = {
  Popular: string;
  PriceLowHigh: string;
  PriceHighLow: string;
  TopRated: string;
  }

export type SortOptionKey = keyof typeof sortOptionNames;

export type SortOptionName = typeof sortOptionNames[SortOptionKey];
