import { PLACES } from '../../mocks/offers';
import PlaceCard from './place-card';
import { LOCATIONS } from '../../const';

export default function FavoritePlaces({ city }: { city: LOCATIONS }): JSX.Element {
  const favoritePlaces = PLACES.filter((place) => place.isBookmarked && place.city === city);

  return (
    <>
      {favoritePlaces.map((place) => (
        <PlaceCard key={place.id} place={place} pageType="favorites" />
      ))}
    </>
  );
}
