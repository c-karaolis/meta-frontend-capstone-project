import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Reservations from "./pages/reservations/Reservations";
import "./App.css";
import Layout from "./layout/Layout";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"/about"} element={<UnderConstruction />} />
          <Route path={"/menu"} element={<UnderConstruction />} />
          <Route path={"/order-online"} element={<UnderConstruction />} />
          <Route path={"/login"} element={<UnderConstruction />} />
          <Route path={"/reservations"} element={<Reservations />} />

          {/* <Route path={"/about"} element={<UnderConstruction />} />
        <Route path={"/reservations"} element={<UnderConstruction />} />
        <Route path={"/order-online"} element={<Bookings />} />
        <Route path={"/login"} element={<Bookings />} /> */}

          {/* <Route path={pages.get("login").path} element={<UnderConstruction />} />
        <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
