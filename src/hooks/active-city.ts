import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LOCATIONS } from '../const.ts';

type LOCATIONS = typeof LOCATIONS[keyof typeof LOCATIONS];

export function useActiveCity(): [LOCATIONS, (city: LOCATIONS) => void] {
  const [searchParams] = useSearchParams();
  const [activeCity, setActiveCity] = useState<LOCATIONS>(LOCATIONS.AMSTERDAM);

  useEffect(() => {
    const cityParam = searchParams.get('city');
    if (
      cityParam &&
      (Object.values(LOCATIONS) as LOCATIONS[]).includes(cityParam as LOCATIONS) &&
      cityParam !== activeCity
    ) {
      setActiveCity(cityParam as LOCATIONS);
    }
  }, [searchParams, activeCity]);

  return [activeCity, setActiveCity];
}
