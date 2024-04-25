import Image from "next/image";

const BlogItem = () => {
  return (
    <div className="blog-card">
      <Image
        src="/assets/blog-card-img.png"
        alt="product"
        className="blog-card-img"
        width={300}
        height={240}
      />
      <div className="blog-card-footer-container">
        <p className="card-title text-heading-2">
          LYNC teamed up with Astar Network to effortlessly bring the next
          billion gamers into Web3 🎮
        </p>
        <p className="subtext text-body-2">
          LYNC joins forces with Astar Network to allow game developers and
          studios to launch games in just a few minutes using LYNC’s SDK and
          infrastructure.
        </p>
        <p className="subtext text-body-2">
          <a href="https://docs.lync.world/" className="cta-btn text-body-2">
            Read more
          </a>
        </p>
      </div>
    </div>
  );
};
export default BlogItem;
