import axios from "axios";

const ProductService = {
  getAllProducts: async (
    orderBy: any,
    minPrice: any,
    maxPrice: any,
    gender: any,
    pageNo: number,
    pageSize: number
  ) => {
    let baseurl: string = `http://localhost:8080/api/products?`;
    if (orderBy) {
      baseurl = baseurl + `orderBy=${orderBy}&`;
    }
    if (minPrice) {
      baseurl = baseurl + `minPrice=${minPrice}&`;
    }
    if (maxPrice) {
      baseurl = baseurl + `maxPrice=${maxPrice}&`;
    }
    if (gender) {
      baseurl = baseurl + `gender=${gender}&`;
    }
    baseurl = baseurl + `pageNo=${pageNo}&pageSize=${pageSize}`;
    try {
      const response = await axios.get(baseurl);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
  getProductById: async (id: number) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/products/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
  getProductByName: async (
    orderBy: any,
    minPrice: any,
    maxPrice: any,
    gender: any,
    pageNo: any,
    pageSize: number,
    name: string = ""
  ) => {
    let baseurl: string = `http://localhost:8080/api/products/search/${name}?`;
    if (orderBy) {
      baseurl = baseurl + `orderBy=${orderBy}&`;
    }
    if (minPrice) {
      baseurl = baseurl + `minPrice=${minPrice}&`;
    }
    if (maxPrice) {
      baseurl = baseurl + `maxPrice=${maxPrice}&`;
    }
    if (gender) {
      baseurl = baseurl + `gender=${gender}&`;
    }
    baseurl = baseurl + `pageNo=${pageNo}&pageSize=${pageSize}`;
    try {
      const response = await axios.get(baseurl);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
  getAllProductsByCategoryId: async (
    id: any,
    orderBy: any,
    minPrice: any,
    maxPrice: any,
    gender: any,
    pageNo: number,
    pageSize: number
  ) => {
    let baseurl: string = `http://localhost:8080/api/products/category/${id}?`;
    if (orderBy) {
      baseurl = baseurl + `orderBy=${orderBy}&`;
    }
    if (minPrice) {
      baseurl = baseurl + `minPrice=${minPrice}&`;
    }
    if (maxPrice) {
      baseurl = baseurl + `maxPrice=${maxPrice}&`;
    }
    if (gender) {
      baseurl = baseurl + `gender=${gender}&`;
    }
    baseurl = baseurl + `pageNo=${pageNo}&pageSize=${pageSize}`;
    try {
      const response = await axios.get(baseurl);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
  getAllProductsBySubCategoryId: async (
    categoryId: any,
    subCategoryId: any,
    orderBy: any,
    minPrice: any,
    maxPrice: any,
    gender: any,
    pageNo: number,
    pageSize: number
  ) => {
    let baseurl: string = `http://localhost:8080/api/products/category/${categoryId}/subcategory/${subCategoryId}?`;
    if (orderBy) {
      baseurl = baseurl + `orderBy=${orderBy}&`;
    }
    if (minPrice) {
      baseurl = baseurl + `minPrice=${minPrice}&`;
    }
    if (maxPrice) {
      baseurl = baseurl + `maxPrice=${maxPrice}&`;
    }
    if (gender) {
      baseurl = baseurl + `gender=${gender}&`;
    }
    baseurl = baseurl + `pageNo=${pageNo}&pageSize=${pageSize}`;
    try {
      const response = await axios.get(baseurl);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
};

export default ProductService;
