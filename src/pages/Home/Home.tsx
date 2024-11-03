import { Button } from "../../components/Button";
import { CTA } from "../../components/CTA";
import { Form } from "../../components/Form";
import { Join } from "../../components/Join";
import { Whatsapp } from "../../components/Whatsapp";
import { Link } from "react-router-dom";

// destination images
import najaf from "../../assets/destinations/najaf.webp";
import kufa from "../../assets/destinations/kufa.webp";
import basra from "../../assets/destinations/basra.webp";
import krbla from "../../assets/destinations/karbala.webp";
import hillah from "../../assets/destinations/hillah.webp";
import samara from "../../assets/destinations/samara.webp";
import kazmia from "../../assets/destinations/kazmia.webp";
import baghdad from "../../assets/destinations/baghdad.webp";

// services images
import accommodation from "../../assets/services/accommodation.webp";
import transportation from "../../assets/services/transportation.webp";
import ziyarat from "../../assets/services/ziyarat.webp";
import insurance from "../../assets/services/insurance.webp";
import airline from "../../assets/services/airline.webp";
import customerSupport from "../../assets/services/customer-support.webp";

export function Home() {
  const destinations = [
    { href: "/najaf", placeName: "najaf", img: najaf },
    { href: "/kufa", placeName: "kufa", img: kufa },
    { href: "/basra", placeName: "basra", img: basra },
    { href: "/karbala", placeName: "karbla", img: krbla },
    { href: "/hillah", placeName: "hillah", img: hillah },
    { href: "/samara", placeName: "samara", img: samara },
    { href: "/kazmia", placeName: "kazmia", img: kazmia },
    { href: "/baghdad", placeName: "baghdad", img: baghdad },
  ];

  const benefits = [
    {
      benefit: "24/7 Customer Support",
      details:
        "Benefit from round-the-clock assistance to handle any travel-related queries or emergencies.",
    },
    {
      benefit: "Affordable Packages",
      details:
        "Discover budget-friendly travel packages that offer great value without compromising on quality.",
    },
    {
      benefit: "Super Fast Booking",
      details:
        "Experience lightning-fast booking processes that save you time and effort.",
    },
    {
      benefit: "Exclusive Deals and Discounts",
      details:
        "Access special offers and discounts that are not available to the general public.",
    },
    {
      benefit: "Visa and Documentation Assistance",
      details:
        " Receive help with visa applications and other necessary travel documents.",
    },
  ];

  const services = [
    {
      img: insurance,
      service: "Travel Insurance",
      details: "Comprehensive travel insurance plans for peace of mind.",
    },
    {
      img: transportation,
      service: "Transportation",
      details:
        "Comprehensive transportation options including buses, trains, and private transfers for seamless travel.",
    },
    {
      img: airline,
      service: "Airline Ticketing",
      details: "Book domestic and international flights with ease.",
    },
    {
      img: accommodation,
      service: "Hotel Reservations",
      details:
        "Secure accommodations ranging from budget-friendly to luxury hotels.",
    },
    {
      img: ziyarat,
      service: "Ziyarat Tour Planning",
      details:
        "Create a customized Ziyarat Tour plan based on your interests and preferences",
    },
    {
      img: customerSupport,
      service: "24/7 Customer Support",
      details: "Round-the-clock assistance for travel emergencies and queries.",
    },
  ];
  return (
    <>
      <Whatsapp></Whatsapp>
      <header className="bg-headerBg h-[80vh] bg-no-repeat bg-cover flex justify-center mb-20">
        <div className="max-w-screen-xl p-4 mx-auto flex flex-col gap-4 justify-center">
          <h1 className="text-white-500">
            Welcome to Al&nbsp;Thaqlain Travel & Tours
          </h1>
          <p className="text-white-400 text-lg sm:text-xl md:text-2xl sm:w-2/3 mb-6 font-openSans">
            Ziyarat packages to Iraq, Iran & Syria that are specially designed
            to make our customer’s spiritual trip convenient and memorable.
          </p>
          <Button text="Get in touch" to="/contact" />
        </div>
      </header>
      <section className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-center mb-5 text-white-500">
          Featured Destinations
        </h2>
        <div className="w-[3px] h-36 bg-white-500"></div>
        <div className="flex flex-wrap items-stretch justify-center gap-8">
          {destinations.map((place) => {
            return (
              <DestinationCard
                href={place.href}
                placeName={place.placeName}
                img={place.img}
                key={place.placeName}
              />
            );
          })}
        </div>
      </section>
      <CTA />
      <section className="flex flex-col items-center justify-center ">
        <span className="uppercase text-secondary-100 tracking-[6px] mb-2">
          Our services
        </span>
        <h2 className="text-center mb-16">What we provide?</h2>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {services.map((service, i) => (
            <ServiceCard
              img={service.img}
              alt={service.service}
              service={service.service}
              details={service.details}
              key={i}
            />
          ))}
        </div>
      </section>
      <div className="bg-black-100">
        <section className="flex flex-col items-center justify-center py-14">
          <span className="uppercase text-secondary-100 tracking-[6px] mb-2">
            Benefits
          </span>
          <h2 className="text-center mb-16">Why choose us?</h2>
          <div className="flex items-center justify-center gap-10 flex-wrap">
            {benefits.map((obj, i) => (
              <BenefitCard
                heading={obj.benefit}
                details={obj.details}
                key={i}
              />
            ))}
          </div>
        </section>
      </div>
      <Join />
      <Form />
    </>
  );
}

function DestinationCard(_props: {
  img: string;
  placeName: string;
  href: string;
}) {
  return (
    <div>
      <Link to={_props.href} className="relative">
        <img
          src={_props.img}
          alt={_props.placeName}
          className="destination-img w-96 h-full overflow-hidden cursor-pointer"
        />
        <div className="destination-overlay h-full w-full absolute top-0 flex items-center flex-col justify-center bg-[rgba(1,1,1,.4)] hover:bg-[rgba(1,1,1,.6)] duration-300">
          <h3 className="destination-name uppercase text-3xl font-medium text-white-500 duration-300">
            {_props.placeName}
          </h3>
          <span className="destination-discover text-sm text-white-400 border-b uppercase -translate-y-6 opacity-0 scale-50 duration-300">
            Discover
          </span>
        </div>
      </Link>
    </div>
  );
}

function BenefitCard(_props: { heading: string; details: string }) {
  return (
    <div className="border-2 border-white-100 flex flex-col gap-3 px-6 py-10 md:max-w-[350px]">
      <h3 className="text-2xl font-medium">{_props.heading}</h3>
      <p className="mb-3 text-white-200">{_props.details}</p>
      <Link
        to="/"
        className="on-hover w-fit text-white-300 border-b-[2px] border-white-100 hover:border-white-500 hover:text-white-500 duration-200 relative"
      >
        View more
      </Link>
    </div>
  );
}

function ServiceCard(_props: {
  img: string;
  alt: string;
  service: string;
  details: string;
}) {
  return (
    <div>
      <Link to="/" className="relative">
        <img
          src={_props.img}
          alt={_props.alt}
          className="destination-img w-96 h-full overflow-hidden cursor-pointer"
        />
        <div className="destination-overlay h-full w-full absolute top-0 flex items-start flex-col justify-end px-4 pb-4 bg-[rgba(1,1,1,.4)] hover:bg-[rgba(1,1,1,.6)] duration-300">
          <h3 className="destination-name text-3xl font-medium text-white-500 duration-300 mb-2">
            {_props.service}
          </h3>
          <div className="destination-discover opacity-0 duration-300">
            <p className="destination-discover text-sm text-white-400 opacity-0 duration-300">
              {_props.details}
            </p>
            <span className="on-hover w-fit text-white-300 border-b-[2px] border-white-100 hover:border-white-500 hover:text-white-500 duration-200 relative">
              View more
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
