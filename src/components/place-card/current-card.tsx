import { PLACES } from '../../mocks/offers';
import { LOCATIONS } from '../../const';
import PlaceCard from './place-card';

export default function CurrentPlaces({ city }: { city: LOCATIONS }): JSX.Element {

  const currentPlaces = PLACES.filter((place) => place.city.name.toLowerCase() === city.toLowerCase());

  return (
    <>
      {currentPlaces.map((place) => (
        <PlaceCard key={place.id} place={place} pageType="cities" />
      ))}
    </>
  );
}
