import { Header } from "../../components/header";
import { CTA } from "../../components/CTA";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

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
      <Header heading="Transportation" img="headerBg" />
      <Transportation_Outlet />
      <section className="">
        <h2 className="text-5xl text-white-400 text-center mb-28">Register</h2>
        <div className="flex gap-4">
          <Card
            heading="Syria trip"
            img={place}
            para="The duration of this trip is usually 5 days, which is done by air from Tehran"
            button="Register"
          />
          <Card
            heading="Pilgrimage of the fourteen innocents"
            img={place1}
            para="A special and memorable experience of visiting the house of God and the holy graves of the Imams of Athar in Iraq and Arabia, the length of this special trip is 21 days, with accommodation in premium hotels with breakfast, lunch and dinner."
            button="Register"
          />
          <Card
            heading="Hajj and Umrah journey"
            img={place2}
            para="Hajj pilgrimage for foreign pilgrims and Afghan pilgrims and separate Umrah journey with VIP services and first-class services for Afghan pilgrims and foreign pilgrims"
            button="Register"
          />
          <Card
            heading="Pilgrimage to the sacred shrines"
            img={place3}
            para="The duration of this pilgrimage tour is nine days, which takes place both by air and land. During this trip, there is a manager and a cleric or a madah with the respected pilgrims."
            button="Register"
          />
        </div>
      </section>

      <div>
        <div className="flex flex-col items-center justify-center">
          <span className="uppercase text-secondary-100 tracking-[6px] mb-2">
            Vehicles
          </span>
          <h2 className="text-5xl text-center text-white-500 mb-32">
            Types of vehicles
          </h2>
        </div>
        <section className="flex gap-14 items-center justify-between flex-wrap flex-col sm:flex-row">
          <div className="basis-1/2">
            <h3 className="text-4xl font-medium mb-6">Buses</h3>
            <p className="text-white-300 mb-12 text-lg leading-normal">
              We at Al Thaqlain Company take great pride in presenting our
              premium class of bus transportation that is comfortable and
              reliable for group traveling. Our modern and well-maintained buses
              with state-of-the-art equipment guarantee a smooth and joyful
              ride. With an experienced driver and flexible schedules, we cater
              to every transportation need conveniently and stress-free on every
              trip.
            </p>
            <Button text="Get Started" to="/contact" />
          </div>
          <div className="basis-2/5">
            <img src={bus} alt="Bus" className="w-full" />
          </div>
        </section>
        <section className="flex gap-14 items-center flex-wrap justify-between flex-col sm:flex-row-reverse">
          <div className="basis-1/2">
            <h3 className="text-4xl font-medium mb-6">Cars</h3>
            <p className="text-white-300 mb-12 text-lg leading-normal">
              Al Thaqlain Company provides high-end automobile transportation
              services for all your comfortable and convenient travel needs. Our
              fleet of luxury sedans and SUVs is loaded with modern amenities to
              provide a smooth and enjoyable ride. It offers professional
              drivers, flexible scheduling, and consideration for individual and
              small groups of travelers, thus giving each their best shot at the
              perfect journey.
            </p>
            <Button text="Get Started" to="/contact" />
          </div>
          <div className="basis-2/5">
            <img src={car} alt="Car" className="w-full" />
          </div>
        </section>
        <section className="flex gap-14 items-center justify-between flex-wrap flex-col sm:flex-row">
          <div className="basis-1/2">
            <h3 className="text-4xl font-medium mb-6">Trains</h3>
            <p className="text-white-300 mb-12 text-lg leading-normal">
              Al Thaqlain Company provides reliable train transportation
              services for efficient and scenic travel. We partner with leading
              rail providers to ensure seamless connections and a hassle-free
              travel experience. Whether for business or pleasure, our services
              promise you timely and comfortable journeys by train.
            </p>
            <Button text="Get Started" to="/contact" />
          </div>
          <div className="basis-2/5">
            <img src={train} alt="train" className="w-full" />
          </div>
        </section>
        <section className="flex gap-14 items-center justify-between flex-wrap flex-col sm:flex-row-reverse">
          <div className="basis-1/2">
            <h2 className="text-4xl font-medium mb-6">AirPlane</h2>
            <p className="text-white-300 mb-12 text-lg leading-normal">
              Al Thaqlain Company provides first-rate air transportation
              services and ensures a suitable, quick mode of travel for short or
              long distances. We offer all flexible flights in association with
              renowned airlines, thus providing the service at your convenience.
              Travel timely, comfortably, and hassle-free in the air with Al
              Thaqlain.
            </p>
            <Button text="Get Started" to="/contact" />
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
      <section className="md:px-20">
        <p className="text-center text-white-300 text-2xl mx-auto">
          At Al Althaqlain Company, we assure our clients of extraordinary
          transportation services that provide a seamless and comfortable
          experience.
        </p>
      </section>
    </>
  );
}
