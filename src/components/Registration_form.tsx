import { useEffect, useState } from "react";
import dummy from "..//assets/Transportation/register/dummy-image.jpg";
import { RegisterFormData } from "../types";

const initialState: RegisterFormData = {
  name: '',
  lastName: '',
  passportNumber: '',
  phoneNumber: 0,
  passportImage: '',
  personalImage: '',
  termAndConditions: false
}

export function RegistrationForm(_props: {
  baseImg: string;
  heading: string;
  subheading: string;
  subdiscription: string;
  discription: string;
  date: string;
  ADdate: string;
}) {
  const [formData, setFormData] = useState(initialState)

  // const handleChange = (e: )=>[
  useEffect(()=>{
    console.log(formData)
  }, [formData])
  return (
    <>
      <section>
        <div className="container border rounded p-8 flex gap-9 mb-6">
          <div>
            <img src={_props.baseImg} alt="baseImg" className="max-w-xs" />
          </div>
          <div>
            <div className="header flex justify-between mb-8">
              <div>
                <h1 className="text-2xl font-openSans">{_props.heading}</h1>
              </div>
              <div>
                <p className="text-sm mb-3">
                  {_props.date}{" "}
                  <span className="font-semibold mx-2 text-md text-white-100">
                    Travel Date :{" "}
                  </span>{" "}
                  ( Solar )
                </p>
                <p className="text-sm">{_props.ADdate} (AD)</p>
              </div>
            </div>
            <p className="text-md mb-6 leading-normal">{_props.discription}</p>
          </div>
        </div>
        <div className="border rounded p-8 mb-6">
          <h2 className="text-xl mb-8 font-openSans">{_props.subheading}</h2>
          <div className="flex gap-5 items-center">
            <input type="checkbox" />
            <p className="text-md">{_props.subdiscription}</p>
          </div>
        </div>
        <div className="border rounded p-8 mb-8">
          <div className="flex gap-7 flex-wrap mb-8">
            <div className="flex flex-col gap-5">
              <label htmlFor="Name" className="font-normal">
                Name
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={(e)=> setFormData({ ...formData, [e.target.name]: e.target.value})}
                className="border rounded bg-transparent focus:border-white-200"
                required
              />
            </div>
            <div className="flex flex-col gap-5">
              <label htmlFor="Last Name" className="font-normal">
                Last <span className="mx-1">name</span>
              </label>
              <input
                type="text"
                className="border rounded bg-transparent "
                required
              />
            </div>
            <div className="flex flex-col gap-5">
              <label htmlFor="Passport number" className="font-normal">
                Passport <span className="mx-1">Number</span>
              </label>
              <input
                type="text"
                className="border rounded bg-transparent "
                required
              />
            </div>
            <div className="flex flex-col gap-5">
              <label htmlFor="Passport number" className="font-normal">
                Phone <span className="mx-1">Number</span>
              </label>
              <input
                type="text"
                className="border rounded bg-transparent "
                required
              />
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex flex-col gap-6 ">
              <h2 className="text-base font-openSans font-medium">
                Passport <span className="mx-1">Picture</span>
              </h2>
              <div className="flex gap-5 items-center">
                <img src={dummy} alt="dummy" className="w-12 rounded-full" />
                <input type="file" name="selected img" />
              </div>
            </div>
            <div className="flex flex-col gap-6  ">
              <h2 className="text-base font-openSans font-medium">
                Personal <span className="mx-1">Picture</span>
              </h2>
              <div className="flex gap-5 items-center">
                <img src={dummy} alt="dummy" className="w-12 rounded-full" />
                <input type="file" name="selected img" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <a
            href="#"
            className="border py-2 px-4 rounded text-lg bg-white-500 text-black-400 font-semibold"
          >
            Registration
          </a>
          <a
            href="#"
            className="border py-2 px-4 rounded text-lg font-semibold hover:border-white-200 duration-200"
          >
            Return
          </a>
        </div>
      </section>
    </>
  );
}
