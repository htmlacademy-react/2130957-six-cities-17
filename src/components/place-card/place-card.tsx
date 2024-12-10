import { Place } from '../../types.ts';
import { classMap } from '../../const.ts';

type PageType = 'favorites' | 'cities';

type PlaceCardProps = {
  place: Place;
  pageType: PageType;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export default function PlaceCard({ place, pageType,onMouseEnter, onMouseLeave }: PlaceCardProps): JSX.Element {
  const classes = classMap[pageType];

  return (
    <article onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${classes.card} place-card`}>
      {place.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${classes.imageWrapper} place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={place.previewImage}
            width={classes.imageWidth}
            height={classes.imageHeight}
            alt="Place image"
          />
        </a>
      </div>
      <div className={`${classes.info} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${place.isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{place.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(place.rating / 5) * 100}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{place.title}</a>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}
