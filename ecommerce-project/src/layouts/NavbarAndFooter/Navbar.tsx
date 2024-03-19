export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light p-3">
      <div className="container-fluid">
        <a className="navbar-brand fs-lg-3" href="#">
          StyleSphere
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a
                className="nav-link active fs-lg-5"
                aria-current="page"
                href="#"
              >
                Anasayfa
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fs-lg-5" href="#">
                Yıldızlı Ürünler
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fs-lg-5" href="#">
                Hakkında
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fs-lg-5" href="#">
                İletişim
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 fs-lg-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success p-3 fs-lg-5"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
