import { Header } from "../../components/Header";
import { CTA } from "../../components/CTA";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { RegistrationForm } from "../../components/Registration_form";
import { Whatsapp } from "../../components/Whatsapp";

import bus from "../../assets/Transportation/bus.webp";
import car from "../../assets/Transportation/car.webp";
import train from "../../assets/Transportation/train.webp";
import airplane from "../../assets/Transportation/airplane.webp";

import place from "../../assets/Transportation/place/b1.webp";
import place1 from "../../assets/Transportation/place/b2.webp";
import place2 from "../../assets/Transportation/place/b3.webp";
import place3 from "../../assets/Transportation/place/b4.webp";

export function Transportation() {
  return (
    <>
      <Whatsapp></Whatsapp>
      <Header heading="Transportation" img="headerBg" />

      <Transportation_Outlet />

      <RegistrationForm
        baseImg={place}
        heading={"Pilgrimage group of 14 innocents in Arbaeen"}
        subheading={"Rules and regulations : "}
        subdiscription={"I accept the mentioned terms and conditions"}
        discription={
          "Pilgrimage of the Fourteen Innocents (peace be upon them) in one trip The approximate time of this trip is around the Arbaeen time of Imam Hussain, peace be upon him, when the pilgrim first goes to Karbala to understand the fervor of Arbaeen and that valuable spiritual gathering and share in the spiritual reward of that gathering. After visiting Najaf, Karbala, Kazimin and Samarra, they go on Umrah journey and while visiting the grave of the Messenger of God during the martyrdom days of the Messenger of God, peace be upon him, and the graves of Imams Baqi, peace be upon them, they visit the house of God during the precious days of the month of Rabi. This trip is done as a VIP and with four-star and five-star hotels near the Kaaba "
        }
        date={"06-04-1403"}
        ADdate={"2024-08-25"}
      />

      <section>
        <h2 className="text-5xl text-gray-400 text-center mb-12 md:mb-28">
          Register
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Card
            heading="Syria trip"
            img={place}
            para="The duration of this trip is usually 5 days, which is done by air from Tehran"
            button="Register"
            to={"/transportation/register/syria"}
          />
          <Card
            heading="Pilgrimage of the fourteen innocents"
            img={place1}
            para="A special and memorable experience of visiting the house of God and the holy graves of the Imams of Athar in Iraq and Arabia, the length of this special trip is 21 days, with accommodation in premium hotels with breakfast, lunch, and dinner."
            button="Register"
            to={"/transportation/register/pilgrimage-of-the-fourteen-innocents"}
          />
          <Card
            heading="Hajj and Umrah journey"
            img={place2}
            para="Hajj pilgrimage for foreign pilgrims and Afghan pilgrims and separate Umrah journey with VIP services and first-class services for Afghan pilgrims and foreign pilgrims."
            button="Register"
            to="/transportation/register/hajj-and-umrah"
          />
          <Card
            heading="Pilgrimage to the sacred shrines"
            img={place3}
            para="The duration of this pilgrimage tour is nine days, which takes place both by air and land. During this trip, there is a manager and a cleric or a madah with the respected pilgrims."
            button="Register"
            to="/transportation/register/pilgrimage-to-the-sacred-shrines"
          />
        </div>
      </section>

      <div>
        <div className="flex flex-col items-center justify-center">
          <span className="uppercase text-secondary-100 tracking-[6px] mb-2">
            Vehicles
          </span>
          <h2 className="text-5xl text-center text-white-100 mb-32">
            Types of vehicles
          </h2>
        </div>
        <section className="flex gap-14 items-center justify-between flex-wrap flex-col sm:flex-row">
          <div className="basis-1/2">
            <h3 className="text-4xl font-medium mb-6">Buses</h3>
            <p className="text-white-100 mb-12 text-lg leading-normal">
              We at Al Thaqlain Company take great pride in presenting our
              premium class of bus transportation that is comfortable and
              reliable for group traveling. Our modern and well-maintained buses
              with state-of-the-art equipment guarantee a smooth and joyful
              ride. With an experienced driver and flexible schedules, we cater
              to every transportation need conveniently and stress-free on every
              trip.
            </p>
            <Button text="Get Started" to="/contact" white={true} />
          </div>
          <div className="basis-2/5">
            <img src={bus} alt="Bus" className="w-full" />
          </div>
        </section>
        <section className="flex gap-14 items-center flex-wrap justify-between flex-col sm:flex-row-reverse">
          <div className="basis-1/2">
            <h3 className="text-4xl font-medium mb-6">Cars</h3>
            <p className="text-white-100 mb-12 text-lg leading-normal">
              Al Thaqlain Company provides high-end automobile transportation
              services for all your comfortable and convenient travel needs. Our
              fleet of luxury sedans and SUVs is loaded with modern amenities to
              provide a smooth and enjoyable ride. It offers professional
              drivers, flexible scheduling, and consideration for individual and
              small groups of travelers, thus giving each their best shot at the
              perfect journey.
            </p>
            <Button text="Get Started" to="/contact" white={true}  />
          </div>
          <div className="basis-2/5">
            <img src={car} alt="Car" className="w-full" />
          </div>
        </section>
        <section className="flex gap-14 items-center justify-between flex-wrap flex-col sm:flex-row">
          <div className="basis-1/2">
            <h3 className="text-4xl font-medium mb-6">Trains</h3>
            <p className="text-white-100 mb-12 text-lg leading-normal">
              Al Thaqlain Company provides reliable train transportation
              services for efficient and scenic travel. We partner with leading
              rail providers to ensure seamless connections and a hassle-free
              travel experience. Whether for business or pleasure, our services
              promise you timely and comfortable journeys by train.
            </p>
            <Button text="Get Started" to="/contact" white={true}  />
          </div>
          <div className="basis-2/5">
            <img src={train} alt="train" className="w-full" />
          </div>
        </section>
        <section className="flex gap-14 items-center justify-between flex-wrap flex-col sm:flex-row-reverse">
          <div className="basis-1/2">
            <h2 className="text-4xl font-medium mb-6">AirPlane</h2>
            <p className="text-white-100 mb-12 text-lg leading-normal">
              Al Thaqlain Company provides first-rate air transportation
              services and ensures a suitable, quick mode of travel for short or
              long distances. We offer all flexible flights in association with
              renowned airlines, thus providing the service at your convenience.
              Travel timely, comfortably, and hassle-free in the air with Al
              Thaqlain.
            </p>
            <Button text="Get Started" to="/contact" white={true}  />
          </div>
          <div className="basis-2/5">
            <img src={airplane} alt="airplane" className="w-full" />
          </div>
        </section>
      </div>

      <CTA />
    </>
  );
}


function Transportation_Outlet() {
  return (
    <>
      <section className="px-4 md:px-20 py-8">
        <p className="text-center text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto">
          At Al Althaqlain Company, we assure our clients of extraordinary
          transportation services that provide a seamless and comfortable
          experience.
        </p>
      </section>
    </>
  );
}


export function Card(_props: {
  img: string;
  heading: string;
  para: string;
  button: string;
  to: string;
}) {
  return (
    <div className="card w-72 border rounded-lg flex flex-col gap-4">
      <img
        src={_props.img}
        className="w-80 rounded-tl-lg rounded-tr-lg"
        alt="image"
      />
      <div className="px-4 pb-8 flex-grow flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-openSans mb-4">{_props.heading}</h1>
          <p className="text-sm">{_props.para}</p>
        </div>
        <div className="mt-8">
          <Link
            to={_props.to}
            className="border p-3 pr-6 pl-6 rounded hover:bg-black-100"
          >
            {_props.button}
          </Link>
        </div>
      </div>
    </div>
  );
}
