import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritePlaces from '../../components/place-card/favorite-card';
import { PLACES } from '../../const';
import { Helmet } from 'react-helmet-async';

export default function Favorites(): JSX.Element {
  const citiesWithFavorites = PLACES.filter((place) => place.isBookmarked).map((place) => place.city);
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
              {uniqueCitiesWithFavorites.map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <FavoritePlaces city={city} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
