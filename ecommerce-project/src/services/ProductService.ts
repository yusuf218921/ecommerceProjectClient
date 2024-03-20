import axios from "axios";

const ProductService = {
  getAllProducts: async (
    orderBy: string,
    minPrice: number,
    maxPrice: number,
    gender: number,
    pageNo: number,
    pageSize: number
  ) => {
    let baseUrl = "http://localhost:8080/api/products?";
    if (orderBy)
      try {
        const response = await axios.get(
          `http://localhost:8080/api/products?pageNo=${pageNo}&pageSize=${pageSize}`
        );
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
  getProductByName: async (name: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/products/search/${name}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
  getAllProductsByCategoryId: async (id: number) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/products/category/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
  getAllProductsBySubCategoryId: async (
    categoryId: number,
    subCategoryId: number
  ) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/products/category/${categoryId}/subcategory/${subCategoryId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
};

export default ProductService;
