import { useState, ChangeEvent, FormEvent } from "react";
import location from "../assets/contact/location.svg";
import phone from "../assets/contact/phone.svg";

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

interface FormErrors {
  fullName: string;
  email: string;
  message: string;
}

export function Form(_props: { onModalOpen(): () => void }) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors: FormErrors = {
      fullName: "",
      email: "",
      message: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      _props.onModalOpen();

      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
      setErrors({
        fullName: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <>
      <section className="bg-black-100 flex gap-4 flex-col sm:flex-row mb-16 p-0">
        <form
          action="#"
          className="basis-11/12 px-6 py-8"
          onSubmit={handleSubmit}
        >
          <h3 className="text-3xl mdx:text-4xl mb-9 font-medium uppercase">
            Send Us Message
          </h3>
          <div className="flex justify-start flex-col mdx:flex-row items-stretch mdx:items-center gap-4 mb-7">
            <label className="flex flex-col gap-2 mdx:basis-1/2">
              <span className="text-lg">Full Name</span>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="John"
                className={`p-3 outline-none rounded-none border-2 ${
                  errors.fullName ? "border-red-500" : "border-white-100"
                } bg-black-500 focus:border-white-300`}
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm">{errors.fullName}</span>
              )}
            </label>
            <label className="flex flex-col gap-2 mdx:basis-1/2">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@gmail.com"
                className={`p-3 outline-none rounded-none border-2 ${
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
              <span>Message</span>
              <textarea
                name="message"
                cols={30}
                rows={10}
                value={formData.message}
                onChange={handleChange}
                className={`p-3 outline-none rounded-none border-2 ${
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
            className="
              text-black-400
              bg-white-400
              hover:bg-white-500
              border-2
              border-white-500
              focus:border-black-100
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
            onClick={(e) => {
              e.preventDefault();
              _props.onModalOpen();
            }}
          >
            Submit
          </button>
        </form>
        <div className="basis-auto px-6 py-8 bg-secondary-600">
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
    </>
  );
}
