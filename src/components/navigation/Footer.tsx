import logo from "../../assets/logo.png";
import facebook from "../../assets/footer/facebook.svg";
import linkdin from "../../assets/footer/linkdin.svg";
import twitter from "../../assets/footer/twitter.svg";
import email from "../../assets/footer/email.svg";
import phone from "../../assets/contact/phone.svg";
import location from "../../assets/contact/location.svg";

import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <div className="bg-black-100">
        <section className="bg-black-100 py-12 mb-0">
          <div className="flex justify-between flex-wrap gap-3 mb-6 border-b-[1px] border-white-100 pb-10">
            <div>
              <img src={logo} className="h-24 mb-8 " alt="Al Thaqlain Logo" />
              <h2 className="text-lg font-medium mb-4 text-white-500">
                Al-Thaqlain Travel & Tours
              </h2>
              <p className="text-white-300">
                Ziyarat packages to Iraq, Iran & Syria that are <br></br>
                specially designed to make our customer’s <br></br> spiritual
                trip convenient and memorable.
              </p>
            </div>
            <div className="pt-6 cursor-pointer">
              <h3 className="text-xl mb-6">SERVICES</h3>
              <ul className="flex flex-col gap-3 text-white-300">
                <li className="hover:text-white-500">
                  <Link to="/hotel-booking">Hotel Booking</Link>
                </li>
                <li className="hover:text-white-500">
                  <Link to="/visa">Visa</Link>
                </li>
                <li className="hover:text-white-500">
                  <Link to="/transportation">Transportation</Link>
                </li>
                <li className="hover:text-white-500">
                  <Link to="/">Packages</Link>
                </li>
              </ul>
            </div>
            <div className="pt-6 cursor-pointer">
              <h3 className="text-xl mb-6">COMPANY</h3>
              <ul className="flex flex-col gap-3 text-white-300">
                <li className="hover:text-white-500">
                  <Link to="/about">About</Link>
                </li>
                <li className="hover:text-white-500">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="hover:text-white-500">
                  <Link to="/services">Services</Link>
                </li>
                <li className="hover:text-white-500">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-6 pt-6">CONTACT INFO</h3>
              <ul className="flex flex-col gap-3 text-white-300">
                <li className="flex items-center gap-2">
                  <img src={location} alt="location icon" className="w-5" />
                  <span>
                    Office NO. (A15/2-3) Al-Madeena al Maiya , Center jabal
                    <br />
                    Aamil Uposit Haye al- Adalaa ,Najaf Al Ashraf-IRAQ.
                  </span>
                </li>
                <li className="hover:text-white-500 flex items-center gap-2">
                  <img src={phone} alt="phone icon" className="w-5" />
                  <a href="callto:+9647809970416">+964 780 9970416</a>
                </li>
                <li className="hover:text-white-500  flex items-center gap-2">
                  <img src={phone} alt="phone icon" className="w-5" />
                  <a href="callto:+9647737940863">+964 773 794 0863</a>
                </li>
                <li className="hover:text-white-500  flex items-center gap-2">
                  <img src={email} alt="email icon" className="w-5" />
                  <a href="mailto:info@althaqlain.com">info@althaqlain.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 flex-col-reverse sm:flex-row">
            <p className="text-sm text-white-300 text-center">
              © 2024. All right reserved. Al-Thaqlain Travel & Tours. Powered
              by&nbsp;
              <a
                className="text-white-500 hover:border-b-[1px] border-white-500 duration-150 font-medium"
                href="https://codewithnaqvi.com"
              >
                CodeWithNaqvi
              </a>
            </p>
            <div className="flex gap-10">
              <a href="#">
                <img src={facebook} alt="facebook icon" className="w-5" />
              </a>
              <a href="#">
                <img src={linkdin} alt="linkdin icon" className="w-5" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter icon" className="w-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
