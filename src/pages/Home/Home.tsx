import { Button } from "../../components/Button";
import { CTA } from "../../components/CTA";
import { Link } from "react-router-dom";

import najaf from "../../assets/destinations/najaf.webp";
import kufa from "../../assets/destinations/kufa.webp";
import basra from "../../assets/destinations/basra.webp";
import krbla from "../../assets/destinations/krbla.webp";
import hillah from "../../assets/destinations/hillah.webp";
import samara from "../../assets/destinations/samara.webp";
import kazmia from "../../assets/destinations/kazmia.webp";
import baghdad from "../../assets/destinations/baghdad.webp";

export function Home() {
  const destinations = [
    { href: "/najaf", placeName: "najaf", img: najaf },
    { href: "/kufa", placeName: "kufa", img: kufa },
    { href: "/basra", placeName: "basra", img: basra },
    { href: "/krbla", placeName: "karbla", img: krbla },
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
  return (
    <>
      <header className="bg-headerBg h-[80vh] bg-no-repeat bg-cover flex justify-center mb-20">
        <div className="max-w-screen-xl p-4 mx-auto flex flex-col gap-4 justify-center">
          <h1 className="text-white-500">
            Welcome to&nbsp;
            <span className="text-secondary-400">
              Al&nbsp;Thaqlain Travel and Tours
            </span>
          </h1>
          <p className="text-white-400 text-lg sm:text-xl md:text-2xl sm:w-2/3 mb-6 font-openSans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nulla
            eos! Eum natus odio vitae libero repellat, reprehenderit quas
            numquam.
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
      <section className="flex flex-col items-center justify-center">
        <span className="uppercase text-secondary-100 tracking-[6px] mb-2">
          Benefits
        </span>
        <h2 className="text-center mb-16">Why choose us?</h2>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {benefits.map((obj) => (
            <BenefitCard heading={obj.benefit} details={obj.details} />
          ))}
        </div>
      </section>
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
    <div className="border-2 border-black-500 flex flex-col gap-3 px-6 py-10 md:max-w-[350px]">
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
