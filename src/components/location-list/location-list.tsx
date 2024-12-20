import LocationItem from './location-item.tsx';
import { useSelector, useDispatch } from 'react-redux';
import { LOCATIONS } from '../../const.ts';
import { CityName } from '../../types.ts';
import { changeCity } from '../../store/action';
import { RootState } from '../../store';

export default function LocationList(): JSX.Element {
  const dispatch = useDispatch();
  const activeCity = useSelector((state: RootState) => state.offers.city);

  const locations: CityName[] = Object.values(LOCATIONS) as CityName[];

  const handleCityChange = (city: CityName) => {
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {locations.map((city) => (
        <LocationItem
          key={city}
          city={city}
          isActive={city === activeCity}
          onClick={() => handleCityChange(city)}
        />
      ))}
    </ul>
  );
}
