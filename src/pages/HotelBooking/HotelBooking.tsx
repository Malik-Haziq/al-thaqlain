import { useState, useEffect, SetStateAction, Dispatch } from "react";
import type { Hotel } from "../../types";
import axios from "axios";

import { Header } from "../../components/header";

import location from "../../assets/hotels/icons/location.png";
import address from "../../assets/hotels/icons/addres.svg";
import tag from "../../assets/hotels/icons/tag.svg";
import bed from "../../assets/hotels/icons/bed.svg";
import person from "../../assets/hotels/icons/person.svg";

// Hotel card

import mug from "../../assets/hotels/icons/mug.svg";
import home from "../../assets/hotels/icons/home.svg";
import resturant from "../../assets/hotels/icons/resturant.svg";
import parking from "../../assets/hotels/icons/parking.svg";
import wifi from "../../assets/hotels/icons/wifi.svg";
import bath from "../../assets/hotels/icons/bath.svg";
import airpot from "../../assets/hotels/icons/airpot.svg";
import eye from "../../assets/hotels/icons/eye.svg";
import service from "../../assets/hotels/icons/service.svg";

import { places, quantities } from "../../data";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { Range, getTrackBackground } from "react-range";

const MIN = 0;
const MAX = 50000;

const initialState: Hotel[] = [
  {
    id: "",
    name: "",
    base_image_url: "",
    city: "",
    address: "",
    country: "",
    images_urls: [],
    loc_lat: "",
    loc_long: "",
    price: 0,
    rating: "",
    state: "",
  },
];

export function HotelBooking() {
  const [place, setPlace] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [rooms, setRooms] = useState("");
  const [dates, setDates] = useState<Date[]>([]);
  const [data, setData] = useState<Hotel[]>(initialState);
  const [priceRange, setPriceRange] = useState<number[]>([50, 10000]);

  useEffect(() => {
    axios
      .get<Hotel[]>(
        "https://althaqlain-backend-90833a98168c.herokuapp.com/api/hotels"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header heading="Hotels" img={"headerBg"} />
      <section className="bg-secondary-600">
        <form
          action="#"
          className="flex justify-between items-center gap-3 flex-wrap"
        >
          <div className="flex flex-col gap-2 ">
            <span className="font-medium text-lg">Where you're going?</span>
            <div className="relative">
              <select
                name="city"
                id="city"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="text-black-100 w-72 p-3 pl-14 basis-auto border-none outline-none cursor-pointe"
              >
                {places.map((place, i) => (
                  <option
                    value={place.value}
                    className="p-2 text-black-100 hover:bg-white-300"
                    key={i}
                  >
                    {place.name}
                  </option>
                ))}
              </select>
              <img
                src={location}
                alt="bed icon"
                className="absolute top-1/2 w-6 left-4 -translate-y-1/2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <span className="font-medium text-lg">Adults</span>
            <div className="relative">
              <select
                name="adults"
                id="adults"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="text-black-100 w-32 p-3 pl-14 basis-auto border-none outline-none cursor-pointer"
              >
                {quantities.map((person, i) => (
                  <option
                    value={person.value}
                    className="p-2 text-black-100 hover:bg-white-300"
                    key={i}
                  >
                    {person.quantity}
                  </option>
                ))}
              </select>
              <img
                src={person}
                alt="bed icon"
                className="absolute top-1/2 w-6 left-4 -translate-y-1/2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <span className="font-medium text-lg">Children</span>
            <div className="relative">
              <select
                name="children"
                id="children"
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="text-black-100 w-32 p-3 pl-14 basis-auto border-none outline-none cursor-pointer"
              >
                {quantities.map((person, i) => (
                  <option
                    value={person.value}
                    className="p-2 text-black-100 hover:bg-white-300"
                    key={i}
                  >
                    {person.quantity}
                  </option>
                ))}
              </select>
              <img
                src={person}
                alt="bed icon"
                className="absolute top-1/2 w-6 left-4 -translate-y-1/2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <span className="font-medium text-lg">Rooms</span>
            <div className="relative">
              <select
                name="room"
                id="room"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="text-black-100 w-32 p-3 pl-14 basis-auto border-none outline-none cursor-pointer"
              >
                {quantities.map((room, i) => (
                  <option
                    value={room.value}
                    className="p-2 text-black-100 hover:bg-white-300"
                    key={i}
                  >
                    {room.quantity}
                  </option>
                ))}
              </select>
              <img
                src={bed}
                alt="bed icon"
                className="absolute top-1/2 w-6 left-4 -translate-y-1/2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium text-lg">Enter your stay time</span>
            <div className="flex justify-between items-center gap-5">
              <Flatpickr
                value={dates}
                onChange={(selectedDates: Date[]) => setDates(selectedDates)}
                options={{
                  mode: "range",
                  altInput: true,
                  altFormat: "F j, Y",
                  dateFormat: "Y-m-d",
                  minDate: "today",
                }}
                className="p-3 border border-gray-300 w-full text-black-100"
                placeholder="Check in - Check out"
              />
              <button
                type="submit"
                className="text-black-400 bg-white-400 hover:bg-white-500 focus:border-black-100 focus:outline-none font-medium px-4 py-3 text-center w-fit duration-200 font-openSans"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
      <section className="flex gap-3 min-w-[1150px]">
        <div className="basis-1/4 bg-black-600 h-fit">
          <div className="">
            <div className="border-b-[1px] border-white-100 p-4">
              <h2 className=" text-white-500 text-2xl font-openSans">
                Filter by :
              </h2>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-openSans mb-4">
                Your budget (per night)
              </h2>
              <PriceRangePicker
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>
          </div>
        </div>
        <div className="basis-3/4">
          {data.map(
            (hotel, i) =>
              hotel.price >= priceRange[0] &&
              hotel.price <= priceRange[1] && (
                <HotelCard
                  img={`https://althaqlain-backend-90833a98168c.herokuapp.com/${hotel.base_image_url}`}
                  heading={hotel.name}
                  location={`${hotel.city} ${hotel.state}, ${hotel.country}`}
                  ratingtext={"lajksfd"}
                  rating={hotel.rating}
                  review="151 reviews"
                  button="Limited-time Deal"
                  subheading="Deluxe Double Room"
                  description={`fjaslk`}
                  span="Breakfast included"
                  days="30 nights, 2 adults"
                  price={hotel?.price?.toString()}
                  disprice="€ 1,105"
                  tax="+€ 103 taxes and charges"
                  avalibltyButton="See Avaliblty "
                  key={i}
                />
              )
          )}
        </div>
      </section>

      <section>
        {/* Nav bar */}
        <div className="mb-12 border-b-[1px] py-3">
          <a
            href="#"
            className="p-4 px-16 duration-200 text-secondary-400 text-lg font-medium hover:bg-white-600 hover:text-black-400"
          >
            Overview
          </a>
          <a
            href="#"
            className="p-4 px-16 duration-200 text-secondary-400 text-lg font-medium hover:bg-white-600 hover:text-black-400"
          >
            Apartment info & price
          </a>
          <a
            href="#"
            className="p-4 px-16 duration-200 text-secondary-400 text-lg font-medium hover:bg-white-600 hover:text-black-400"
          >
            Facilities
          </a>
          <a
            href="#"
            className="p-4 px-16 duration-200 text-secondary-400 text-lg font-medium hover:bg-white-600 hover:text-black-400"
          >
            The fine print
          </a>
          <a
            href="#"
            className="p-4 px-16 duration-200 text-secondary-400 text-lg font-medium hover:bg-white-600 hover:text-black-400"
          >
            Guest reviews
          </a>
        </div>
        {/* header - Section */}
        <Hotel
          heading="High Rise Gold Crest Executive Apartments DHA Lahore"
          location={address}
          address=" Gold crest mall sector DD phase 4 Dha lahore, 54000 Lahore, Pakistan – "
          link=" Excellent location - show map"
          reserve="Reserve your apartement stay"
          price="We Price Match"
          tag={tag}
        />

        <section className="flex gap-2 flex-wrap">
          <Cards heading="Apartments" img={home} />
          <Cards heading="Breakfast" img={mug} />
          <Cards heading="Balcony" img={mug} />
          <Cards heading="Restaurant" img={resturant} />
          <Cards heading="Free on-site parking" img={parking} />
          <Cards heading="Free WiFi" img={wifi} />
          <Cards heading="Private bathroom" img={bath} />
          <Cards heading="Airport shuttle" img={airpot} />
          <Cards heading="View" img={eye} />
          <Cards heading="Room service" img={service} />
        </section>

        <Deatails />

        <div>
          <h2 className="font-semibold text-2xl text-secondary-400 font-openSans mb-6">
            Most popular facilities
          </h2>

          <div className="flex gap-2 flex-wrap">
            <Cards heading="Breakfast" img={mug} />
            <Cards heading="Free on-site parking" img={parking} />
            <Cards heading="Free WiFi" img={wifi} />
            <Cards heading="Airport shuttle" img={airpot} />
            <Cards heading="Room service" img={service} />
          </div>
        </div>
      </section>
    </>
  );
}

function Hotel(_props: {
  location: string;
  heading: string;
  address: string;
  link: string;
  reserve: string;
  tag: string;
  price: string;
}) {
  return (
    <>
      <div>
        <div className="flex gap-2 items-center mb-8">
          <div className="basis-3/4">
            <div>
              <h2 className="text-secondary-400 mb-4 text-2xl font-semibold font-openSans">
                {_props.heading}
              </h2>
              <div className="flex gap-2">
                <img
                  src={_props.location}
                  alt="location"
                  className="w-6 cursor-pointer"
                />
                <p className="text-base">
                  {_props.address}
                  <a href="#" className="text-base text-secondary-400">
                    {_props.link}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/4">
            <a
              href="#"
              className="bg-secondary-500 font-semibold py-4 px-8 duration-200 hover:bg-secondary-600"
            >
              {_props.reserve}
            </a>
            <div className="flex item-center gap-3 mt-8 float-right mx-6">
              <img src={_props.tag} className="w-6 " alt="tag" />
              <a href="#">{_props.price}</a>
            </div>
          </div>
        </div>
        <div className="flex gap-3 cursor-pointer">
          <div className="basis-3/4">
            <div className="flex gap-2">
              <div className="flex gap-2 flex-col mb-4">
                <img
                  src="src/assets/hotels/hotel-1.jpg"
                  alt="hotel-1"
                  className="max-h-40"
                />
                <img
                  src="src/assets/hotels/hotel-2.jpg"
                  alt="hotel-2"
                  className="max-h-40"
                />
              </div>
              <div>
                <img
                  src="src/assets/hotels/base.jpg"
                  alt="base"
                  className="max-w-xl"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <img
                src="src/assets/hotels/hotel-3.jpg"
                alt="hotels"
                className="max-h-24"
              />
              <img
                src="src/assets/hotels/hotel-6.jpg"
                alt="hotels"
                className="max-h-24"
              />
              <img
                src="src/assets/hotels/hotel-4.jpg"
                alt="hotels"
                className="max-h-24"
              />
              <img
                src="src/assets/hotels/hotel-5.jpg"
                alt="hotels"
                className="max-h-24"
              />
              <img
                src="src/assets/hotels/hotel-6.jpg"
                alt="hotels"
                className="max-h-24"
              />
            </div>
          </div>
          <div className="basis-1/4">
            <div className="border rounded mb-4">
              <div className="border-b-[1px] p-4 flex items-center justify-between">
                <h3 className=" text-secondary-400 text-lg font-semibold font-openSans">
                  Exceptional
                </h3>
                <div className="flex gap-2 items-center">
                  <a href="#" className="text-sm text-white-300">
                    7 reviews
                  </a>
                  <a
                    href="#"
                    className="p-1 px-2 rounded bg-secondary-400 text-white-500"
                  >
                    10
                  </a>
                </div>
              </div>
              <div className="p-4 border-b-[1px]">
                <p className="text-sm text-white-300 mb-6">
                  “I recently stayed at this Apartment and had a fantastic
                  experience! The place was really nice and the staff was
                  incredibly friendly. They went...”
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex gap-3 items-center">
                    <img
                      src="src/assets/hotels/trust.jpg"
                      alt="trust"
                      className="w-6 rounded-2xl"
                    />
                    <p>Mesh</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img
                      src="src/assets/hotels/Pk.png"
                      alt="trust"
                      className="w-4"
                    />
                    <p>Pakistan</p>
                  </div>
                </div>
              </div>
              <div className=" p-2 flex items-center justify-between">
                <h3 className=" text-secondary-400 text-lg font-semibold font-openSans">
                  Staff
                </h3>

                <a
                  href="#"
                  className="p-1 px-2 rounded bg-secondary-400 text-white-500"
                >
                  10
                </a>
              </div>
            </div>
            <div>
              <iframe
                className="max-h-72"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Cards(_props: { img: string; heading: string }) {
  return (
    <>
      <div className="flex border border-gray-500 rounded gap-6 py-4 px-8  items-center">
        <div>
          <img src={_props.img} alt="img" className="w-6 cursor-pointer" />
        </div>

        <p className="text-secondary-400 text-xl">{_props.heading}</p>
      </div>
    </>
  );
}

function Deatails() {
  return (
    <>
      <div className="flex gap-10 -mt-28">
        <div className="basis-3/4">
          <p className="mb-4 text-white-200 text-base">
            You're eligible for a Genius discount at Gold Crest Presidential
            Apartments DHA Lahore Phase 4! To save at this property, all you
            have to do is sign in.
          </p>
          <p className="mb-4 text-white-200 text-base">
            Featuring garden views, Gold Crest Presidential Apartments DHA
            Lahore Phase 4 features accommodation with terrace, around 29 km
            from Wagah Border. Among the facilities of this property are a
            restaurant, a 24-hour front desk and a lift, along with free WiFi
            throughout the property. There is free private parking and the
            property offers paid airport shuttle service.
          </p>
          <p className="mb-4 text-white-200 text-base">
            The units at the apartment complex come with air conditioning, a
            seating area, a flat-screen TV with streaming services, a kitchen, a
            dining area, a safety deposit box and a private bathroom with a hot
            tub, bathrobes and slippers. A dishwasher, an oven and microwave are
            also featured, as well as a coffee machine and a kettle. At the
            apartment complex, the units are fitted with bed linen and towels.
          </p>
          <p className="mb-4 text-white-200 text-base">
            À la carte and continental breakfast options with warm dishes, local
            specialities and fresh pastries are available every morning at the
            apartment. There is a coffee shop, and packed lunches are also
            available.
          </p>
          <p className="mb-4 text-white-200 text-base">
            A baby safety gate is also available for guests at Gold Crest
            Presidential Apartments DHA Lahore Phase 4.
          </p>
          <p className="mb-4 text-white-200 text-base">
            Packages Mall is 5 km from the accommodation, while Gaddafi Stadium
            is 11 km away. The nearest airport is Allama Iqbal International
            Airport, 7 km from Gold Crest Presidential Apartments DHA Lahore
            Phase 4.
          </p>
        </div>
        <div className="basis-1/4 bg-black-700 px-6 py-4  rounded">
          <h2 className="text-2xl text-secondary-400 mb-6 font-openSans">
            Property highlights
          </h2>
          <h3 className="text-base font-semibold text-secondary-400 mb-4 font-openSans">
            Perfect for a 12-night stay!
          </h3>

          <p className="text-white-200 text-sm mb-4">
            Top location: Highly rated by recent guests (10.0)
          </p>

          <h3 className="text-base font-semibold text-secondary-400 mb-3 font-openSans">
            Breakfast info
          </h3>

          <p className="text-white-200 text-sm mb-4">
            Continental, Italian, Halal
          </p>

          <h3 className="text-base font-semibold text-secondary-400 mb-3 font-openSans">
            Apartments with:
          </h3>

          <div className="mb-6">
            <div className="flex items-center gap-4 mb-2">
              <img src={service} alt="Room Service" className="w-4" />
              <p className="text-white-200">Room Service</p>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <img src={mug} alt="Breakfast" className="w-4" />
              <p className="text-white-200">Breakfast</p>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <img src={wifi} alt="Wifi" className="w-4" />
              <p className="text-white-200">Wifi</p>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <img src={resturant} alt="Restaurant" className="w-4" />
              <p className="text-white-200">Restaurant</p>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <img src={bath} alt="Private bathroom" className="w-4" />
              <p className="text-white-200">Private bathroom</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#"
              className="bg-secondary-600 block py-2 rounded text-lg font-semibold delay-200 hover:bg-secondary-400 hover:text-black-400"
            >
              Reserve
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

const PriceRangePicker = (_props: {
  priceRange: number[];
  setPriceRange: Dispatch<SetStateAction<number[]>>;
}) => {
  const values = _props.priceRange;
  return (
    <div className="flex flex-col items-center ">
      <Range
        values={values}
        step={5}
        min={MIN}
        max={MAX}
        onChange={(values) => _props.setPriceRange(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="w-full h-2 my-4 rounded-md"
            style={{
              background: getTrackBackground({
                values,
                colors: ["#ccc", "#CCA700", "#ccc"],
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div
            {...props}
            key={index}
            className="w-6 h-6 bg-secondary-400 rounded-full flex justify-center items-center"
          />
        )}
      />
      <div className="flex justify-between w-full mt-4">
        <div>
          <span className="text-sm">Min: </span>
          <span className="font-semibold">{values[0]}</span>
        </div>
        <div>
          <span className="text-sm">Max: </span>
          <span className="font-semibold">{values[1]}</span>
        </div>
      </div>
    </div>
  );
};

function HotelCard(_props: {
  img: string;
  heading: string;
  location: string;
  ratingtext: string;
  review: string;
  rating: string;
  button: string;
  subheading: string;
  description: string;
  span: string;
  days: string;
  disprice: string;
  price: string;
  tax: string;
  avalibltyButton: string;
}) {
  const ratingText =
    _props.rating >= "5"
      ? "Excilent"
      : _props.rating >= "4"
      ? "Very Good"
      : _props.rating >= "3"
      ? "Good"
      : _props.rating >= "2"
      ? "Not Bad"
      : "Bad";

  return (
    <>
      <div className="flex gap-4 p-4 border border-gray-200 bg-black-200 mb-5">
        <div className="basis-1/3">
          <img
            src={_props.img}
            alt="hotel"
            className="rounded min-h-full min-w-full"
          />
        </div>
        <div className="basis-2/3">
          <div className="flex justify-between mb-6 gap-2 ">
            <div>
              <h2 className="text-2xl font-openSans font-semibold mb-2">
                {_props.heading}
              </h2>
              <p className="mb-3">
                <a href="#">{_props.location}</a>
              </p>
              <p className="bg-secondary-600 py-1 px-2 font-semibold text-sm w-fit">
                {_props.button}
              </p>
            </div>
            <div className="flex items-start justify-center gap-2">
              <div className="flex flex-col">
                <p className="text-white-400">{ratingText}</p>
                <p className="text-sm text-white-200">{_props.review}</p>
              </div>
              <div className="p-2 text-xl rounded bg-secondary-500 text-white-500">
                {_props.rating}
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white-400 mb-1">
                {_props.subheading}
              </h3>
              <p className="text-md text-white-400 mb-5">
                {_props.description}
              </p>
              <ul className="grid grid-cols-2 gap-3">
                <li className="text-sm text-secondary-100">{_props.span}</li>
                <li className="text-sm text-secondary-100">{_props.span}</li>
                <li className="text-sm text-secondary-100">{_props.span}</li>
              </ul>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm mb-2">{_props.days}</p>
              <div className="flex gap-2  items-center">
                <s className="text-red-700">
                  <span className="text-sm text-red-700">
                    {_props.disprice}
                  </span>
                </s>
                <button className=" text-white-500 text-2xl">
                  {_props.price}
                </button>
              </div>
              <p className="text-sm text-center mb-6">{_props.tax}</p>
              <a href="#" className="bg-secondary-400 p-2 px-4 font-semibold">
                {_props.avalibltyButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
