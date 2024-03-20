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
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [gender, setGender] = useState<number>();
  const params = useParams();
  const { keyword } = params;
  const { categoryId } = params;
  const { subcategoryId } = params;
  useEffect(() => {
    fetchProduct();
  }, []);

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
            <Category />
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
