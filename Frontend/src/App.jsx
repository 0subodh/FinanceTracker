import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import "./App.css";
import SignUp from "./pages/SignUp";
import DefaultLayout from "./components/layout/DefaultLayout";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
