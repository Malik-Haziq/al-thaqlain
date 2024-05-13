import { Navbar, Footer } from "./navigation";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
