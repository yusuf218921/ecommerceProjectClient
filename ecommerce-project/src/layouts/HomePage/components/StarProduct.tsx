import { useEffect, useState } from "react";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { StarProductCard } from "./StarProductCard";
import StarProductService from "../../../services/StarProductService";
import StarProductModel from "../../../models/StarProductModel";

const StarProduct = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [httpError, setHttpError] = useState(null);
  const [products, setProducts] = useState<StarProductModel[]>([]);

  useEffect(() => {
    const fetchStarProducts = async () => {
      const response = await StarProductService.getAllProducts(0, 100);

      const products: StarProductModel[] = [];

      for (const key in response.data.content) {
        products.push({
          starProductId: response.data.content[key].starProductId,
          productId: response.data.content[key].productId,
          productName: response.data.content[key].productName,
          productDescription: response.data.content[key].productDescription,
          productPrice: response.data.content[key].productPrice,
          productImgUrl: response.data.content[key].productImgUrl,
        });
        setProducts(products);
        setIsLoading(false);
      }
    };
    fetchStarProducts().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="container m-5">
        <SpinnerLoading />
      </div>
    );
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  return (
    <div id="star-product">
      <div className="fs-3 roboto-bold text-center mb-2 mb-lg-5">
        YILDIZLI ÜRÜNLER
      </div>
      <div className="row g-3 g-lg-5 mb-5">
        {products.map((products) => (
          <StarProductCard products={products} />
        ))}
      </div>
    </div>
  );
};

export default StarProduct;
