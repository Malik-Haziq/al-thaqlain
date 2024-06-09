import logo from "../../assets/logo.png";
import facebook from "../../assets/footer/facebook.svg";
import linkdin from "../../assets/footer/linkdin.svg";
import twitter from "../../assets/footer/twitter.svg";

import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
    <div className="bg-black-100">
      <section className="bg-black-100 py-12 mb-0">
        <div className="flex justify-between flex-wrap gap-3 mb-6 border-b-[1px] border-white-100 pb-10">
          <div>
            <img src={logo} className="h-24 mb-8 " alt="Al Thaqlain Logo" />
            <h2 className="text-lg font-medium mb-4 text-white-500">Al-Thaqlain Travel & Tours</h2>
            <p className="text-white-300">
              Ziyarat packages to Iraq, Iran & Syria that are <br></br> specially designed to make our customer’s <br></br> spiritual trip convenient and memorable.
            </p>
          </div>
          <div className="pt-6 cursor-pointer">
            <h3 className="text-xl mb-6">SERVICES</h3>
            <ul className="flex flex-col gap-3 text-white-300">
              <li className="hover:text-white-500"><Link to="/hotel-booking">Hotel Booking</Link></li>
              <li className="hover:text-white-500"><Link to="/visa">Visa</Link></li>
              <li className="hover:text-white-500"><Link to="/transportaion">Transportation</Link></li>
              <li className="hover:text-white-500"><Link to="/">Packages</Link></li>
            </ul>
          </div>
          <div className="pt-6 cursor-pointer">
            <h3 className="text-xl mb-6">COMPANY</h3>
            <ul className="flex flex-col gap-3 text-white-300">
              <li className="hover:text-white-500"><Link to="/">Home</Link></li>
              <li className="hover:text-white-500"><Link to="/about">About</Link></li>
              <li className="hover:text-white-500"><Link to="/contact">Contact</Link></li>
              <li className="hover:text-white-500"><Link to="/service">Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl mb-6 pt-6">CONTACT INFO</h3>
            <ul className="flex flex-col gap-3 text-white-300">
            <li>
              Office NO. (A15/2-3) Al-Madeena al Maiya , Center jabal <br></br> Aamil Uposit Haye al- Adalaa ,Najaf Al Ashraf-IRAQ.
            </li>
            <li className="hover:text-white-500"><a href="callto:+9647809970416">+964 780 9970416</a></li>
            <li className="hover:text-white-500"><a href="callto:+9647737940863">+964 773 794 0863</a></li>
            <li className="hover:text-white-500"><a href="mailto:info@althaqlain.com">info@althaqlain.com</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 flex-col-reverse sm:flex-row">
        <p className="text-sm text-white-300 text-center">
        © 2024. All right reserved. Al-Thaqlain Travel & Tours. Powered by <a className="text-secondary-500 hover:border-b-[1px] border-secondary-500" href="https://codewithnaqvi.com">CodeWithNaqvi</a>
        </p>
        <div className="flex gap-10">
          <a href="#"><img src={facebook} alt="facebook icon" className="w-5" /></a>
          <a href="#"><img src={linkdin} alt="linkdin icon" className="w-5" /></a>
          <a href="#"><img src={twitter} alt="twitter icon" className="w-5" /></a>
        </div>
        </div>
      </section>
    </div>
    </>
  );
}
