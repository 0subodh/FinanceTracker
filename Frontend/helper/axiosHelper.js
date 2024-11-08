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
    return {
      status: "error",
      message: error.message,
    };
  }
}

// POST New User
export const postNewUser = (data) => {
  const obj = {
    method: "post",
    url: ROOTAPIENDPOINT + "/users",
    data,
  };
  return apiProcessor(obj);
};
