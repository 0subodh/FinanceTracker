import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";
import { postNewUser } from "../../helper/axiosHelper";
import { useForm } from "../hooks/useForm";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignupForm() {
  const { form, setForm, handleOnChange } = useForm(initialState);

  const fields = [
    {
      label: "Name",
      placeholder: "John Rambo",
      required: true,
      type: "text",
      name: "name",
      value: form.name,
    },
    {
      label: "Email",
      placeholder: "john@gmail.com",
      required: true,
      type: "email",
      name: "email",
      value: form.email,
    },
    {
      label: "Password",
      placeholder: "******",
      required: true,
      type: "password",
      name: "password",
      value: form.password,
    },
    {
      label: "Confirm Password",
      placeholder: "******",
      required: true,
      type: "password",
      name: "confirmPassword",
      value: form.confirmPassword,
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error("Passwords do not match!");
    }

    const { status, message } = await postNewUser(rest);
    console.log(status, message);
    toast[status](message);

    status === "success" && setForm(initialState);
  };

  return (
    <div className="p-3 shadow-lg border rounded">
      <h2 className="mb-4">SignUp Now!</h2>
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
