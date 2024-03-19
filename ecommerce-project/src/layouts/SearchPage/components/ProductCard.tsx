export const ProductCard = () => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="card card-width">
        <a href={`/arama/deneme`}>
          <img
            className="card-img-top"
            src="https://ideacdn.net/idea/jt/70/myassets/products/329/kadin-bel-lastikli-bol-paca-pantolon-tas-15511_min.jpeg?revision=1709992374"
            alt="Card image cap"
          />
        </a>
        <div className="card-body">
          <p>deneme</p>
          <p className="card-text text-muted">deneme</p>
          <p className="card-text roboto-bold">50000TL</p>
        </div>
      </div>
    </div>
  );
};
