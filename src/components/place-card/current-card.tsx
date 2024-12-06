import { PLACES } from '../../mocks/offers';
import PlaceCard from './place-card';
import { LOCATIONS } from '../../const';

export default function CurrentPlaces({ city }: { city: LOCATIONS }): JSX.Element {
  const currentPlaces = PLACES.filter((place) => place.city === city);

  return (
    <>
      {currentPlaces.map((place) => (
        <PlaceCard key={place.id} place={place} pageType="cities" />
      ))}
    </>
  );
}
