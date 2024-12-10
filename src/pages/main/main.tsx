import {useEffect, useState } from 'react';
import Header from '../../components/header/header.tsx';
import LocationList from '../../components/location-list/location-list.tsx';
import CurrentPlaces from '../../components/place-card/current-card.tsx';
import { Helmet } from 'react-helmet-async';
import { LOCATIONS } from '../../const.ts';
import { useLocation } from 'react-router-dom';
import { Place } from '../../types.ts';

type MainPageProps = {
  allPlaces: number;
  places: Place[];
};

export default function MainPage({ allPlaces, places }: MainPageProps): JSX.Element {
  const location = useLocation();
  const [activeCity, setActiveCity] = useState<LOCATIONS>(LOCATIONS.AMSTERDAM);
  const [, setActivePlaceId] = useState<string | null>(null);

  const handleCardHover = (id: string | null) => {
    setActivePlaceId(id);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cityParam = params.get('city') as LOCATIONS;
    if (cityParam && Object.values(LOCATIONS).includes(cityParam) && cityParam !== activeCity) {
      setActiveCity(cityParam);
    }
  }, [activeCity, location.search]);

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
            <LocationList activeCity={activeCity} setActiveCity={setActiveCity} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{allPlaces} places to stay in {activeCity}</b>
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
                  places={places}
                  city={activeCity}
                  onCardHover={handleCardHover}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
