import { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import Header from '../../components/header/header.tsx';
import LocationList from '../../components/location-list/location-list.tsx';
import CurrentPlaces from '../../components/place-card/current-card.tsx';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map.tsx';
import { Point } from '../../types.ts';
import { LocationType } from '../../types.ts';
import { CityLocation } from '../../const.ts';
import { MapClassName } from '../../const.ts';
import PlacesSorting from '../../components/places-sorting/places-sorting.tsx';
import sortPlaces from '../../hooks/sort-places.ts';
import { selectSortOption, selectActiveCity, selectOffers } from '../../store/slices/offers.ts';

export default function MainPage(): JSX.Element {
  const activeCity = useAppSelector(selectActiveCity);
  const places = useAppSelector(selectOffers);
  const sortOption = useAppSelector(selectSortOption);

  const [activePlaceId, setActivePlaceId] = useState<string | null>(null);

  const filteredPlaces = places.filter((place) => place.city.name === activeCity);

  const sortedPlaces = sortPlaces({ filteredPlaces, sortOption });

  const handleCardHover = (id: string | null) => {
    setActivePlaceId(id);
  };

  const points: Point[] = sortedPlaces.map((place) => ({
    id: place.id,
    location: place.location,
  }));

  const city: LocationType = CityLocation[activeCity];

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {sortedPlaces.length} {sortedPlaces.length === 1 ? 'place' : 'places'} to stay in {activeCity}
              </b>
              <PlacesSorting />
              <div className="cities__places-list places__list tabs__content">
                <CurrentPlaces
                  places={sortedPlaces}
                  city={activeCity}
                  onCardHover={handleCardHover}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                className={MapClassName.CitiesMap}
                activePlaceId={activePlaceId}
                points={points}
                city={city}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
