import axios from "axios";

const CategoryService = {
  getAllCategories: async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/categories`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
};

export default CategoryService;
