import LocationItem from './location-item.tsx';
import {LOCATIONS} from '../../const.ts';
import { CityName } from '../../types.ts';

type LocationListProps = {
  activeCity: CityName;
  setActiveCity: (city: CityName) => void;
};

export default function LocationList({ activeCity, setActiveCity }: LocationListProps): JSX.Element {
  const locations: CityName[] = Object.values(LOCATIONS) as CityName[];

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
