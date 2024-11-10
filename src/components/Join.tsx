import React, { useState } from "react";
import axios from "axios";
import { Module } from "./Module";

export function Join() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError(null);
    setEmail("");
    setIsLoading(true);

    try {
      await axios.post(
        "https://althaqlain-backend-90833a98168c.herokuapp.com/api/subscribe",
        { name: "test", email: email }
      );
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.message || "Failed to subscribe.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
      handleModalOpen();
    }
  }

  return (
    <div className="bg-secondary-200 text-white-100">
      <section className="flex items-center justify-center flex-col py-14">
        <div className="mb-16 flex items-center justify-center flex-col text-center gap-4">
          <h2>Join our newsletter</h2>
          <p>
            Sign up for our newsletter to receive the latest travel deals, tips,
            and news straight to your inbox.
          </p>
        </div>
        <form action="submit" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
            placeholder="Enter your email"
            className="sm:w-96 p-3 outline-none placeholder:text-black-200 text-black-100 rounded-none bg-white-500 border-2 focus:border-white-100"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="py-3 px-5 outline-none rounded-none text-white-200 bg-white-500 hover:bg-black-300 hover:text-white-100 border-2 border-l-0 focus:border-white-100 font-medium"
          >
            Submit
          </button>
        </form>

        {isModalOpen && (
          <Module
            heading={
              error ? "Please Try again" : "Thanks for joining our newsletter."
            }
            para={
              error ||
              "You'll receive updates on the latest blog posts, news, and exclusive content."
            }
            button="Close"
            onModalOpen={handleModalOpen}
            isModalOpen={isModalOpen}
          />
        )}
      </section>
    </div>
  );
}
