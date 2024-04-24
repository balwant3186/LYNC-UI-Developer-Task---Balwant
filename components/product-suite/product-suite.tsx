import Image from "next/image";

import "./product-suite.scss";
import ProductSuiteItem from "./product-suite-item";

const ProductSuite = () => {
  return (
    <section className="product-suit flex column items-center">
      <h2 className="title text-display-2">
        Product <span className="gradient-secondary">Suite</span>
      </h2>
      <div className="product-cards-container flex column">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductSuiteItem key={index} />
        ))}
      </div>
    </section>
  );
};
export default ProductSuite;
