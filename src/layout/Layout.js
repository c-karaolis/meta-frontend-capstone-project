import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "63vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
