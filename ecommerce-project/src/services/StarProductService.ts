import axios from "axios";

const StarProductService = {
  getAllProducts: async (pageNo: number, pageSize: number) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/starproduct?pageNo=${pageNo}&pageSize=${pageSize}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
};

export default StarProductService;
