import { useState, useRef, useEffect, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import logo from "../../assets/logo.png";

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>("Home");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const serviceDropdownRef = useRef<HTMLLIElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeDropdown();
    const text = e.currentTarget.textContent || "";
    handleCurrenctPage(text);
  };

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

  const handleCurrenctPage = (page: SetStateAction<string>) => {
    setCurrentPage(page);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      serviceDropdownRef.current &&
      !serviceDropdownRef.current.contains(event.target as Node)
    ) {
      closeDropdown();
      closeServiceDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="border-gray-200 bg-secondary-100 xl:px-32 mx-auto font-openSans">
        <div className="flex flex-wrap items-center justify-between p-4">
          <Link to="/">
            <img src={logo} className="h-16" alt="Al Thaqlain Logo" />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button text={"Get started"} to="/contact" white={true} />
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
            ref={dropdownRef}
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 text-white-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 md:p-0 duration-300 rounded md:bg-transparent md:hover:text-white-100 ${
                    currentPage === "Home" && "text-white-100"
                  }`}
                  aria-current="page"
                  onClick={handleClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block py-2 px-3 md:p-0 duration-300 rounded md:hover:bg-transparent md:hover:text-white-100 ${
                    currentPage === "About" && "text-white-100"
                  }`}
                  onClick={handleClick}
                >
                  About
                </Link>
              </li>
              <li className="relative" ref={serviceDropdownRef}>
                <button
                  id="dropdownNavbarLink"
                  className="flex items-center justify-between w-full duration-300 py-2 px-3 text-white-100 rounded md:hover:bg-transparent md:border-0 md:hover:text-white-100 md:p-0 md:w-auto"
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
                  } font-normal bg-white-100 divide-y rounded-lg shadow w-44 absolute top-8 left-0`}
                >
                  <ul
                    className="py-2 text-sm text-black-100 font-medium"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        to="hotel-booking"
                        className={`block px-4 py-2 hover:bg-gray-300 hover:text-secondary-100 ${
                          currentPage === "Hotel Booking" && "text-black-100"
                        }`}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          handleClick(e);
                          closeServiceDropdown();
                        }}
                      >
                        Hotel Booking
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="visa"
                        className={`block px-4 py-2 hover:bg-gray-300 hover:text-secondary-100 ${
                          currentPage === "Visa" && "text-black-100"
                        }`}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          handleClick(e);
                          closeServiceDropdown();
                        }}
                      >
                        Visa
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="transportation"
                        className={`block px-4 py-2 hover:bg-gray-300 hover:text-secondary-100 ${
                          currentPage === "Transportation" && "text-black-100"
                        }`}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          handleClick(e);
                          closeServiceDropdown();
                        }}
                      >
                        Transportation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="food"
                        className={`block px-4 py-2 hover:bg-gray-300 hover:text-secondary-100 ${
                          currentPage === "Food" && "text-black-100"
                        }`}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          handleClick(e);
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
                  className={`block py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:hover:text-white-100 ${
                    currentPage === "Contact" && "text-white-100"
                  }`}
                  onClick={handleClick}
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
