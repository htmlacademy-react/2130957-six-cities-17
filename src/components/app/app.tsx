import {CardSettings} from '../../const.ts';
import MainPage from '../../pages/main/main.tsx';

export default function App(): JSX.Element {
  return (
    <MainPage placesCount={CardSettings.PlacesCount} allPlaces={CardSettings.AllPlaces}/>
  );
}
