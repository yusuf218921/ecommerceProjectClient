import { useEffect, useState } from "react";
import PopularSubCategoryModel from "../../../models/PopularSubCategoryModel";
import SubCategoryService from "../../../services/SubCategoryService";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";

const Category = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [httpError, setHttpError] = useState(null);
  const [subCategories, setSubCategories] = useState<PopularSubCategoryModel[]>(
    []
  );

  useEffect(() => {
    const fetchPopularSubCategory = async () => {
      const response = await SubCategoryService.getAllPopularCategories();

      const categories: PopularSubCategoryModel[] = [];

      for (const key in response.data) {
        categories.push({
          subCategoryId: response.data[key].subCategoryId,
          subCategoryName: response.data[key].subCategoryName,
          subCategoryImgUrl: response.data[key].subCategoryImgUrl,
        });
        setSubCategories(categories);
        setIsLoading(false);
      }
    };
    fetchPopularSubCategory().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="container m-5">
        <SpinnerLoading />
      </div>
    );
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }
  return (
    <div id="popular-category" className="container border-top border-bottom">
      <div className="text-center my-2 my-lg-5 roboto-bold fs-3">
        Popüler Kategoriler
      </div>
      <div className="row mt-2 mt-lg-5 d-flex justify-content-evenly">
        {subCategories.map((categories) => (
          <a
            href={`/arama/kategori/${categories.subCategoryName.toLowerCase()}`}
            className="col-4 rounded-circle text-center theme-banner"
            style={{ width: 250, height: 250 }}
          >
            <img src={categories.subCategoryImgUrl} alt="" />
            <div className="text-dark roboto-bold">
              {categories.subCategoryName}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Category;
