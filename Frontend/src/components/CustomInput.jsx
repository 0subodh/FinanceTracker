import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

export default function CustomInput({ label, ...rest }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
    </Form.Group>
  );
}

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
};
