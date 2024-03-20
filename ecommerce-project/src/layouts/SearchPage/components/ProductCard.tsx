import ProductModel from "../../../models/ProductModel";

export const ProductCard: React.FC<{ product: ProductModel }> = (props) => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="card card-width">
        <a href={`/products/${props.product.productId}`}>
          <img
            className="card-img-top"
            src={props.product.productImgUrl}
            alt="Card image cap"
          />
        </a>
        <div className="card-body">
          <p>{props.product.productName}</p>
          <p className="card-text text-muted">
            {props.product.productDescription}
          </p>
          <p className="card-text roboto-bold">{props.product.productPrice}</p>
        </div>
      </div>
    </div>
  );
};
