import { StarProductCard } from "./StarProductCard";

const StarProduct = () => {
  return (
    <div>
      <div className="fs-3 roboto-bold text-center mb-2 mb-lg-5">
        YILDIZLI ÜRÜNLER
      </div>
      <div className="row g-3 g-lg-5 mb-5">
        <StarProductCard />
        <StarProductCard />
        <StarProductCard />
        <StarProductCard />
        <StarProductCard />
        <StarProductCard />
        <StarProductCard />
        <StarProductCard />
      </div>
    </div>
  );
};

export default StarProduct;
