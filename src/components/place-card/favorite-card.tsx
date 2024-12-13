import PlaceCard from './place-card';
import { CityName } from '../../types';
import { Place } from '../../types';
import { CardType } from '../../const.ts';

type FavoritePlacesProps = {
  city: CityName;
  places: Place[];
}

export default function FavoritePlaces({ city, places }: FavoritePlacesProps): JSX.Element {
  const favoritePlaces = places.filter(
    (place) => place.isFavorite && place.city.name.toLowerCase() === city.toLowerCase()
  );

  return (
    <>
      {favoritePlaces.map((place) => (
        <PlaceCard key={place.id} place={place} pageType={CardType.Favorites} />
      ))}
    </>
  );
}
