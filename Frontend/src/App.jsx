import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import "./App.css";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
