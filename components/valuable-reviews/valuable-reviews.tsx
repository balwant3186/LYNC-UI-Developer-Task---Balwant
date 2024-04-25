import ValuableReviewsItem from "./valuable-reviews-item";
import "./valuable-reviews.scss";

const ValueableReviews = () => {
  return (
    <section className="valueable-reviews flex column items-center">
      <h2 className="title text-display-2">
        Valueable <span className="gradient-tertiary">Reviews</span>
      </h2>
      <div className="reviews-cards-container flex column">
        {Array.from({ length: 6 }).map((_, index) => (
          <ValuableReviewsItem key={index} />
        ))}
      </div>
    </section>
  );
};
export default ValueableReviews;
