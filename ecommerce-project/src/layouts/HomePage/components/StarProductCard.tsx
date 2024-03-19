import StarProductModel from "../../../models/StarProductModel";

export const StarProductCard: React.FC<{ products: StarProductModel }> = (
  props
) => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="card card-width">
        <a href={`/arama/${props.products.productId}`}>
          <img
            className="card-img-top"
            src={props.products.productImgUrl}
            alt="Card image cap"
          />
        </a>
        <div className="card-body">
          <p>{props.products.productName}</p>
          <p className="card-text text-muted">
            {props.products.productDescription}
          </p>
          <p className="card-text roboto-bold">
            {props.products.productPrice}TL
          </p>
        </div>
      </div>
    </div>
  );
};
