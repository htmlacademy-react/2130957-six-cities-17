import {ReviewItemType} from '../../types.ts';

type ReviewItemProps = {
  data: ReviewItemType;
}

export default function ReviewItem({ data }: ReviewItemProps): JSX.Element {
  const { date, review, rating, userName, userAvatarUrl} = data;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={userAvatarUrl} width={54} height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${(rating / 5) * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review}
        </p>
        <time className="reviews__time" dateTime={date.value}>{date.display}</time>
      </div>
    </li>
  );
}
