export default class ProductModel {
  constructor(
    public productId: number,
    public productName: string,
    public categoryName: string,
    public subCategoryName: string,
    public productPrice: number,
    public productDescription: string,
    public productImgUrl: string
  ) {}
}
