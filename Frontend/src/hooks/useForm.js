import { useState } from "react";

const handleOnChange = (e, form, setForm) => {
  const { name, value } = e.target;
  setForm({
    ...form,
    [name]: value,
  });
};

export function useForm(initialState) {
  const [form, setForm] = useState(initialState);

  return {
    form,
    setForm,
    handleOnChange: (e) => handleOnChange(e, form, setForm),
  };
}
