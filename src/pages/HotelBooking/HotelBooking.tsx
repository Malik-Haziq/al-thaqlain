import { useState } from "react";

import { Header } from "../../components/header";
import { HotelCard } from "../../components/HotelCard";

import location from "../../assets/hotels/icons/location.png";
import bed from "../../assets/hotels/icons/bed.svg";
import person from "../../assets/hotels/icons/person.svg";

import { places } from "../../data";
import { quantities } from "../../data";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

export function HotelBooking() {
  const [place, setPlace] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [rooms, setRooms] = useState("");
  const [dates, setDates] = useState<Date[]>([]);
  console.log(dates);
  return (
    <>
      <Header heading="Hotels" img={"headerBg"} />
      <section className="bg-secondary-600 -translate-y-40">
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
      <section className="flex gap-3">
        <div className="basis-1/4">
          <div className="border rounded">
            <div className="border-b-2 p-4">
              <h2 className=" text-secondary-400 text-2xl font-openSans">
                Filter By :
              </h2>
            </div>
            <div className="p-4 border-b-2">
              <h2 className="text-lg font-openSans mb-4">
                Your budget (per night)
              </h2>
              <img
                src="src/assets/hotels/candle.jpeg"
                alt="candle"
                className="mb-4"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg text-secondary-400 font-openSans mb-6">
                Popular filters
              </h2>
              <div>
                <div className="flex items-center  justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="outline-none" />
                    <p className="text-white-200">No prepayment</p>
                  </div>
                  <p className="text-white-400 text-sm">110</p>
                </div>
                <div className="flex items-center  justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="outline-none" />
                    <p className="text-white-200">5 Start</p>
                  </div>
                  <p className="text-white-400 text-sm">2</p>
                </div>
                <div className="flex items-center  justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="outline-none" />
                    <p className="text-white-200">
                      Booking without cradit card
                    </p>
                  </div>
                  <p className="text-white-400 text-sm">105</p>
                </div>
                <div className="flex items-center  justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="outline-none" />
                    <p className="text-white-200">Free Wifi</p>
                  </div>
                  <p className="text-white-400 text-sm">88</p>
                </div>
                <div className="flex items-center  justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="outline-none" />
                    <p className="text-white-200">Very Goof : 8+</p>
                  </div>
                  <p className="text-white-400 text-sm">23</p>
                </div>
                <div className="flex items-center  justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="outline-none" />
                    <p className="text-white-200">Apartmenta</p>
                  </div>
                  <p className="text-white-400 text-sm">8</p>
                </div>
                <div className="flex items-center  justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="outline-none" />
                    <p className="text-white-200">Breakfast include</p>
                  </div>
                  <p className="text-white-400 text-sm">38</p>
                </div>
                <div className="flex items-center  justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="outline-none" />
                    <p className="text-white-200">Free Cancelation</p>
                  </div>
                  <p className="text-white-400 text-sm">59</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-3/4">
          <HotelCard
            img="src/assets/hotels/hotel.webp"
            heading="Shelton Boulevard Hotel Lahore"
            location="Lahore, Pakistan"
            ratingtext="Very Good"
            rating={4.8}
            review="151 reviews"
            button="Limited-time Deal"
            subheading="Deluxe Double Room"
            description="1 extra-large double bed"
            span="Breakfast included"
            days="30 nights, 2 adults"
            price="€ 641"
            disprice="€ 1,105"
            tax="+€ 103 taxes and charges"
            avalibltyButton="See Avaliblty "
          />
          <HotelCard
            img="src/assets/hotels/hotel-3.webp"
            heading="Shelton Boulevard Hotel Lahore"
            location="Lahore, Pakistan"
            ratingtext="Very Good"
            rating={4.8}
            review="151 reviews"
            button="Limited-time Deal"
            subheading="Deluxe Double Room"
            description="1 extra-large double bed"
            span="Breakfast included"
            days="30 nights, 2 adults"
            price="€ 641"
            disprice="€ 1,105"
            tax="+€ 103 taxes and charges"
            avalibltyButton="See Avaliblty "
          />
          <HotelCard
            img="src/assets/hotels/hotel-2.webp"
            heading="Shelton Boulevard Hotel Lahore"
            location="Lahore, Pakistan"
            ratingtext="Very Good"
            rating={4.8}
            review="151 reviews"
            button="Limited-time Deal"
            subheading="Deluxe Double Room"
            description="1 extra-large double bed"
            span="Breakfast included"
            days="30 nights, 2 adults"
            price="€ 641"
            disprice="€ 1,105"
            tax="+€ 103 taxes and charges"
            avalibltyButton="See Avaliblty "
          />
          <HotelCard
            img="src/assets/hotels/hotel-1.webp"
            heading="Shelton Boulevard Hotel Lahore"
            location="Lahore, Pakistan"
            ratingtext="Very Good"
            rating={4.8}
            review="151 reviews"
            button="Limited-time Deal"
            subheading="Deluxe Double Room"
            description="1 extra-large double bed"
            span="Breakfast included"
            days="30 nights, 2 adults"
            price="€ 641"
            disprice="€ 1,105"
            tax="+€ 103 taxes and charges"
            avalibltyButton="See Avaliblty "
          />
        </div>
      </section>
    </>
  );
}
