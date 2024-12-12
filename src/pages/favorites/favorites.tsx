import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritePlaces from '../../components/place-card/favorite-card';
import { LOCATIONS } from '../../const';
import { Helmet } from 'react-helmet-async';
import { Place } from '../../types';

type FavoritesProps = {
  places: Place[];
};

export default function Favorites({ places }: FavoritesProps): JSX.Element {
  const citiesWithFavorites = places.filter((place) => place.isFavorite).map((place) => place.city.name);
  const uniqueCitiesWithFavorites = [...new Set(citiesWithFavorites)];

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {uniqueCitiesWithFavorites.map((city) => {
                const cityLocation = LOCATIONS[city.toUpperCase() as keyof typeof LOCATIONS];

                return (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <FavoritePlaces places={places} city={cityLocation} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
