import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import SubCategoryService from "../../services/SubCategoryService";
import CategoryModel from "../../models/CategoryModel";
import SubCategoryModel from "../../models/SubCategoryModel";
import Category from "./components/Category";

const SearchPage = () => {
  const params = useParams();
  const { keyword } = params;
  const { categoryName } = params;

  useEffect(() => {
    const currentUrl = window.location.href;
    if (currentUrl.includes("search")) {
    } else if (currentUrl.includes("category")) {
    } else {
    }
  }, []);

  return (
    <div>
      <Nav />
      <div className="container-fluid row mt-5 gx-5">
        <div className="col-2 border">
          <div className="container p-3 mt-5 border">
            <Category />
            <h4 className="my-2 text-center">Fiyat</h4>
            <ul className="category-list">
              <li className="border-bottom">
                <a href="#">Elektronik</a>
              </li>
              <li className="border-bottom">
                <a href="#">Giysi</a>
              </li>
              <li className="border-bottom">
                <a href="#">Kitaplar</a>
              </li>
              <li className="border-bottom">
                <a href="#">Ev &amp; Bahçe</a>
              </li>
              <li className="border-bottom">
                <a href="#">Spor</a>
              </li>
            </ul>
          </div>
        </div>
        <Main />
      </div>
    </div>
  );
};

export default SearchPage;
