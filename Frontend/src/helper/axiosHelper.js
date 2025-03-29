import axios from "axios";
const ROOTAPIENDPOINT = "http://localhost:8000/api/v1";

const getToken = () => {
  return localStorage.getItem("token");
};

async function apiProcessor({ method, url, data, headers }) {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
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

// GET User From Token when Application starts
export const getUserFromToken = () => {
  const obj = {
    method: "get",
    url: ROOTAPIENDPOINT + "/users",
    headers: {
      Authorization: getToken(),
    },
  };
  return apiProcessor(obj);
};

// POST Create New Transaction
export const postNewTransaction = (data) => {
  const obj = {
    method: "post",
    url: ROOTAPIENDPOINT + "/transactions",
    data,
    headers: {
      Authorization: getToken(),
    },
  };
  return apiProcessor(obj);
};
