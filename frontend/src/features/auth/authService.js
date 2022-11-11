import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI + "/api/users";

// LOGIN USER
const login = async (data) => {
  const response = await axios.post(API_URI + "/login", data);
  return response.data;
};

const authService = {
  login,
};

export default authService;
