import { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/header/header.tsx';
import LocationList from '../../components/location-list/location-list.tsx';
import CurrentPlaces from '../../components/place-card/current-card.tsx';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map.tsx';
import { Point } from '../../types.ts';
import { LocationType } from '../../types.ts';
import { CityLocation } from '../../const.ts';
import { MapClassName } from '../../const.ts';
import { RootState } from '../../store';


export default function MainPage(): JSX.Element {
  const activeCity = useSelector((state: RootState) => state.offers.city);
  const places = useSelector((state: RootState) => state.offers.offers);

  const [activePlaceId, setActivePlaceId] = useState<string | null>(null);

  const filteredPlaces = places.filter((place) => place.city.name === activeCity);

  const handleCardHover = (id: string | null) => {
    setActivePlaceId(id);
  };

  const points: Point[] = filteredPlaces.map((place) => ({
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
              <b className="places__found">{filteredPlaces.length} {filteredPlaces.length === 1 ? 'place' : 'places'} to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CurrentPlaces
                  places={filteredPlaces}
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
