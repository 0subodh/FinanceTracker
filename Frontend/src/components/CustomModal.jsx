import Modal from "react-bootstrap/Modal";
import { useUser } from "../context/UserContext";

export function CustomModal({ children }) {
  const { show, toggleModal } = useUser();

  return (
    <>
      <Modal
        show={show}
        onHide={() => toggleModal(false)}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}
