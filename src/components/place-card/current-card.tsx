import { LOCATIONS } from '../../const';
import PlaceCard from './place-card';
import { Place } from '../../types';
import { CardType } from '../../const.ts';

type CurrentPlacesProps = {
  city: LOCATIONS;
  places: Place[];
  onCardHover: (id: string | null) => void;
};

export default function CurrentPlaces({ city, places, onCardHover }: CurrentPlacesProps): JSX.Element {
  const currentPlaces = places.filter((place) => place.city.name.toLowerCase() === city.toLowerCase());

  return (
    <>
      {currentPlaces.map((place) => (
        <PlaceCard
          key={place.id}
          place={place}
          pageType={CardType.Cities}
          onMouseEnter={() => onCardHover(place.id)}
          onMouseLeave={() => onCardHover(null)}
        />
      ))}
    </>
  );
}
