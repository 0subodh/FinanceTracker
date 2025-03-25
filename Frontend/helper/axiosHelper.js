import axios from "axios";
const ROOTAPIENDPOINT = "http://localhost:8000/api/v1";

async function apiProcessor({ method, url, data }) {
  try {
    const response = await axios({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      return {
        status: "error",
        message: error.response.data.message,
      };
    } else {
      return {
        status: "error",
        message: error.message,
      };
    }
  }
}

// POST Create New User
export const postNewUser = (data) => {
  const obj = {
    method: "post",
    url: ROOTAPIENDPOINT + "/users",
    data,
  };
  return apiProcessor(obj);
};

// POST Login User
export const loginUser = (data) => {
  const obj = {
    method: "post",
    url: ROOTAPIENDPOINT + "/users/login",
    data,
  };
  return apiProcessor(obj);
};
