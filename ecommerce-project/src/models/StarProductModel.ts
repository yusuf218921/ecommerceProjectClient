export default class StarProductModel {
  constructor(
    public starProductId: number,
    public productId: number,
    public productName: string,
    public productPrice: number,
    public productImgUrl: string,
    public productDescription: string
  ) {}
}
