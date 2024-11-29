import LocationItem from './location-item.tsx';
import {LOCATIONS} from '../../const.ts';

export default function LocationList(): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {LOCATIONS.map((location) => (
        <LocationItem
          key={location.city}
          city={location.city}
          isActive={location.isActive}
        />
      ))}
    </ul>
  );
}
