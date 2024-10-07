import axios from "axios";

export default function apiProcessor() {
  try {
    console.log("hello");
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
}
