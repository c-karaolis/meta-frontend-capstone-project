import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <body style={{ minHeight: "63vh" }}>
        <Outlet />
      </body>
      <Footer />
    </>
  );
};

export default Layout;
