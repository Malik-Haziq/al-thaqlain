import { Header } from "../../components/header";
import { Join } from "../../components/join";

export function Services() {
  return (
    <>
      <Header heading="Our Services" img="headerBg" />
      <Outlet_Service />
      <Join />
    </>
  );
}

function Outlet_Service() {
  return (
    <>
      <div className="pt-12 mb-24">
        <p className="text-center text-white-200">
          As a full-service travel agency, we provide a wide range of services
          to help our clients plan and book their dream Ziarat tour. <br></br>{" "}
          Here are some of the services we offer.
        </p>
      </div>
      <section className="px-8">
        <div className="grid grid-cols-3 gap-5">
          <div className="border flex justify-center flex-col items-center p-8 hover:border-yellow-400 cursor-pointer">
            <h3 className="text-white-100 mb-4 text-2xl font-medium">01</h3>
            <h2 className="text-2xl mb-6">Ziarat Tour Planning</h2>
            <p className="text-center mb-8">
              Our experienced travel advisors will work with you to create a
              customized Ziarat Tour plan based on your interests and
              preferences. Whether you’re looking for a relaxing getaway, we can
              help make it happen.
            </p>
            <a
              href="/contact"
              className="border border-yellow-400 py-2 px-4 hover:text-yellow-400 hover:border-white-100"
            >
              Contact Now
            </a>
          </div>
          <div className="border flex justify-center flex-col items-center p-8 hover:border-white-100 border-yellow-400 cursor-pointer">
            <h3 className="text-white-100 mb-4 text-2xl font-medium">02</h3>
            <h2 className="text-2xl mb-6">Airline Ticketing</h2>
            <p className="text-center mb-14">
              We offer airline ticketing for both domestic and international
              travel. Our team will help you find the best deals on flights and
              can assist with booking, seat selection, and any other requests
              you may have.
            </p>
            <a
              href="/contact"
              className="border border-yellow-400 py-2 px-4  hover:text-yellow-400 hover:border-white-100"
            >
              Contact Now
            </a>
          </div>
          <div className="border flex justify-center flex-col items-center p-8 hover:border-yellow-400 cursor-pointer">
            <h3 className="text-white-100 mb-4 text-2xl font-medium">03</h3>
            <h2 className="text-2xl mb-6">Accommodations</h2>
            <p className="text-center mb-8">
              We work with a variety of hotels, around Iraq to provide our
              clients with the best possible accommodations. We can help you
              find the perfect place to stay based on your budget and
              preferences, and handle all the booking details for you.
            </p>
            <a
              href="/contact"
              className="border border-yellow-400 py-2 px-4  hover:text-yellow-400 hover:border-white-100"
            >
              Contact Now
            </a>
          </div>
          <div className="border flex justify-center flex-col items-center p-8 hover:border-white-100 border-yellow-400 cursor-pointer">
            <h3 className="text-white-100 mb-4 text-2xl font-medium">04</h3>
            <h2 className="text-2xl mb-6">Transportation</h2>
            <p className="text-center mb-16">
              We can arrange transportation to and from the airport, as well as
              within your destination. Whether you need a rental car, private
              driver, or shuttle service, we can help you get around safely and
              efficiently.
            </p>
            <a
              href="/contact"
              className="border border-yellow-400 py-2 px-4  hover:text-yellow-400 hover:border-white-100"
            >
              Contact Now
            </a>
          </div>
          <div className="border flex justify-center flex-col items-center p-8 hover:border-yellow-400 cursor-pointer">
            <h3 className="text-white-100 mb-4 text-2xl font-medium">05</h3>
            <h2 className="text-2xl mb-6">Travel Insurance</h2>
            <p className="text-center mb-16">
              We offer travel insurance to protect you in case of unexpected
              events, such as trip cancellations, medical emergencies, or lost
              luggage. Our team can help you choose the right insurance plan for
              your needs.
            </p>
            <a
              href="contact"
              className="border border-yellow-400 py-2 px-4  hover:text-yellow-400 hover:border-white-100"
            >
              Contact Now
            </a>
          </div>
          <div className="border flex justify-center flex-col items-center p-8  hover:border-white-100 border-yellow-400 cursor-pointer">
            <h3 className="text-white-100 mb-4 text-2xl font-medium">06</h3>
            <h2 className="text-2xl mb-6">24/7 Customer Support</h2>
            <p className="text-center mb-8">
              Our team is available around the clock to assist you with any
              questions or concerns you may have before, during, or after your
              trip. We are committed to providing exceptional customer service
              and making sure you have a stress-free travel experience.
            </p>
            <a
              href="/contact"
              className="border border-yellow-400 py-2 px-4  hover:text-yellow-400 hover:border-white-100"
            >
              Contact Now
            </a>
          </div>
        </div>
      </section>
      <div className=" mb-24">
        <p className="text-center text-white-200">
          At our travel agency, we are passionate about helping our clients
          create unforgettable travel experiences. Contact us today to learn
          more <br></br> about how we can help you plan your next Ziarat Tour.
        </p>
      </div>
    </>
  );
}
