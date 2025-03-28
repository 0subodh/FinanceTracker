import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import "./App.css";
import SignUp from "./pages/SignUp";
import DefaultLayout from "./components/layout/DefaultLayout";
import Dashboard from "./pages/Dashboard";
import Auth from "./components/auth/Auth";
import Transaction from "./pages/Transaction";
import { userAutoLogin } from "./utils/userAutoLogin";
import { useUser } from "./context/UserContext";

function App() {
  const user = useUser();
  useEffect(() => {
    !user?._id && userAutoLogin();
  }, [user?._id]);

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="dashboard"
            element={
              <Auth>
                <Dashboard />
              </Auth>
            }
          />
          <Route
            path="transaction"
            element={
              <Auth>
                <Transaction />
              </Auth>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
