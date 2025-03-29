import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import Button from "react-bootstrap/Button";
import { useForm } from "../hooks/useForm";
import { postNewTransaction } from "../helper/axiosHelper";
import { toast } from "react-toastify";

const FORM_FIELDS = [
  {
    label: "Title",
    placeholder: "Salary",
    required: true,
    type: "text",
    name: "title",
  },
  {
    label: "Amount",
    placeholder: "44",
    required: true,
    type: "number",
    name: "amount",
  },
  {
    label: "Trassaction Date",
    required: true,
    type: "date",
    name: "date",
  },
];

const INITIAL_STATE = {
  type: "",
  title: "",
  amount: "",
  date: "",
};

function TransactionForm() {
  const { form, setForm, handleOnChange } = useForm(INITIAL_STATE);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    console.log(form);
    const pending = postNewTransaction(form);
    toast.promise(pending, { pending: "Please Wait..." });

    const { status, message } = await pending;
    toast[status](message);

    status === "success" && setForm(INITIAL_STATE);

    // TODO call the function to fetch all transactions
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="mb-4">Add New Transaction!</h2>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label> Transaction Type</Form.Label>
          <Form.Select name="type" onChange={handleOnChange} required>
            <option value="">Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Form.Select>
        </Form.Group>
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

export default TransactionForm;
