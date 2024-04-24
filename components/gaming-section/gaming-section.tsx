import Image from "next/image";
import "./gaming-section.scss";

const GamingSection = () => {
  return (
    <section className="gaming-grid-section flex justify-center">
      <div className="grid-section-wrapper">
        <div className="grid-large-item">
          <p className="title text-heading-2">
            Elevate Your Gameplay with Essential Insights!
          </p>
          <span className="subtext text-body-1">
            Unleash Your Potential - Explore the Knowledge Hub Today!
          </span>
          <a
            href="https://docs.lync.world/"
            className="cta-btn text-body-2 flex justify-center items-center"
          >
            View Docs
          </a>
          <Image
            src="/assets/game-animation.gif"
            alt="animation"
            className="game-animatiom"
            width={500}
            height={200}
          />
        </div>
        <div className="grid-items-container">
          <div className="grid-items-inner-container">
            <div className="grid-small-items">
              <span className="number-text gradient-secondary">250+</span>
              <p className="subtext text-body-1">
                Projects have downloaded &amp; integrated LYNC SDKs
              </p>
            </div>
            <div className="grid-small-items">
              <span className="number-text gradient-primary">8000+</span>
              <p className="subtext text-body-1">
                Contracts have been deployed via LYNC
              </p>
            </div>
          </div>
          <div className="grid-medium-items">
            <span className="number-text gradient-secondary">50000+</span>
            <p className="subtext text-body-1">User ops created in 10 hours</p>
            <Image
              src="/assets/medium-animation.gif"
              alt="animation"
              className="medium-animation"
              width={500}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default GamingSection;
