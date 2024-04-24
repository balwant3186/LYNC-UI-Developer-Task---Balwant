import Image from "next/image";

import "./chains.scss";

const Chains = () => {
  return (
    <section className="homepage-chains-section flex column justify-center items-center">
      <h2 className="chains-section-title text-display-2 text-center">
        With LYNC, build on your{" "}
        <span className="gradient-secondary">favorite chain.</span>
      </h2>
      <div className="chains-img-container flex justify-center items-center wrap">
        <Image
          src="/assets/ethereum.png"
          alt="ethereum"
          className="chains-imgs"
          width={200}
          height={50}
        />
        <Image
          src="/assets/polygon.png"
          alt="polygon"
          className="chains-imgs"
          width={200}
          height={65}
        />
        <Image
          src="/assets/aptos.png"
          alt="aptos"
          className="chains-imgs"
          width={120}
          height={30}
        />
        <Image
          src="/assets/zksync.png"
          alt="zksync"
          className="chains-imgs"
          width={220}
          height={40}
        />
        <Image
          src="/assets/arbitrum.svg"
          alt="arbitrum"
          className="chains-imgs"
          width={200}
          height={55}
        />
        <Image
          src="/assets/astar.png"
          alt="astar"
          className="chains-imgs"
          width={190}
          height={60}
        />
        <Image
          src="/assets/saga.png"
          alt="saga"
          className="chains-imgs"
          width={170}
          height={40}
        />
        <Image
          src="/assets/avalanche.png"
          alt="avalanche"
          className="chains-imgs"
          width={220}
          height={45}
        />
      </div>
    </section>
  );
};
export default Chains;
