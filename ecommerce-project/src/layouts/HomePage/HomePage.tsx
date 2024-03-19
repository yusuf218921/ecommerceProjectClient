import Category from "./components/Category";
import Header from "./components/Header";
import StarProduct from "./components/StarProduct";

const HomePage = () => {
  return (
    <div
      id="home"
      className="container-fluid px-1 px-md-4 px-lg-5 mt-2 mt-lg-5"
    >
      <div className="row px-1 px-lg-5 gy-3 gy-lg-5">
        <div className="col-12 px-1 px-lg-3">
          <Header />
        </div>
        <div className="col-12">
          <Category />
        </div>
        <div className="col-12">
          <StarProduct />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
