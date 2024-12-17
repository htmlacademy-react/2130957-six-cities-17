import {Place} from '../../types.ts';
import PlaceCard from '../place-card/place-card.tsx';
import { CardType } from '../../const.ts';

type NearPlacesListProps = {
  places: Place[];
  onCardHover: (id: string | null) => void;
}

export default function NearPlacesList({ places, onCardHover }: NearPlacesListProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          places.map((place) =>(
            <PlaceCard
              key={place.id}
              place={place}
              pageType={CardType.Neighbourhoods}
              onMouseEnter={() => onCardHover(place.id)}
              onMouseLeave={() => onCardHover(null)}
            />))
        }
      </div>
    </section>
  );
}

