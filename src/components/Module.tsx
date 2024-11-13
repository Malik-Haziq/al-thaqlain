import { useEffect } from "react";

export function Module(_props: {
  heading: string;
  para: string;
  button: string;
  onModalOpen: () => void;
  isModalOpen: boolean;
}) {
  useEffect(() => {
    if (_props.isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [_props.isModalOpen]);

  if (!_props.isModalOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-90 z-40"></div>
      <section className="flex justify-center fixed top-10 left-1/4 z-50">
        <div className="p-8 px-12 bg-white-100 rounded w-5/6">
          <h1 className=" text-4xl  text-black-400 mb-6 font-semibold text-center">
            {_props.heading}
          </h1>
          <p className="text-black-300 text-center text-lg mb-8">
            {_props.para}
          </p>
          <div className="flex justify-center">
            <button
              className="bg-black-400 p-3 px-16 font-medium rounded text-lg"
              onClick={_props.onModalOpen}
            >
              {_props.button}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
