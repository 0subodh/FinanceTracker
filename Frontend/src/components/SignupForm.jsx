import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SignupForm() {
  const [form, setForm] = useState({});

  const fields = [
    {
      label: "Name",
      placeholder: "John Rambo",
      required: true,
      type: "text",
      name: "name",
    },
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
    {
      label: "Confirm Password",
      placeholder: "******",
      required: true,
      type: "password",
      name: "confirmPassword",
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error("Passwords do not match!");
    }
    console.log(rest);
  };

  return (
    <div className="p-4 border rounded">
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
