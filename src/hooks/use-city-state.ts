import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LOCATIONS } from '../const.ts';
import { CityName } from '../types.ts';

export function useCityState(): [CityName, (newCity: CityName) => void] {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCity, setActiveCity] = useState<CityName>(LOCATIONS.AMSTERDAM);

  useEffect(() => {
    const cityParam = searchParams.get('city');
    if (
      cityParam &&
      (Object.values(LOCATIONS) as CityName[]).includes(cityParam as CityName) &&
      cityParam !== activeCity
    ) {
      setActiveCity(cityParam as CityName);
    }
  }, [searchParams, activeCity]);

  const changeCity = (newCity: CityName) => {
    if (newCity !== activeCity) {
      setActiveCity(newCity);
      setSearchParams({ city: newCity });
    }
  };

  return [activeCity, changeCity];
}
