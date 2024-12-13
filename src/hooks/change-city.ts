import { useSearchParams } from 'react-router-dom';
import { LOCATIONS } from '../const.ts';

type LOCATIONS = typeof LOCATIONS[keyof typeof LOCATIONS];
export function useCityChange(
  activeCity: LOCATIONS,
  setActiveCity: (city: LOCATIONS) => void
): (newCity: LOCATIONS) => void {
  const [, setSearchParams] = useSearchParams();

  return (newCity: LOCATIONS) => {
    if (newCity !== activeCity) {
      setActiveCity(newCity);
      setSearchParams({ city: newCity });
    }
  };
}
