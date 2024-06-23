import { Header } from "../../components/header";
import { CTA } from "../../components/CTA";
import bus from "../../assets/Transpotation/bus.webp";
import car from "../../assets/Transpotation/car.webp";
import train from "../../assets/Transpotation/train.webp";
import airplane from "../../assets/Transpotation/airplane.webp";

export function Transpotation() {
  return (
    <>
      <Header heading="Transpotation" img="headerBg" />
      <Transpotation_Outlet />
      <section>
        <h2 className="text-5xl text-center text-secondary-400 mb-32">
          Types of vehicles available
        </h2>
        <section className="flex gap-24 items-center flex-wrap">
          <div className="basis-1/2">
            <h2 className="text-4xl text-secondary-400 mb-12">Buses</h2>
            <p className="text-white-200 mb-12 text-lg leading-normal">
              ChatGPT Al Thaqlain Company proudly offers top-tier bus
              transportation services, ensuring comfort and reliability for
              group travel. Our modern, well-maintained buses are equipped with
              advanced amenities to provide a smooth and enjoyable journey. With
              experienced drivers and flexible scheduling, we cater to all your
              transportation needs, making every trip convenient and
              stress-free.
            </p>
            <a
              href="#"
              className="p-3 border-2 font-semibold hover:text-black-400 hover:bg-white-500 duration-75 "
            >
              Get Started
            </a>
          </div>
          <img src={bus} alt="Bus" className="max-w-lg cursor-pointer " />
        </section>
        <section className="flex flex-row-reverse gap-24 items-center flex-wrap">
          <div className="basis-1/2">
            <h2 className="text-4xl text-secondary-400 mb-12">Cars</h2>
            <p className="text-white-200 mb-12 text-lg leading-normal">
              Al Thaqlain Company offers premium car transportation services,
              ensuring comfort and convenience for all your travel needs. Our
              fleet of luxury sedans and SUVs is equipped with modern amenities
              to provide a smooth and enjoyable ride. With professional drivers
              and flexible scheduling, we cater to both individual and small
              group travel, making every journey a pleasant experience.
            </p>
            <a
              href="#"
              className="p-3 border-2 font-semibold hover:text-black-400 hover:bg-white-500 duration-75 "
            >
              Get Started
            </a>
          </div>
          <img src={car} alt="Bus" className="max-w-lg" />
        </section>
        <section className="flex gap-24 items-center flex-wrap">
          <div className="basis-1/2">
            <h2 className="text-4xl text-secondary-400 mb-12">Trains</h2>
            <p className="text-white-200 mb-12 text-lg leading-normal">
              Al Thaqlain Company offers reliable train transportation services,
              providing efficient and scenic travel options. We partner with
              leading rail providers to ensure seamless connections and a
              hassle-free travel experience. Whether for business or leisure,
              our train services guarantee timely and comfortable journeys.
            </p>
            <a
              href="#"
              className="p-3 border-2 font-semibold hover:text-black-400 hover:bg-white-500 duration-75 "
            >
              Get Started
            </a>
          </div>
          <img src={train} alt="Bus" className="max-w-lg" />
        </section>
        <section className="flex flex-row-reverse gap-24 items-center flex-wrap">
          <div className="basis-1/2">
            <h2 className="text-4xl text-secondary-400 mb-12">AirPlane</h2>
            <p className="text-white-200 mb-12 text-lg leading-normal">
              Al Thaqlain Company offers top-notch air transportation services,
              ensuring fast and efficient travel for both short and long
              distances. Partnering with leading airlines, we provide a range of
              flight options to suit your schedule and preferences. Experience
              timely, comfortable, and stress-free air travel with Al Thaqlain.
            </p>
            <a
              href="#"
              className="p-3 border-2 font-semibold hover:text-black-400 hover:bg-white-500 duration-75 "
            >
              Get Started
            </a>
          </div>
          <img src={airplane} alt="Bus" className="max-w-lg" />
        </section>
      </section>
      <CTA />
    </>
  );
}

function Transpotation_Outlet() {
  return (
    <>
      <section className="md:px-20">
        <p className="text-center text-white-300 text-xl mx-auto">
          Al Althaqlain Company, we prioritize exceptional transportation
          services to ensure our clients enjoy seamless and comfortable travel
          experiences. Our fleet, consisting of modern and well-maintained
          vehicles, caters to diverse needs, from luxurious sedans for executive
          travel to spacious buses for group tours. We emphasize safety,
          punctuality, and customer satisfaction, employing experienced drivers
          who are well-versed in the best routes and local attractions.
          Additionally, we offer flexible scheduling and customized travel
          itineraries to accommodate the unique preferences of our clients. At
          Althaqlain Company, our commitment to superior transportation services
          ensures that every journey is smooth, enjoyable, and memorable.
        </p>
      </section>
    </>
  );
}
