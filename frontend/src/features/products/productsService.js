import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI + "/api/products";

// Add Product
const addProduct = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URI, data, config);

  return response.data;
};

// Get Products
const getProducts = async (query) => {
  const response = await axios.get(API_URI + query);

  return response.data;
};

const productsService = {
  addProduct,
  getProducts,
};

export default productsService;
