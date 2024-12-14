import { useSearchParams } from 'react-router-dom';
import { CityName } from '../types.ts';


export function useCityChange(
  activeCity: CityName,
  setActiveCity: (city: CityName) => void
): (newCity: CityName) => void {
  const [, setSearchParams] = useSearchParams();

  return (newCity: CityName) => {
    if (newCity !== activeCity) {
      setActiveCity(newCity);
      setSearchParams({ city: newCity });
    }
  };
}
