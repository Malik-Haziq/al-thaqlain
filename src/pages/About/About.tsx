import { Header } from "../../components/header";
import { Join } from "../../components/join";
import khuram from "../../assets/about/Khuram.webp";
import muslim from "../../assets/about/muslim.webp";
import numan from "../../assets/about/numan.webp";
import hamad from "../../assets/about/hamad.webp";
import safdar from "../../assets/about/safdar.webp";
import sa from "../../assets/about/sa.webp";

export function About() {
  return (
    <>
      <Header heading="About Us" img="headerBg" />
      <Outlet_About />
      <Join />
    </>
  );
}

function Outlet_About() {
  return (
    <>
      <div className="py-12 text-center text-2xl mb-16">
        <p className="mb-16 text-secondary-400">
          A journey at ease, is a memorable journey.
        </p>
        <p className="text-8xl text-white-100 mb-4">“</p>
        <p className="text-center text-base mb-3.5">
          From every drop of perspiration on the body of Imam’s (a.s.) visitor
          (in the course of Ziarat). Allah creates 70,000 angels who glorify and{" "}
          <br></br> seek forgiveness for Imam’s (a.s.) visitors till the Day of
          Judgement
        </p>
        <p className="text-lg text-white-100">
          -[Reference: Mustadrak vol 2, pg 204]
        </p>
      </div>
      <div className="flex gap-28 flex-wrap justify-center px-12 mb-16">
        <div className=" mb-16">
          <ul>
            <li className="mb-8">
              Al Thaqlain travel & tours are the leading and most trusted name
              in the field of affordable and <br></br> convenient religious
              tourism packages. We have a team of experienced professionals that
              will <br></br> assist you in all your traveling concerns from
              visa, ticketing, transportation, accommodation.
            </li>
            <li className="mb-8">
              At Al Thaqlain travel & tours we aim to make your spiritual
              journey memorable and worth sharing <br></br> while providing you
              a comfortable and hassle-free journey.
            </li>
            <li className="mb-8">
              Our greatest assets are the satisfied customers, traveling with us
              frequently to explore various ziarat <br></br> destinations in
              Iraq, Iran, and Syria.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-8 text-2xl text-secondary-400">Our Expertise</h3>
          <li className="mb-8 hover:text-white-100">Transportation</li>
          <li className="mb-8 hover:text-white-100">Visa Assistance</li>
          <li className="mb-8 hover:text-white-100">Air Ticketing</li>
          <li className="mb-8 hover:text-white-100">Hotel Booking</li>
        </div>
      </div>
      <div className="px-40 mb-40 ">
        <h2 className="mb-12 text-5xl text-center text-secondary-400">
          Our Team
        </h2>
        <div className="grid grid-cols-3 gap-5">
          <div className="border flex justify-center flex-col items-center py-10">
            <img src={hamad} alt="hamad" className="w-36 rounded-full mb-8" />
            <h2 className="text-2xl mb-4">Hamid Al-Abadi</h2>
            <p className="text-secondary-400">FOUNDER</p>
          </div>
          <div className="border flex justify-center flex-col items-center py-10">
            <img src={khuram} alt="khuram" className="w-36 rounded-full mb-8" />
            <h2 className="text-2xl mb-4">Syed Khuram Abbas</h2>
            <p className="text-secondary-400">CEO</p>
          </div>
          <div className="border flex justify-center flex-col items-center py-10">
            <img src={safdar} alt="safdar" className="w-36 rounded-full mb-8" />
            <h2 className="text-2xl text-center mb-4">Safdar Abbas Al-Sabqi</h2>
            <p className="text-secondary-400">CEO</p>
          </div>
          <div className="border flex justify-center flex-col items-center py-10">
            <img src={muslim} alt="muslim" className="w-36 rounded-full mb-8" />
            <h2 className="text-2xl mb-4">MUSLIM AL-SHAMARI</h2>
            <p className="text-secondary-400">
              Representative of Najaf Airport
            </p>
          </div>
          <div className="border flex justify-center flex-col items-center py-10">
            <img src={sa} alt="sa" className="w-36 rounded-full mb-8" />
            <h2 className="text-2xl mb-4">SALEH MAHDI MUHAMMAD</h2>
            <p className="text-secondary-400">G MANAGER</p>
          </div>
          <div className="border flex justify-center flex-col items-center py-10">
            <img src={numan} alt="numan" className="w-36 rounded-full mb-8 " />
            <h2 className="text-2xl mb-4">SYED NUMAN AL-FAHAM</h2>
            <p className="text-secondary-400">Syria Operations</p>
          </div>
        </div>
      </div>
    </>
  );
}
