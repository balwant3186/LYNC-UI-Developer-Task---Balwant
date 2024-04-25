import Image from "next/image";

const ValuableReviewsItem = () => {
  return (
    <div className="review-card">
      <p className="review-card-text">
        Absolutely blown away by the capabilities of this company{`'`}s Web3
        gaming SDK! Integrating it into my project was seamless, and the
        innovative tools provided took my game to the next level. The support
        team was incredibly responsive and helpful throughout the process.
        Highly recommended!
      </p>
      <div className="review-card-footer-container flex items-center justify-start">
        <Image
          src="/assets/ellipse.svg"
          alt="review"
          className="review-card-img"
          width={50}
          height={50}
        />
        <div>
          <p className="card-title">ALEX GEORGE</p>
          <p className="subtext">CEO. POLYGON</p>
        </div>
      </div>
    </div>
  );
};
export default ValuableReviewsItem;
