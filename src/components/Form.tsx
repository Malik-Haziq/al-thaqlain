import { useState, ChangeEvent, FormEvent } from "react";
import location from "../assets/contact/location.svg";
import phone from "../assets/contact/phone.svg";
import { FormData } from "../types";
import { Module } from "./Module";
import axios from "axios";

const initialState: FormData = {
  full_name: "",
  email: "",
  message: "",
};

export function Form() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors: FormData = {
      full_name: "",
      email: "",
      message: "",
    };

    if (!formData.full_name.trim()) {
      newErrors.full_name = "Please enter your full name";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  async function submitData() {
    setIsLoading(true);

    try {
      await axios.post(
        "https://althaqlain-backend-90833a98168c.herokuapp.com/api/contact",
        {
          contact: {
            formData,
          },
        }
      );
    } catch (error: any) {
      if (error.response) {
        setSubmitError(error.response.data.message || "Failed to subscribe.");
      } else {
        setSubmitError("An error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
      handleModalOpen();
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      submitData();
      setFormData(initialState);
      setErrors(initialState);
    }
  };

  return (
    <>
      <section className="bg-gray-300 flex gap-4 flex-col sm:flex-row mb-16 p-0">
        <form
          action="#"
          className="basis-11/12 px-6 py-8"
          onSubmit={handleSubmit}
        >
          <h3 className="text-3xl text-black-100 mdx:text-4xl mb-9 font-medium uppercase">
            Send Us Message
          </h3>
          <div className="flex justify-start flex-col mdx:flex-row items-stretch mdx:items-center gap-4 mb-7">
            <label className="flex flex-col gap-2 mdx:basis-1/2">
              <span className="text-lg text-gray-200">Full Name</span>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="John"
                className={`p-3 outline-none rounded-none border-2 placeholder:text-gray-200 ${
                  errors.full_name ? "border-red-500" : "border-white-100"
                } bg-black-500 focus:border-white-300`}
              />
              {errors.full_name && (
                <span className="text-red-500 text-sm">{errors.full_name}</span>
              )}
            </label>
            <label className="flex flex-col gap-2 mdx:basis-1/2">
              <span className="text-gray-200">Email</span>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@gmail.com"
                className={`p-3 outline-none rounded-none border-2 placeholder:text-gray-200 ${
                  errors.email ? "border-red-500" : "border-white-100"
                } bg-black-500 focus:border-white-300`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </label>
          </div>
          <div className="mb-6">
            <label className="flex flex-col gap-4">
              <span className="text-gray-200">Message</span>
              <textarea
                name="message"
                cols={30}
                rows={10}
                value={formData.message}
                onChange={handleChange}
                className={`p-3 outline-none rounded-none border-2 placeholder:text-gray-200 ${
                  errors.message ? "border-red-500" : "border-white-100"
                } bg-black-500 focus:border-white-300`}
                placeholder="Enter your message here"
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message}</span>
              )}
            </label>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="
              text-white-100
              bg-header-100
              hover:bg-white-500
              rounded
              border-2
              border-header-100
              hover:border-white-100
              focus:border-black-100
              hover:text-black-100
              focus:outline-none
              text-lg
              font-medium
              px-4
              py-2
              text-center
              w-fit
              duration-200
              font-openSans
            "
          >
            Submit
          </button>
        </form>
        <div className="basis-auto px-6 py-8 bg-secondary-200">
          <h4 className="text-3xl mdx:text-4xl mb-9 font-medium uppercase">
            Contact Information
          </h4>
          <div className="flex items-start gap-2 mb-4">
            <img src={location} alt="location icon" className="w-8" />
            <div className="flex flex-col">
              <h5 className="uppercase font-medium text-xl">IRAQ</h5>
              <p>
                Office NO. (A15/2-3) Al-Madeena al Maiya , Center jabal Aamil
                Uposit Haye al- Adalaa ,Najaf Al Ashraf-IRAQ.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 mb-4">
            <img src={location} alt="location icon" className="w-8" />
            <div className="flex flex-col">
              <h5 className="uppercase font-medium text-xl">PAKISTAN</h5>
              <p>Office No. 10-G, Irshad Arched,Aabpara Market, Islamabad</p>
            </div>
          </div>
          <div className="flex items-start gap-2 mb-8">
            <img src={location} alt="location icon" className="w-8" />
            <div className="flex flex-col">
              <h5 className="uppercase font-medium text-xl">USA</h5>
              <p>10218 Warren Ave Dearborn, MI 48126</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-4 ml-1">
            <img src={phone} alt="phone icon" className="w-6 mt-1" />
            <div className="flex flex-col gap-2 items-start justify-start">
              <h5 className="uppercase font-medium text-xl">Phone Numbers</h5>
              <ul className="text-lg font-medium">
                <li>
                  <a href="callto:+13134155319">+1 313 415 5319</a>
                </li>
                <li>
                  <a href="callto:+923349921302">+92 334 9921302</a>
                </li>
                <li>
                  <a href="callto:+9647809970416">+964 780 9970416</a>
                </li>
                <li>
                  <a href="callto:+9647737940863">+964 773 794 0863</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <Module
          heading={
            submitError ? "Please try again" : "Thanks for Submitting form."
          }
          para={
            submitError ||
            "Your form has been submitted. We will get back to you as soon as possible."
          }
          button="Close"
          onModalOpen={handleModalOpen}
          isModalOpen={isModalOpen}
        />
      )}
    </>
  );
}
