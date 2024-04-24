import Image from "next/image";
import "./blockchain-gaming.scss";

const BlockchainGaming = () => {
  return (
    <section className="blockchain-gaming-container relative flex column items-center justify-center">
      <div className="blockchain-gaming flex column items-center">
        <h2 className="blockchain-gaming-title text-display-2 text-center">
          Making blockchain gaming accessible to{" "}
          <span className="gradient-text gradient-secondary">everyone!</span>
        </h2>
        <div className="gaming-imgs-container flex items-center justify-center wrap">
          <Image
            src="/assets/zuraverse.png"
            alt="zuraverse"
            className="gaming-imgs"
            width={190}
            height={50}
          />
          <Image
            src="/assets/born-to-die.png"
            alt="born to die"
            className="gaming-imgs"
            width={190}
            height={50}
          />
          <Image
            src="/assets/souls-of-meta.png"
            alt="souls of meta"
            className="gaming-imgs"
            width={190}
            height={50}
          />
          <Image
            src="/assets/lumos.png"
            alt="lumos"
            className="gaming-imgs"
            width={190}
            height={50}
          />
          <Image
            src="/assets/cybersyndicate.png"
            alt="cyber syndicate"
            className="gaming-imgs"
            width={190}
            height={50}
          />
          <Image
            src="/assets/metaborn.svg"
            alt="meta born"
            className="gaming-imgs"
            width={190}
            height={50}
          />
        </div>
      </div>
    </section>
  );
};
export default BlockchainGaming;
