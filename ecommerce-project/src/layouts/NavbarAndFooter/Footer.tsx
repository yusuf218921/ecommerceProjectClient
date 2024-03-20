const Footer = () => {
  return (
    <>
      <div className="bg-light">
        <footer
          className="container d-flex flex-wrap 
              justify-content-between align-items-center py-5 main-color"
        >
          <p className="col-md-4 mb-0 text-dark fs-5">© Bigbox Inc.</p>
          <ul className="nav navbar-dark col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="/#home" className="nav-link px-2 text-dark">
                Ana Sayfa
              </a>
            </li>
            <li className="nav-item">
              <a href="/#star-product" className="nav-link px-2 text-dark">
                Yıldızlı Ürünler
              </a>
            </li>
            <li className="nav-item">
              <a href="/#popular-category" className="nav-link px-2 text-dark">
                Popüler Kategoriler
              </a>
            </li>
            <li className="nav-item">
              <a href="/products" className="nav-link px-2 text-dark">
                Arama
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
