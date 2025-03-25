import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";
import { loginUser } from "../../helper/axiosHelper";
import { useForm } from "../hooks/useForm";

const initialState = {
  name: "",
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
    console.log(form);
    const { status, message } = await loginUser(form);
    toast[status](message);
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
