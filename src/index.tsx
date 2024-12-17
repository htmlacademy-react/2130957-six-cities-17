import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { PLACES } from './mocks/offers.ts';
import { REVIEWS } from './mocks/reviews.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App reviews={REVIEWS} places={PLACES}/>
  </React.StrictMode>
);
