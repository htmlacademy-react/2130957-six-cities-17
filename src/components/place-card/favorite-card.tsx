import { PLACES } from '../../const';
import PlaceCard from './place-card';

export default function FavoritePlaces({ city }: { city: string }): JSX.Element {
  const favoritePlaces = PLACES.filter((place) => place.isBookmarked && place.city === city);

  return (
    <>
      {favoritePlaces.map((place) => (
        <PlaceCard key={place.id} place={place} isFavoritePage />
      ))}
    </>
  );
}
