
import RunReviewForm from '../review-form/review-form.tsx';
import {ReviewItemType} from '../../types.ts';
import ReviewItem from '../review-item/review-item.tsx';

type Props = {
  reviews: ReviewItemType[];
}

function ReviewsList({ reviews }: Props): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => <ReviewItem key={review.id} data={review}/>)
        }
      </ul>
      <RunReviewForm />
    </section>
  );
}

export default ReviewsList;
