import { PLACES } from '../../const';
import PlaceCard from './place-card';

export default function CurrentPlaces({ city }: { city: string }): JSX.Element {
  const currentPlaces = PLACES.filter((place) => place.city === city);

  return (
    <>
      {currentPlaces.map((place) => (
        <PlaceCard key={place.id} place={place} pageType="cities" />
      ))}
    </>
  );
}
