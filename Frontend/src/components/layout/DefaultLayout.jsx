import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <div>
      <Header />
      {/* actual content */}
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default DefaultLayout;
