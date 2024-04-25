import Image from "next/image";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="app-footer relative flex column items-center">
      <Image
        src="/assets/lync-gradient.png"
        alt="lync"
        className="lync-gradient-img absolute"
        width={140}
        height={40}
      />
      <h2 className="footer-title-text text-display-2 text-center">
        Got a game idea? <br />
        Let{`'`}s make it big together!!!
      </h2>
      <a
        href="/form.html"
        className="footer-cta-btn flex justify-center items-center"
      >
        Get Started
      </a>
      <div className="footer-bg-content-container flex column items-center justify-center">
        <div className="footer-content-container flex items-start justify-center">
          <div className="footer-content-left flex column items-start">
            <Image
              src="/assets/lync-text-logo.png"
              alt="lync"
              className="lync-text-logo"
              width={140}
              height={40}
            />
            <span className="text-heading-3">A GameFi Infrastructure</span>
            <div className="footer-social-links flex items-center">
              <a
                href="https://www.linkedin.com/company/lync-world/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-links"
              >
                <Image
                  src="/assets/linkedin.png"
                  alt="linkedin"
                  width={50}
                  height={50}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/lync-world/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-links discord items-center flex justify-center"
              >
                <Image
                  src="/assets/discord.svg"
                  alt="discord"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://twitter.com/Lyncworld"
                target="_blank"
                rel="noopener noreferrer"
                className="social-links"
              >
                <Image
                  src="/assets/twitter.png"
                  alt="twitter"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </div>
          <div className="footer-content-middle flex items-start">
            <div className="middle-content-group flex column items-start">
              <p className="group-title text-heading-3">Product</p>
              <div className="group-content flex column items-start">
                <a
                  href="https://www.npmjs.com/package/@lyncworld/nft-marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-item text-body-2"
                >
                  SDK{`'`}s
                </a>
                <a
                  href="https://portal.lync.world/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-item text-body-2"
                >
                  Transfer API{`'`}s
                </a>
                <a
                  href="https://betanft.lync.world/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-item text-body-2"
                >
                  Token Api{`'`}s
                </a>
                <a
                  href="https://github.com/LYNC-WORLD/LYNC-Unity-AA/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-item text-body-2"
                >
                  NFT Api{`'`}s
                </a>
              </div>
            </div>
            <div className="middle-content-group flex column items-start">
              <p className="group-title text-heading-3">Company</p>
              <div className="group-content flex column items-start">
                <a
                  href="https://lyncworld.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-item text-body-2"
                >
                  About us
                </a>
                <a
                  href="https://docs.lync.world/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-item text-body-2"
                >
                  Press Kit
                </a>
                <a
                  href="http://request-demo.lync.world/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-item text-body-2"
                >
                  Security
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-item text-body-2"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="middle-content-group flex column items-start">
              <p className="group-title text-heading-3">Contact</p>
              <div className="group-content flex column items-start">
                <a
                  href="https://www.linkedin.com/company/lync-world/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-item text-body-2"
                >
                  Email
                </a>
                <a
                  href="https://twitter.com/Lyncworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-item text-body-2"
                >
                  Discord
                </a>
                <a
                  href="https://t.me/+T9Nb2o5lvK4zYzhl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-item text-body-2"
                >
                  Telegram
                </a>
                <a
                  href="https://t.me/+T9Nb2o5lvK4zYzhl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-item text-body-2"
                >
                  Press
                </a>
              </div>
            </div>
          </div>
          <div className="footer-content-right">
            <p className="content-right-title text-heading-2">
              Supercharge your inbox
            </p>
            <p className="content-right-subtext text-body-1">
              Sign up for our newsletter
            </p>

            <form className="email-form flex items-center justify-between">
              <input
                type="email"
                name="email"
                id="emai"
                className="email-form-input"
                placeholder="enter your email address"
              />
              <button type="submit" className="email-form-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
        <small className="copyright-text text-body-2">
          2024 LYNC World ·{" "}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Terms of service
          </a>
        </small>
      </div>
      <div className="footer-gradient-container absolute">
        <Image
          src="/assets/footer-gradient.png"
          alt="gradient"
          className="footer-gradient"
          width={1000}
          height={900}
        />
      </div>
    </footer>
  );
};
export default Footer;
