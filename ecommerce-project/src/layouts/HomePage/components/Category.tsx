const Category = () => {
  return (
    <div className="container border-top border-bottom">
      <div className="text-center my-2 my-lg-5 roboto-bold fs-3">
        Popüler Kategoriler
      </div>
      <div className="row mt-2 mt-lg-5 d-flex justify-content-evenly">
        <a
          href="#"
          className="col-4 rounded-circle text-center"
          style={{ width: 250, height: 250 }}
        >
          <img
            src="https://ideacdn.net/idea/jt/70/themes/selftpl_6384ca18a12d0/assets/uploads/theme_banner_image_11.png?revision=7.2.7.7-1-1708004364"
            alt=""
          />
          <div className="text-dark roboto-bold">PANTALON</div>
        </a>
        <a
          href="#"
          className="col-4 rounded-circle text-center"
          style={{ width: 250, height: 250 }}
        >
          <img
            src="https://ideacdn.net/idea/jt/70/themes/selftpl_6384ca18a12d0/assets/uploads/theme_banner_image_10.png?revision=7.2.7.7-1-1708004364"
            alt=""
          />
          <div className="text-dark roboto-bold">T-SHIRT</div>
        </a>
        <a
          href="#"
          className="col-4 rounded-circle text-center"
          style={{ width: 250, height: 250 }}
        >
          <img
            src="https://ideacdn.net/idea/jt/70/themes/selftpl_6384ca18a12d0/assets/uploads/theme_banner_image_6.png?revision=7.2.7.7-1-1708004364"
            alt=""
          />
          <div className="text-dark roboto-bold">ELBİSE</div>
        </a>
      </div>
    </div>
  );
};

export default Category;
