import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI + "/api/orders";

const getOrders = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URI, config);

  return response.data;
};

const ordersService = {
  getOrders,
};

export default ordersService;
