import Header from '../../components/header/header.tsx';
import Footer from '../../components/footer/footer.tsx';
import { Helmet } from 'react-helmet-async';

export default function FavoritiesEmpty (): JSX.Element {
  return (
    <div className="page page--favorites-empty">
      <Helmet>
        <title>6 cities: favorites empty</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>

  );
}
