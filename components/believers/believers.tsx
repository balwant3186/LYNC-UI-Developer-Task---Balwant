import Image from "next/image";

import "./believers.scss";

const Believers = () => {
  return (
    <section className="believers-section flex column items-center">
      <h2 className="believers-title text-display-2 text-center">
        Our <span className="gradient-secondary">Believers and Partners</span>
      </h2>
      <div className="believers-grid flex wrap justify-center">
        <span className="believers-grid-items flex items-center justify-center">
          <Image
            src="/assets/filecoin.png"
            alt="filecoin"
            className="believers-img"
            width={160}
            height={80}
          />
        </span>
        <span className="believers-grid-items flex items-center justify-center">
          <Image
            src="/assets/chainlink.png"
            alt="chainlink"
            className="believers-img"
            width={160}
            height={80}
          />
        </span>
        <span className="believers-grid-items flex items-center justify-center">
          <Image
            src="/assets/spheron.png"
            alt="spheron"
            className="believers-img"
            width={160}
            height={80}
          />
        </span>
        <span className="believers-grid-items flex items-center justify-center">
          <Image
            src="/assets/longhash.png"
            alt="longhash"
            className="believers-img"
            width={160}
            height={80}
          />
        </span>
        <span className="believers-grid-items flex items-center justify-center">
          <Image
            src="/assets/axelar.png"
            alt="axelar"
            className="believers-img"
            width={160}
            height={80}
          />
        </span>
        <span className="believers-grid-items flex items-center justify-center">
          <Image
            src="/assets/biconomy.png"
            alt="biconomy"
            className="believers-img"
            width={160}
            height={80}
          />
        </span>
        <span className="believers-grid-items flex items-center justify-center">
          <Image
            src="/assets/squid.png"
            alt="squid"
            className="believers-img"
            width={160}
            height={80}
          />
        </span>
      </div>
    </section>
  );
};
export default Believers;
