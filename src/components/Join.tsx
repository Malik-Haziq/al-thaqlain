import React, { useState, useEffect } from "react";
import axios from "axios";

export function Join() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error, success]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError(null);
    setSuccess(null);
    setEmail("");
    setIsLoading(true);

    try {
      await axios.post(
        "https://althaqlain-backend-90833a98168c.herokuapp.com/api/subscribe",
        { name: "test", email: email }
      );

      setSuccess("Successfully subscribed!");
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.message || "Failed to subscribe.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-secondary-200 text-white-500">
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
            className="sm:w-96 p-3 outline-none text-black-100 rounded-none bg-white-500 border-2 focus:border-white-100"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="py-3 px-5 outline-none rounded-none bg-white-500 border-2 border-l-0 focus:border-white-100 text-black-300 font-medium"
          >
            Submit
          </button>
        </form>
        {error && <p className="text-white-500 mt-4">{error}</p>}
        {success && <p className="text-white-500 mt-4">{success}</p>}
      </section>
    </div>
  );
}
