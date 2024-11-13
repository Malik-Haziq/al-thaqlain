// import { useState } from "react";
import dummy from "..//assets/Transportation/register/dummy-image.jpg";

export function RegistrationForm(_props: {
  baseImg: string;
  heading: string;
  subheading: string;
  subdiscription: string;
  discription: string;
  date: string;
  ADdate: string;
}) {
  return (
    <section className="p-4">
      <div className="container border rounded p-6 flex flex-col lg:flex-row gap-6 lg:gap-9 mb-6 bg-gray-500 text-black-200">
        <div className="flex-shrink-0">
          <img
            src={_props.baseImg}
            alt="baseImg"
            className="w-full lg:max-w-xs"
          />
        </div>
        <div className="flex flex-col">
          <div className="header flex flex-col sm:flex-row justify-between mb-4 sm:mb-8">
            <h1 className="text-xl lg:text-2xl font-openSans">
              {_props.heading}
            </h1>
            <div>
              <p className="text-xs sm:text-sm mb-2">
                {_props.date}{" "}
                <span className="font-semibold mx-2 text-black-100">
                  Travel Date:
                </span>{" "}
                ( Solar )
              </p>
              <p className="text-xs sm:text-sm">{_props.ADdate} (AD)</p>
            </div>
          </div>
          <p className="text-sm sm:text-md mb-4 lg:mb-6 leading-normal">
            {_props.discription}
          </p>
        </div>
      </div>

      <div className="border rounded p-6 sm:p-8 mb-6 bg-gray-500 text-black-200">
        <h2 className="text-lg sm:text-xl mb-4 sm:mb-8 font-openSans">
          {_props.subheading}
        </h2>
        <div className="flex gap-3 sm:gap-5 items-center">
          <input type="checkbox" />
          <p className="text-sm sm:text-md">{_props.subdiscription}</p>
        </div>
      </div>

      <form>
        <div className="border rounded p-6 sm:p-8 mb-6 bg-gray-500 text-black-200">
          <div className="flex flex-wrap gap-5 sm:gap-7 mb-8">
            {/* Input fields */}
            <div className="flex flex-col gap-2 sm:gap-5 flex-grow min-w-[calc(50%-1rem)]">
              <label htmlFor="Name" className="font-normal">
                Name
              </label>
              <input
                type="text"
                className="border rounded bg-transparent focus:border-white-200"
                required
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-5 flex-grow min-w-[calc(50%-1rem)]">
              <label htmlFor="Last Name" className="font-normal">
                Last Name
              </label>
              <input
                type="text"
                className="border rounded bg-transparent"
                required
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-5 flex-grow min-w-[calc(50%-1rem)]">
              <label htmlFor="Passport number" className="font-normal">
                Passport Number
              </label>
              <input
                type="text"
                className="border rounded bg-transparent"
                required
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-5 flex-grow min-w-[calc(50%-1rem)]">
              <label htmlFor="Phone number" className="font-normal">
                Phone Number
              </label>
              <input
                type="text"
                className="border rounded bg-transparent"
                required
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center">
            {/* Passport Picture Upload */}
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <h2 className="text-sm sm:text-base font-openSans font-medium">
                Passport Picture
              </h2>
              <div className="flex items-center gap-3">
                <img
                  src={dummy}
                  alt="dummy"
                  className="w-10 sm:w-12 rounded-full"
                />
                <label className="flex items-center bg-blue-800 text-white py-2 px-1 rounded cursor-pointer hover:bg-blue-700">
                  <input type="file" name="passportImg" className="hidden" />
                  Choose File
                </label>
                <span className="text-sm">No file chosen</span>
              </div>
            </div>

            {/* Personal Picture Upload */}
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <h2 className="text-sm sm:text-base font-openSans font-medium">
                Personal Picture
              </h2>
              <div className="flex items-center gap-3">
                <img
                  src={dummy}
                  alt="dummy"
                  className="w-10 sm:w-12 rounded-full"
                />
                <label className="flex items-center bg-blue-800 text-white py-2 px-1 rounded cursor-pointer hover:bg-blue-700">
                  <input type="file" name="personalImg" className="hidden" />
                  Choose File
                </label>
                <span className="text-sm">No file chosen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 items-center">
          <a
            href="#"
            className="border-secondary-100 border py-2 px-4 rounded text-lg bg-secondary-100 text-white-100 font-semibold duration-200 hover:bg-white-200 hover:border-black-100" 
          >
            Registration
          </a>
          <a
            href="#"
            className="border py-2 px-4 rounded text-black-200 text-lg font-semibold duration-200 hover:text-white-100 hover:bg-secondary-100 hover:border-secondary-100"
          >
            Return
          </a>
        </div>
      </form>
    </section>
  );
}
