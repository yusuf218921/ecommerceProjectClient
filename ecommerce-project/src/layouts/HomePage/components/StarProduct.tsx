import { StarProductCard } from "./StarProductCard";

const StarProduct = () => {
  return (
    <div>
      <div className="fs-3 roboto-bold text-center mb-5">YILDIZLI ÜRÜNLER</div>
      <div className="row gx-5 gy-5 mb-5">
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
