import { PLACES } from '../../mocks/offers';
import PlaceCard from './place-card';
import { LOCATIONS } from '../../const';

export default function FavoritePlaces({ city }: { city: LOCATIONS }): JSX.Element {
  const favoritePlaces = PLACES.filter(
    (place) => place.isFavorite && place.city.name.toLowerCase() === city.toLowerCase()
  );

  return (
    <>
      {favoritePlaces.map((place) => (
        <PlaceCard key={place.id} place={place} pageType="favorites" />
      ))}
    </>
  );
}
