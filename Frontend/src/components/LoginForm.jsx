import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";
import { loginUser } from "../../helper/axiosHelper";
import { useForm } from "../hooks/useForm";

const initialState = {
  password: "",
  email: "",
};

export default function Login() {
  const { form, handleOnChange } = useForm(initialState);

  const fields = [
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

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form submitted:", form);

    try {
      const { status, message, user, accessToken } = await loginUser(form);

      if (status !== "success") {
        throw new Error(message || "Login failed");
      }

      // Handle successful login
      toast.success(message || "Login successful!");
      console.log("Login success:", { user, accessToken });

      // Store token and redirect
      localStorage.setItem("authToken", accessToken);
      window.location.href = "/dashboard";
    } catch (error) {
      handleLoginError(error);
    }
  };

  // Separate error handler for better readability and reusability
  const handleLoginError = (error) => {
    let errorMessage = "An unexpected error occurred";

    if (error.response?.data?.message) {
      errorMessage = error.response.data.message;
    } else if (error.message) {
      errorMessage = error.message;
    }

    toast.error(errorMessage);
    console.error("Login error:", error);
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="mb-4">Login Now!</h2>
      <Form onSubmit={handleOnSubmit}>
        {fields.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
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
