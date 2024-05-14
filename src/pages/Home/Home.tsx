import { Button } from "../../components/Button";
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
  return (
    <>
      <header className="bg-headerBg h-[80vh] bg-no-repeat bg-cover flex justify-center mb-10">
        <div className="max-w-screen-xl p-4 mx-auto flex flex-col gap-4 justify-center">
          <h1 className="text-white">
            Helping you visit&nbsp;
            <span className="text-secondary-400">Islamic regions</span>
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl sm:w-2/3 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nulla
            eos! Eum natus odio vitae libero repellat, reprehenderit quas
            numquam.
          </p>
          <Button text="Get in touch" />
        </div>
      </header>
      <section className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-center mb-5">Featured Destinations</h2>
        <div className="w-[3px] h-36 bg-black"></div>
        <div className="flex flex-wrap items-stretch justify-center gap-8">
          {destinations.map((place) => {
            return (
              <DestinationCard
                href={place.href}
                placeName={place.placeName}
                img={place.img}
              />
            );
          })}
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
          alt="najaf"
          className="destination-img w-96 h-full overflow-hidden cursor-pointer"
        />
        <div className="destination-overlay h-full w-full absolute top-0 flex items-center flex-col justify-center bg-[rgba(1,1,1,.2)] hover:bg-[rgba(1,1,1,.6)] duration-300">
          <h3 className="destination-name uppercase text-3xl font-semibold text-white duration-300">
            {_props.placeName}
          </h3>
          <span className="destination-discover text-sm text-white border-b uppercase -translate-y-6 opacity-0 scale-50 duration-300">
            Discover
          </span>
        </div>
      </Link>
    </div>
  );
}
