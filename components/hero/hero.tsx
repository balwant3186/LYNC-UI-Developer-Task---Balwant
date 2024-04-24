import Image from "next/image";

import "./hero.scss";

const Hero = () => {
  return (
    <section className="homepage-hero-section flex justify-center items-start">
      <div className="hero-content-container flex column justify-center items-center">
        <h1 className="hero-title text-display-2 text-center">
          Launch Your Game on{" "}
          <span className="gradient-text gradient-primary">Web 3.0</span> in
          Minutes
        </h1>

        <p className="hero-small-text">
          We help game developers to launch their game on Web 3.0, by keeping
          blockchain complexities aside with WebWorld SDKs!
        </p>
        <div className="hero-action-links-container flex justify-center">
          <a
            href="/form.html"
            className="hero-action-links gradient-secondary flex justify-center items-center text-body-2"
          >
            Get Started{" "}
            <Image
              src="/assets/right-arrow-white.svg"
              alt="right-arrow"
              width={16}
              height={16}
            />
          </a>
          <a
            href="https://docs.lync.world/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-action-links flex justify-center items-center text-body-2"
          >
            View Docs{" "}
            <Image
              src="/assets/right-arrow-white.svg"
              alt="right-arrow"
              width={16}
              height={16}
            />
          </a>
        </div>
        <div className="backed-content-container flex column justify-center items-center">
          <span className="backed-content-title text-heading-2">Backed by</span>
          <div className="backed-img-container relative flex items-center justify-center">
            <Image
              src="/assets/longhash.png"
              alt="longhash"
              className="backed-imgs"
              width={150}
              height={100}
            />
            <Image
              src="/assets/axelar.png"
              alt="axelar"
              className="backed-imgs"
              width={200}
              height={100}
            />
            <Image
              src="/assets/filecoin.png"
              alt="filecoin"
              className="backed-imgs"
              width={180}
              height={150}
            />
          </div>
        </div>
        <h3 className="about-content-container relative flex column items-center">
          <div className="gradient-bg"></div>
          <p className="content-text text-center text-heading-2">
            LYNC provides a scalable infrastructure for launching web3 games,
            without hampering the{" "}
            <span className="gradient-text gradient-secondary">
              gaming experience.
            </span>{" "}
            So that you can deliver the next big hit!
          </p>
          <div className="gradient-bg"></div>
        </h3>
      </div>
    </section>
  );
};
export default Hero;
