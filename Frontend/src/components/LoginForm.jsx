import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { loginUser } from "../helper/axiosHelper";
import { useForm } from "../hooks/useForm";
import { useUser } from "../context/UserContext";

// Constants
const FORM_FIELDS = [
  {
    label: "Email",
    placeholder: "john@gmail.com",
    required: true,
    type: "email",
    name: "email",
  },
  {
    label: "Password",
    placeholder: "******",
    required: true,
    type: "password",
    name: "password",
  },
];

const INITIAL_STATE = {
  email: "",
  password: "",
};

export default function Login() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const { form, handleOnChange, resetForm } = useForm(INITIAL_STATE);

  const goTo = location?.state?.from?.pathname || "/";

  // Redirect if already logged in
  useEffect(() => {
    if (user?._id) {
      navigate(goTo);
    }
  }, [user?._id, navigate, goTo]);

  const handleLoginSuccess = (loggedInUser, accessToken, message) => {
    toast.success(message || "Login successful!");
    setUser(loggedInUser);
    localStorage.setItem("token", accessToken);
    resetForm();
    navigate("/dashboard");
  };

  const handleLoginError = (error) => {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "An unexpected error occurred";
    toast.error(errorMessage);
    console.error("Login error:", error);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        status,
        message,
        user: loggedInUser,
        accessToken,
      } = await loginUser(form);

      if (status !== "success") {
        throw new Error(message || "Login failed");
      }

      handleLoginSuccess(loggedInUser, accessToken, message);
    } catch (error) {
      handleLoginError(error);
    }
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="mb-4">Login Now!</h2>
      <Form onSubmit={handleOnSubmit}>
        {FORM_FIELDS.map((field) => (
          <CustomInput
            key={field.name}
            {...field}
            value={form[field.name]}
            onChange={handleOnChange}
          />
        ))}
        <div className="d-grid mt-3">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
