import { useState, useEffect, SetStateAction, Dispatch } from "react";
import type { Hotel } from "../../types";
import axios from "axios";
import { Header } from "../../components/header";
import { places, quantities } from "../../data";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { Range, getTrackBackground } from "react-range";

import location from "../../assets/hotels/icons/location.png";
import bed from "../../assets/hotels/icons/bed.svg";
import person from "../../assets/hotels/icons/person.svg";
import chevron from "../../assets/hotels/icons/chevron.svg";
import { Link } from "react-router-dom";

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
    loc_lat: 0,
    loc_long: 0,
    price: 0,
    discounted_price: 0,
    rating: "",
    state: "",
    bed: 0,
    living_room: 0,
    bathroom: 0,
    kitchen: 0,
    reservedRoom: 0,
    description: "",
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
      <section className="bg-black-100">
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
            (hotel) =>
              hotel.discounted_price >= priceRange[0] &&
              hotel.discounted_price <= priceRange[1] && (
                <HotelCard
                  id={hotel.id}
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
                  discountedPrice={hotel?.discounted_price}
                  tax="+€ 103 taxes and charges"
                  avalibltyButton="See Avaliblty"
                  bed={hotel.bed}
                  livingRoom={hotel.living_room}
                  kitchen={hotel.kitchen}
                  bathroom={hotel.bathroom}
                  key={hotel.id}
                  disprice={""}
                  reservedRoom={0}
                />
              )
          )}
        </div>
      </section>
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
                colors: ["#ccc", "#c10005", "#ccc"],
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
  id: string;
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
  discountedPrice: number;
  tax: string;
  avalibltyButton: string;
  bed: number;
  livingRoom: number;
  bathroom: number;
  kitchen: number;
  reservedRoom: number;
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
          <Link to={`/hotel/${_props.id}`}>
            <img
              src={_props.img}
              alt="hotel"
              className="rounded min-h-full min-w-full"
            />
          </Link>
        </div>
        <div className="basis-2/3">
          <div className="flex justify-between mb-6 gap-2 ">
            <div>
              <h2 className="text-2xl font-openSans font-semibold mb-2">
                {_props.heading}
              </h2>
              <p className="mb-3">{_props.location}</p>
              <p className="bg-secondary-100 py-1 px-2 font-semibold text-sm w-fit">
                {_props.button}
              </p>
            </div>
            <div className="flex items-start justify-center gap-2">
              <div className="flex flex-col">
                <p className="text-white-400">{ratingText}</p>
                <p className="text-sm text-white-200">{_props.review}</p>
              </div>
              <div className="p-2 text-xl rounded bg-secondary-100 text-white-500">
                {_props.rating}
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <ul className="grid grid-cols-2 gap-3">
                <li className="text-sm text-white-200">
                  {_props?.bed}&nbsp;{_props.bed > 0 ? "bedrooms" : "bedroom"}
                </li>
                <li className="text-sm text-white-200">
                  {_props?.kitchen}&nbsp;
                  {_props.kitchen > 0 ? "kitchens" : "kitchen"}
                </li>
                <li className="text-sm text-white-200">
                  {_props?.livingRoom}&nbsp;
                  {_props.livingRoom > 0 ? "living rooms" : "living room"}
                </li>
                <li className="text-sm text-white-200">
                  {_props?.bathroom}&nbsp;
                  {_props.bathroom > 0 ? "bathrooms" : "bathroom"}
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm mb-2">{_props?.days}</p>
              <div className="flex gap-2  items-center mb-6">
                <s className="text-secondary-400">
                  <span className="text-sm text-secondary-400">
                    {_props.price}&nbsp;PKR
                  </span>
                </s>
                <p className=" text-white-500 text-2xl font-medium">
                  {_props.discountedPrice}&nbsp;PKR
                </p>
              </div>
              <Link
                to={`/hotel/${_props.id}`}
                className="text-white-400 hover:text-black-400 hover:bg-white-500 border-2 border-white-500 focus:outline-none duration-200 text-lg p-2 px-4 font-semibold flex items-center justify-center gap-1"
              >
                <span>{_props.avalibltyButton}</span>
                <img src={chevron} alt="chevron right" className="w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
