import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "./components/Nav";
import Category from "./components/Category";
import ProductModel from "../../models/ProductModel";
import ProductService from "../../services/ProductService";
import { ProductCard } from "./components/ProductCard";

const SearchPage = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const currentUrl = window.location.href;
  const [orderBy, setOrderBy] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000000);
  const [gender, setGender] = useState<number>();
  const params = useParams();
  const { keyword } = params;
  const { categoryId } = params;
  const { subcategoryId } = params;

  const handlePriceChange = (event: any) => {
    const selectedPriceRange = event.target.value.split("-");
    setMinPrice(parseInt(selectedPriceRange[0], 10));
    setMaxPrice(parseInt(selectedPriceRange[1], 10));
  };

  const handleGenderChange = (event: any) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
  };

  const handleOrderChange = (event: any) => {
    const selectedOrder = event.target.value;
    setOrderBy(selectedOrder);
  };

  useEffect(() => {
    fetchProduct();
    console.log(minPrice, maxPrice);
  }, [orderBy, minPrice, maxPrice, gender]);

  async function fetchProduct() {
    if (currentUrl.includes("search")) {
      const response = await ProductService.getProductByName(
        orderBy,
        minPrice,
        maxPrice,
        gender,
        0,
        20,
        keyword
      );

      const products: ProductModel[] = [];
      for (let key in response.data.content) {
        products.push({
          productId: response.data.content[key].productId,
          categoryName:
            response.data.content[key].subCategory.category.categoryName,
          subCategoryName:
            response.data.content[key].subCategory.subCategoryName,
          productName: response.data.content[key].productName,
          productPrice: response.data.content[key].productPrice,
          productDescription: response.data.content[key].productDescription,
          productImgUrl: response.data.content[key].productImgUrl,
        });
      }
      setProducts(products);
    } else if (currentUrl.includes("subcategory")) {
      const response = await ProductService.getAllProductsBySubCategoryId(
        categoryId,
        subcategoryId,
        orderBy,
        minPrice,
        maxPrice,
        gender,
        0,
        20
      );
      const products: ProductModel[] = [];
      for (let key in response.data.content) {
        products.push({
          productId: response.data.content[key].productId,
          categoryName:
            response.data.content[key].subCategory.category.categoryName,
          subCategoryName:
            response.data.content[key].subCategory.subCategoryName,
          productName: response.data.content[key].productName,
          productPrice: response.data.content[key].productPrice,
          productDescription: response.data.content[key].productDescription,
          productImgUrl: response.data.content[key].productImgUrl,
        });
      }
      setProducts(products);
    } else if (currentUrl.includes("category")) {
      const response = await ProductService.getAllProductsByCategoryId(
        categoryId,
        orderBy,
        minPrice,
        maxPrice,
        gender,
        0,
        20
      );
      const products: ProductModel[] = [];
      for (let key in response.data.content) {
        products.push({
          productId: response.data.content[key].productId,
          categoryName:
            response.data.content[key].subCategory.category.categoryName,
          subCategoryName:
            response.data.content[key].subCategory.subCategoryName,
          productName: response.data.content[key].productName,
          productPrice: response.data.content[key].productPrice,
          productDescription: response.data.content[key].productDescription,
          productImgUrl: response.data.content[key].productImgUrl,
        });
      }
      setProducts(products);
    } else {
      const response = await ProductService.getAllProducts(
        orderBy,
        minPrice,
        maxPrice,
        gender,
        0,
        20
      );
      const products: ProductModel[] = [];
      for (let key in response.data.content) {
        products.push({
          productId: response.data.content[key].productId,
          categoryName:
            response.data.content[key].subCategory.category.categoryName,
          subCategoryName:
            response.data.content[key].subCategory.subCategoryName,
          productName: response.data.content[key].productName,
          productPrice: response.data.content[key].productPrice,
          productDescription: response.data.content[key].productDescription,
          productImgUrl: response.data.content[key].productImgUrl,
        });
      }
      setProducts(products);
    }
  }

  return (
    <div>
      <Nav />
      <div className="container-fluid row mt-5 gx-5">
        <div className="col-2 border">
          <div className="container p-3 mt-5 border">
            <select onChange={handleOrderChange} id="sort" name="sort">
              <option value=""></option>
              <option value="asc">Artan Fiyat</option>
              <option value="desc">Azalan Fiyat</option>
            </select>
            <Category />
          </div>
          <div className="container p-3 mt-5 border">
            <h5 className="text-center">Fiyat</h5>
            <div>
              <input
                type="radio"
                id="range0-100000"
                name="price-range"
                value="0-100000"
                onChange={handlePriceChange}
              />
              <label htmlFor="range0-100000">&emsp; Yok</label>
              <br />
              <input
                type="radio"
                id="range0-150"
                name="price-range"
                value="0-150"
                onChange={handlePriceChange}
              />
              <label htmlFor="range0-150">&emsp; 0TL - 150TL</label>
              <br />

              <input
                type="radio"
                id="range150-250"
                name="price-range"
                value="150-250"
                onChange={handlePriceChange}
              />
              <label htmlFor="range150-250">&emsp; 150TL - 250TL</label>
              <br />

              <input
                type="radio"
                id="range250-500"
                name="price-range"
                value="250-500"
                onChange={handlePriceChange}
              />
              <label htmlFor="range250-500">&emsp; 250TL - 500TL</label>
              <br />

              <input
                type="radio"
                id="range500-1000"
                name="price-range"
                value="500-1000"
                onChange={handlePriceChange}
              />
              <label htmlFor="range500-1000">&emsp; 500TL - 1000TL</label>
              <br />

              <input
                type="radio"
                id="range1000-2500"
                name="price-range"
                value="1000-2500"
                onChange={handlePriceChange}
              />
              <label htmlFor="range1000-2500">&emsp; 1000TL - 2500TL</label>
              <br />

              <input
                type="radio"
                id="range2500-5000"
                name="price-range"
                value="2500-5000"
                onChange={handlePriceChange}
              />
              <label htmlFor="range2500-5000">&emsp; 2500TL - 5000TL</label>
              <br />
            </div>
          </div>
          <div className="container p-3 mt-5 border">
            <h5 className="text-center">Cinsiyet</h5>
            <div>
              <input
                type="radio"
                id="yok"
                name="gender"
                value=""
                onChange={handleGenderChange}
              />
              <label htmlFor="yok">&emsp; Yok</label>
              <br />

              <input
                type="radio"
                id="erkek"
                name="gender"
                value="-1"
                onChange={handleGenderChange}
              />
              <label htmlFor="erkek">&emsp; Erkek</label>
              <br />
              <input
                type="radio"
                id="kadın"
                name="gender"
                value="1"
                onChange={handleGenderChange}
              />
              <label htmlFor="kadın">&emsp; Kadın</label>
              <br />

              <input
                type="radio"
                id="unisex"
                name="gender"
                value="0"
                onChange={handleGenderChange}
              />
              <label htmlFor="unisex">&emsp; Unisex</label>
              <br />
            </div>
          </div>
        </div>
        <div className="col-10">
          <div className="container p-3">
            <div className="">
              <div className="row g-3 g-lg-5 mb-5">
                {products.map((product) => (
                  <ProductCard product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
