type Place = {
  id: string;
  isPremium?: boolean;
  image: string;
  price: number;
  isBookmarked?: boolean;
  rating: number;
  name: string;
  type: string;
  city: 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';
};

export type {Place};
