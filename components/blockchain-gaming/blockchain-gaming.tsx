import Image from "next/image";
import "./blockchain-gaming.scss";

const BlockchainGaming = () => {
  return (
    <section className="blockchain-gaming-section flex column items-center">
      <h3 className="blockchain-gaming-title text-display-2 text-center">
        Making blockchain gaming accessible to{" "}
        <span className="gradient-text gradient-secondary">everyone!</span>
      </h3>
      <div className="blockchain-gaming-img-container text-center">
        <Image
          src="/assets/zora-verse.png"
          alt="zora-verse"
          className="blockchain-gaming-img"
          width={200}
          height={150}
        />
        <Image
          src="/assets/born-to-die.png"
          alt="born-to-die"
          className="blockchain-gaming-img"
          width={200}
          height={150}
        />
        <Image
          src="/assets/souls-of-meta.png"
          alt="souls-of-meta"
          className="blockchain-gaming-img"
          width={200}
          height={150}
        />
        <Image
          src="/assets/lumos.png"
          alt="lumos"
          className="blockchain-gaming-img"
          width={200}
          height={150}
        />
        <Image
          src="/assets/vr.png"
          alt="vr"
          className="blockchain-gaming-img"
          width={200}
          height={150}
        />
      </div>
    </section>
  );
};
export default BlockchainGaming;
