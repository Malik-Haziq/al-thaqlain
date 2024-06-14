import { Navbar, Footer } from "./navigation";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  return (
    <>
      <main className="bg-black-400 text-white-500">
        {/* <ScrollToTop /> */}
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
