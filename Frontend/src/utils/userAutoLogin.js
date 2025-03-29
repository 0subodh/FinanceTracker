import { getUserFromToken } from "../../helper/axiosHelper";

export async function userAutoLogin() {
  const token = localStorage.getItem("token");
  if (token) {
    // 1. call API to get user
    const { status, user } = await getUserFromToken();
    console.log(user);

    return status === "success" ? user : {};
    // 2. mount user in the state
  }
  return false;
}
