import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import logo from "../../assets/logo.png";

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleServiceDropdown = () => {
    setServiceDropdown(!serviceDropdown);
  };

  const closeServiceDropdown = () => {
    setServiceDropdown(false);
  };

  return (
    <>
      <nav className="border-gray-200 max-w-screen-xl mx-auto font-openSans">
        <div className="flex flex-wrap items-center justify-between p-4">
          <Link to="/">
            <img src={logo} className="h-16" alt="Al Thaqlain Logo" />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button text={"Get started"} to="/contact" />
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={handleDropdown}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              dropdownOpen ? "" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black-400 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent md:text-secondary-500"
                  aria-current="page"
                  onClick={closeDropdown}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 md:p-0 text-white-300 duration-300 rounded md:hover:bg-transparent md:hover:text-white-400"
                  onClick={closeDropdown}
                >
                  About
                </Link>
              </li>
              <li className="relative">
                <button
                  id="dropdownNavbarLink"
                  className="flex items-center justify-between w-full py-2 px-3 text-white-300 rounded md:hover:bg-transparent md:border-0 md:hover:text-white-400 md:p-0 md:w-auto"
                  onClick={handleServiceDropdown}
                >
                  Services
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    serviceDropdown ? "z-10" : "hidden"
                  } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-8 left-0`}
                >
                  <ul
                    className="py-2 text-sm text-black-300 font-medium"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        to="hotel-booking"
                        className="block px-4 py-2 hover:bg-white-300"
                        onClick={() => {
                          closeDropdown();
                          closeServiceDropdown();
                        }}
                      >
                        Hotel Booking
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="visa"
                        className="block px-4 py-2 hover:bg-white-300"
                        onClick={() => {
                          closeDropdown();
                          closeServiceDropdown();
                        }}
                      >
                        Visa
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="transportation"
                        className="block px-4 py-2 hover:bg-white-300"
                        onClick={() => {
                          closeDropdown();
                          closeServiceDropdown();
                        }}
                      >
                        transportation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="food"
                        className="block px-4 py-2 hover:bg-white-300"
                        onClick={() => {
                          closeDropdown();
                          closeServiceDropdown();
                        }}
                      >
                        Food
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 md:p-0 text-white-300 rounded md:hover:bg-transparent md:hover:text-white-400"
                  onClick={closeDropdown}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
