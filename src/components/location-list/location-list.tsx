import LocationItem from './location-item.tsx';
import {LOCATIONS} from '../../const.ts';

type LocationListProps = {
  activeCity: LOCATIONS;
  setActiveCity: (city: LOCATIONS) => void;
};

export default function LocationList({ activeCity, setActiveCity }: LocationListProps): JSX.Element {
  const locations: LOCATIONS[] = Object.values(LOCATIONS);

  return (
    <ul className="locations__list tabs__list">
      {locations.map((city) => (
        <LocationItem
          key={city}
          city={city}
          isActive={city === activeCity}
          onClick={() => setActiveCity(city)}
        />
      ))}
    </ul>
  );
}
