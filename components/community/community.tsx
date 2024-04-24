import Image from "next/image";

import "./community.scss";

const Community = () => {
  return (
    <section className="community-section flex justify-center relative">
      <div className="community-content-container flex justify-center items-center">
        <Image
          src="/assets/community-pattern.png"
          alt="community-pattern"
          className="community-pattern-img"
          width={800}
          height={600}
        />
        <div className="content flex column items-center">
          <h2 className="content-title text-display-2 text-center">
            Strong Web3 <span className="gradient-secondary">Community</span>
          </h2>
          <a
            href="https://t.me/+T9Nb2o5lvK4zYzhl"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn flex items-center"
          >
            <Image
              src="/assets/telegram.png"
              alt="telegram"
              className="telegram-icon"
              width={24}
              height={24}
            />
            Join Telegram
          </a>
        </div>
      </div>
    </section>
  );
};
export default Community;
