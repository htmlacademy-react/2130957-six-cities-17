import {CardSettings, AppRoutes, AuthStatus} from '../../const.ts';
import MainPage from '../../pages/main/main.tsx';
import Error from '../../pages/error/error.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route.tsx';
import {HelmetProvider} from 'react-helmet-async';
import { Place } from '../../types.ts';
import { ReviewItemType } from '../../types.ts';

type AppProps = {
  places: Place[];
  reviews: ReviewItemType[];
}

export default function App({places, reviews}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<MainPage places={places} allPlaces={CardSettings.AllPlaces}/>}/>
          <Route path={AppRoutes.Login} element={<Login/>}/>
          <Route path={AppRoutes.Favourites} element={<PrivateRoute authStatus={AuthStatus.NoAuth}><Favorites places={places}/></PrivateRoute>}/>
          <Route path={AppRoutes.Offer} element={<Offer places={places} reviews={reviews}/>}/>
          <Route path={AppRoutes.Error} element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
