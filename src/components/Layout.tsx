import { Navbar, Footer } from "./navigation";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <main className="bg-black-500 text-white-500">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
