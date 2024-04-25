import BlogItem from "./blog-item";
import "./blog.scss";

const Blog = () => {
  return (
    <section className="blog-section flex column items-center">
      <h2 className="title text-display-2">
        From our <span className="gradient-secondary">Blog</span>
      </h2>
      <p className="blog-subtext text-heading-2 text-center">
        Level Up Your Web3 Gaming Experience: Explore Our Blog for Insights,
        Tips, and Innovations in Gaming SDKs!
      </p>
      <div className="blog-container flex column">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogItem key={index} />
        ))}
      </div>
    </section>
  );
};
export default Blog;
