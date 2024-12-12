import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LOCATIONS } from '../const.ts';

export function useActiveCity(): [LOCATIONS, (city: LOCATIONS) => void] {
  const [searchParams] = useSearchParams();
  const [activeCity, setActiveCity] = useState<LOCATIONS>(LOCATIONS.AMSTERDAM);

  useEffect(() => {
    const cityParam = searchParams.get('city') as LOCATIONS;
    if (cityParam && Object.values(LOCATIONS).includes(cityParam) && cityParam !== activeCity) {
      setActiveCity(cityParam);
    }
  }, [searchParams, activeCity]);

  return [activeCity, setActiveCity];
}
