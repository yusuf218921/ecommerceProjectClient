import { useEffect, useState } from "react";
import CategoryModel from "../../../models/CategoryModel";
import SubCategoryModel from "../../../models/SubCategoryModel";
import SubCategoryService from "../../../services/SubCategoryService";
import CategoryService from "../../../services/CategoryService";

const Category = () => {
  const [category, setCategory] = useState<CategoryModel[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const responseCategory = await CategoryService.getAllCategories();
      const responseSubCategory = await SubCategoryService.getAllCategories();

      const categoryData = responseCategory.data;
      const subCategoryData = responseSubCategory.data;
      const categories: CategoryModel[] = [];
      const subCategories: SubCategoryModel[] = [];

      for (let key in subCategoryData) {
        subCategories.push({
          subCategoryId: subCategoryData[key].subCategoryId,
          categoryId: subCategoryData[key].category.categoryId,
          subCategoryName: subCategoryData[key].subCategoryName,
        });
      }
      for (let key in categoryData) {
        categories.push({
          categoryId: categoryData[key].categoryId,
          categoryName: categoryData[key].categoryName,
          subCategoryList: subCategories.filter(
            (sc) => sc.categoryId === categoryData[key].categoryId
          ),
        });
      }

      setCategory(categories);
    };
    fetchCategory();
  }, []);
  return (
    <div>
      <ul className="list-group list-group-flush border-bottom">
        {category.map((category) => (
          <li className="list-group-item">
            <a
              href={`/products/category/${category.categoryId}`}
              className="text-dark"
            >
              {category.categoryName}
            </a>
            <ul className="list-group list-group-flush">
              {category.subCategoryList.map((sc) => (
                <li className="list-group-item">
                  <a
                    href={`/products/category/${category.categoryId}/subcategory/${sc.subCategoryId}`}
                    className="text-dark"
                  >
                    {sc.subCategoryName}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
