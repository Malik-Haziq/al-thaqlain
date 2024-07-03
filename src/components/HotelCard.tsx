export function HotelCard(_props: {
  img: string;
  heading: string;
  location: string;
  ratingtext: string;
  review: string;
  rating: number;
  button: string;
  subheading: string;
  description: string;
  span: string;
  days: string;
  disprice: string;
  price: string;
  tax: string;
  avalibltyButton: string;
}) {
  return (
    <>
      <div className="flex gap-4 p-4 border mb-5">
        <div className="basis-1/3">
          <img
            src={_props.img}
            alt="hotel"
            className="rounded min-h-full min-w-full"
          />
        </div>
        <div className="basis-2/3">
          <div className="flex flex-wrap justify-between mb-6">
            <div>
              <h2 className="text-2xl font-openSans font-semibold text-secondary-400 mb-2">
                {_props.heading}
              </h2>
              <p className="mb-3">
                <a href="#">{_props.location}</a>
              </p>
              <a href="#" className="bg-secondary-400 p-1 font-medium text-sm">
                {_props.button}
              </a>
            </div>
            <div className="mt-1">
              <p className="text-white-300">{_props.ratingtext}</p>
              <div className="flex gap-2 items-center">
                <a href="#" className="text-sm text-white-200">
                  {_props.review}
                </a>
                <a
                  href="#"
                  className="p-1 px-2 rounded bg-secondary-400 text-white-500"
                >
                  {_props.rating}
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-secondary-400 mb-2">
                {_props.subheading}
              </h3>
              <p className="text-md text-white-400 mb-2">
                {_props.description}
              </p>
              <span className="text-sm text-secondary-400">{_props.span}</span>
            </div>
            <div>
              <p className="text-sm mb-2">{_props.days}</p>
              <div className="flex gap-2  items-center mb-2">
                <s className="text-red-700">
                  <span className="text-sm text-red-700">
                    {_props.disprice}
                  </span>
                </s>
                <button className=" text-white-500 text-2xl">
                  {_props.price}
                </button>
              </div>
              <p className="text-sm mb-2 text-center">{_props.tax}</p>
            </div>
          </div>
          <div className="float-end mb-4">
            <a href="#" className="bg-secondary-400 p-2 px-4 font-semibold">
              {_props.avalibltyButton}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
