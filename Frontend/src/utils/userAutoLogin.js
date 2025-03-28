import { getUserFromToken } from "../../helper/axiosHelper";

export async function userAutoLogin() {
  const token = localStorage.getItem("token");
  if (token) {
    // 1. call API to get user
    const response = await getUserFromToken();
    console.log(response);
    // 2. mount user in the state
  }
  return false;
}
