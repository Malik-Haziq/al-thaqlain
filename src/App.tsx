import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {
  Home,
  About,
  Services,
  PrivacyPolicy,
  Contact,
  HotelBooking,
} from "../src/pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/services"} element={<Services />} />
            <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
            <Route path={"/hotel-booking"} element={<HotelBooking />} />
            <Route path="*" element={<Navigate to={"./"} replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
