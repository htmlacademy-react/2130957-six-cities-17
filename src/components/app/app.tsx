import {CardSettings, AppRoutes, AuthStatus} from '../../const.ts';
import MainPage from '../../pages/main/main.tsx';
import Error from '../../pages/error/error.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route.tsx';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<MainPage allPlaces={CardSettings.AllPlaces}/>}/>
        <Route path={AppRoutes.Login} element={<Login/>}/>
        <Route path={AppRoutes.Favourites} element={<PrivateRoute authStatus={AuthStatus.NoAuth}><Favorites/></PrivateRoute>}/>
        <Route path={AppRoutes.Offer} element={<Offer/>}/>
        <Route path={AppRoutes.Error} element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}
