import SubCategoryModel from "./SubCategoryModel";

export default class CategoryModel {
  constructor(
    public categoryId: number,
    public categoryName: string,
    public subCategoryList: SubCategoryModel[]
  ) {}
}
