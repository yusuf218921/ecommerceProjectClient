import Category from "./components/Category";
import Header from "./components/Header";

const HomePage = () => {
  return (
    <div className="container-fluid px-5 mt-3">
      <div className="row px-5 gy-5">
        <div className="col-12 px-3">
          <Header />
        </div>
        <div className="col-12">
          <Category />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
