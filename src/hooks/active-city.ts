import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LOCATIONS } from '../const.ts';
import { CityName } from '../types.ts';

export function useActiveCity(): [CityName, (city: CityName) => void] {
  const [searchParams] = useSearchParams();
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

  return [activeCity, setActiveCity];
}
