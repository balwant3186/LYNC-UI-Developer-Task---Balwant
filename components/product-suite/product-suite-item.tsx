import Image from "next/image";

const ProductSuiteItem = () => {
  return (
    <div className="product-card">
      <Image
        src="/assets/product-card-img.png"
        alt="product"
        className="product-card-img"
        width={300}
        height={200}
      />
      <p className="card-title text-heading-2">LYNC Wallet SDK</p>
      <p className="subtext text-body-2">
        Empowering developers to integrate account abstraction in their game,
        dapp, metaverse and more in minutes.
      </p>
    </div>
  );
};
export default ProductSuiteItem;
