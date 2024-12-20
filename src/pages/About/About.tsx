import { Header } from "../../components/Header";
import { CTA } from "../../components/CTA";
import { Form } from "../../components/Form";
import { Whatsapp } from "../../components/Whatsapp";
import khuram from "../../assets/about/Khuram.webp";
import muslim from "../../assets/about/muslim.webp";
import numan from "../../assets/about/numan.webp";
import hamad from "../../assets/about/hamad.webp";
import safdar from "../../assets/about/safdar.webp";
import sa from "../../assets/about/sa.webp";
import about from "../../assets/about/about.webp";
import bg from "../../assets/contact/contact.webp";

export function About() {
  return (
    <>
      <Whatsapp></Whatsapp>
      <Header heading="About Us" img={bg} />
      <Outlet_About />
      <Form />
    </>
  );
}

function Outlet_About() {
  return (
    <>
      <section className="flex flex-col items-center gap-8">
        <div className="flex items-start w-1/2 mx-auto">
          <p className="text-8xl text-black-100 -translate-y-10">“</p>
          <p className="text-center text-black-400 text-2xl">
            From every drop of perspiration on the body of Imam’s (a.s.) visitor
            (in the course of Ziarat). Allah creates 70,000 angels who glorify
            and seek forgiveness for Imam’s (a.s.) visitors till the Day of
            Judgement.
          </p>
        </div>
        <p className="text-lg text-black-100 mx-auto">
          [Reference: Mustadrak vol 2, pg 204]
        </p>
      </section>
      <section className="flex items-center flex-col">
        <span className="uppercase text-secondary-100 tracking-[6px] mb-2">
          About Us
        </span>
        <h2 className="text-center mb-16 text-black-100">Who We Are?</h2>
        <div className="flex justify-between items-center flex-col lg:flex-row gap-6">
          <ul className="text-center lg:text-left lg:basis-1/2 text-xl text-black-200">
            <li className="mb-8">
              Al Thaqlain travel & tours are the leading and most trusted name
              in the field of affordable and convenient religious tourism
              packages. We have a team of experienced professionals that will
              assist you in all your traveling concerns from visa, ticketing,
              transportation, accommodation.
            </li>
            <li className="mb-8">
              At Al Thaqlain travel & tours we aim to make your spiritual
              journey memorable and worth sharing while providing you a
              comfortable and hassle-free journey.
            </li>
            <li>
              Our greatest assets are the satisfied customers, traveling with us
              frequently to explore various ziarat destinations in Iraq, Iran,
              and Syria.
            </li>
          </ul>
          <div className="basis-1/2 ">
            <img src={about} alt="about img" />
          </div>
        </div>
      </section>
      <CTA />
      <section className="flex flex-col items-center">
        <span className="uppercase text-secondary-100 tracking-[6px] mb-2">
          Our Team
        </span>
        <h2 className="text-center mb-16 text-black-100">
          Meet Our Instructors
        </h2>
        <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="border border-white-800 flex justify-center flex-col items-center py-10 px-5 text-center rounded">
            <img src={hamad} alt="hamad" className="w-36 rounded-full mb-8" />
            <h3 className="text-2xl text-white-800">Hamid Al-Abadi</h3>
            <p className="text-white-200 tracking-wide">FOUNDER</p>
          </div>
          <div className="border border-white-800 flex justify-center flex-col items-center py-10 px-5 text-center rounded">
            <img src={khuram} alt="khuram" className="w-36 rounded-full mb-8" />
            <h3 className="text-2xl text-white-800">Syed Khuram Abbas</h3>
            <p className="text-white-200">CEO Pakistan Office</p>
          </div>
          <div className="border border-white-800 flex justify-center flex-col items-center py-10 px-5 text-center rounded">
            <img src={safdar} alt="safdar" className="w-36 rounded-full mb-8" />
            <h3 className="text-2xl text-center text-white-800">
              Safdar Abbas Al-Sabqi
            </h3>
            <p className="text-white-200">CEO Head Office</p>
          </div>
          <div className="border border-white-800 flex justify-center flex-col items-center py-10 px-5 text-center rounded">
            <img src={muslim} alt="muslim" className="w-36 rounded-full mb-8" />
            <h3 className="text-2xl text-white-800">MUSLIM AL-SHAMARI</h3>
            <p className="text-white-200">Representative of Najaf Airport</p>
          </div>
          <div className="border border-white-800 flex justify-center flex-col items-center py-10 px-5 text-center rounded">
            <img src={sa} alt="sa" className="w-36 rounded-full mb-8" />
            <h3 className="text-2xl text-white-800">SALEH MAHDI MUHAMMAD</h3>
            <p className="text-white-200">G MANAGER</p>
          </div>
          <div className="border border-white-800 flex justify-center flex-col items-center py-10 px-5 text-center rounded">
            <img src={numan} alt="numan" className="w-36 rounded-full mb-8 " />
            <h3 className="text-2xl text-white-800">SYED NUMAN AL-FAHAM</h3>
            <p className="text-white-200">Syria Operations</p>
          </div>
        </div>
      </section>
    </>
  );
}
