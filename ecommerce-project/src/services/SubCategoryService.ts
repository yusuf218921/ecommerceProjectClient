import axios from "axios";

const SubCategoryService = {
  getAllCategories: async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/subcategories`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
  getAllPopularCategories: async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/subcategories/popular`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
};

export default SubCategoryService;
