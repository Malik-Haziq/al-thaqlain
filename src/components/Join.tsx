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
    <div className="bg-secondary-100 text-white-100">
      <section className="flex items-center justify-center flex-col py-14">
        <div className="mb-12 flex items-center justify-center flex-col text-center gap-4">
          <h2>Join our newsletter</h2>
          <p>
            Sign up for our newsletter to receive the latest travel deals, tips,
            and news straight to your inbox.
          </p>
        </div>
        <form
          action="submit"
          className="flex gap-3 p-2 bg-white-100"
          onSubmit={handleSubmit}
        >
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
            placeholder="example@example.com"
            className="sm:w-96 p-3 px-7 border-none outline-none text-gray-600 bg-white placeholder:text-black-100"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="py-3 px-6  text-white-100 font-medium bg-secondary-100 hover:bg-white-200"
            style={{
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          >
            Subscribe
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
