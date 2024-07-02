import { useState } from "react";

import { Header } from "../../components/header";
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
    </>
  );
}
