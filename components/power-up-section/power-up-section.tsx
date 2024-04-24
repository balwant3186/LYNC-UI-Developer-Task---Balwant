import Image from "next/image";

import "./power-up-section.scss";

const PowerUpSection = () => {
  return (
    <section className="power-up-section flex column items-center">
      <h3 className="power-up-title text-display-2 text-center">
        Power Up Your Web3 Game Development, With{" "}
        <span className="gradient-text gradient-primary">LYNC SDKs</span>
      </h3>
      <p className="power-up-subtext text-heading-2 text-center">
        LYNC SDKs can be easily integrated into game engines like Unity 3D and
        Unreal Engine in a few clicks.
      </p>
      <div className="power-up-card-container relative">
        <h4 className="power-up-card-title text-heading-2 text-heading-1">
          Don{`'`}t Worry about the{" "}
          <span className="gradient-text gradient-primary">Web3</span>{" "}
          Complexities
        </h4>
        <ul className="power-up-points-list">
          <li className="power-up-points-items text-heading-2 flex items-center">
            Save 9-12 months of development time
          </li>
          <li className="power-up-points-items text-heading-2 flex items-center">
            Focus completely on Game Dev and Mechanics
          </li>
          <li className="power-up-points-items text-heading-2 flex items-center">
            Save Up to $500K+ on Salaries &amp; Smart Contract Auditing
          </li>
          <li className="power-up-points-items text-heading-2 flex items-center">
            Go Cross-Chain in a few clicks
          </li>
        </ul>
        <Image
          src="/assets/eth-animation.png"
          alt="eth"
          className="eth-animation-img"
          width="300"
          height="200"
        />
      </div>
    </section>
  );
};
export default PowerUpSection;
