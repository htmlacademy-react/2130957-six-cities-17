import { Link } from 'react-router-dom';
import {AppRoutes} from '../../const.ts';

export default function Error(): JSX.Element {
  return (
    <div style={{ display: 'block', margin: 'auto', width: 'max-content', textAlign: 'center' }}>
      <h1>404</h1>
      <p>Page doesn&apos;t exist</p>
      <Link to={AppRoutes.Main}><u>Go back to Homepage</u></Link>
    </div>
  );
}
