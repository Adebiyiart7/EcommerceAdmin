import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI + "/api/users";
console.log(API_URI);
// LOGIN USER
const login = async (data) => {
  const response = await axios.post(API_URI + "/login", data);
  if (response.data) {
    localStorage.setItem("user", response.data);
  }

  return response.data;
};

const authService = {
  login,
};

export default authService;
