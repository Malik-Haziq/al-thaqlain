import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import {
  Home,
  About,
  Services,
  PrivacyPolicy,
  Contact,
  HotelBooking,
  Visa,
  Najaf,
  Kufa,
  Basra,
  Karbala,
  Hillah,
  Samara,
  Kazmia,
  Baghdad,
  Transportation,
  Menu,
  HotelDetails,
  Syria,
  FourteenInnocents,
  Hajj,
  SacredShrines,
} from "../src/pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/services"} element={<Services />} />
            <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
            <Route path={"/hotel-booking"} element={<HotelBooking />} />
            <Route path={"/hotel/:id"} element={<HotelDetails />} />
            <Route path={"/visa"} element={<Visa />} />
            <Route path={"/najaf"} element={<Najaf />} />
            <Route path={"/kufa"} element={<Kufa />} />
            <Route path={"/basra"} element={<Basra />} />
            <Route path={"/karbala"} element={<Karbala />} />
            <Route path={"/hillah"} element={<Hillah />} />
            <Route path={"/samara"} element={<Samara />} />
            <Route path={"/kazmia"} element={<Kazmia />} />
            <Route path={"/baghdad"} element={<Baghdad />} />
            <Route path="/transportation" element={<Transportation />} />
            <Route path="/transportation/register/syria" element={<Syria />} />
            <Route
              path="/transportation/register/pilgrimage-of-the-fourteen-innocents"
              element={<FourteenInnocents />}
            />
            <Route
              path="/transportation/register/hajj-and-umrah"
              element={<Hajj />}
            />
            <Route
              path="/transportation/register/pilgrimage-to-the-sacred-shrines"
              element={<SacredShrines />}
            />
            <Route path={"/food"} element={<Menu />} />
            <Route path="*" element={<Navigate to={"./"} replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
