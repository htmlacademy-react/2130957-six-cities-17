import { LOCATIONS } from '../../const';
import PlaceCard from './place-card';
import { Place } from '../../types';

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
          pageType="cities"
          onMouseEnter={() => onCardHover(place.id)} // Наведение на карточку
          onMouseLeave={() => onCardHover(null)} // Уход с карточки
        />
      ))}
    </>
  );
}
