export function RegisterCard(_props: {
  img: string;
  heading: string;
  para: string;
  date: string;
  date1: string;
  date2: string;
  rate: string;
}) {
  return (
    <>
      <div className="card  border flex flex-col gap-6 rounded">
        <div className="basis-3/12">
          <img
            src={_props.img}
            className=" rounded-tl-lg rounded-tr-lg h-72 w-full object-cover"
            alt="image"
          />
        </div>
        <div className="flex justify-between flex-col basis-9/12">
          <div className="pr-4 pl-4">
            <h1 className="text-lg font-openSans mb-6">{_props.heading}</h1>
            <p className="text-sm leading-normal">{_props.para}</p>
            <h2 className="text-white-500 text-lg mt-8 font-openSans font-semibold">
              {_props.date}
            </h2>
            <div className="flex mt-4 justify-between mb-4">
              <p className="font-medium text-sm text-white-200">
                AD :{_props.date1}
              </p>
              <p className="font-medium text-sm text-white-200">
                Date :{_props.date2}
              </p>
            </div>
          </div>
          <div className="flex justify-between bg-white-700 p-6 rounded-b-lg ">
            <div>
              <a
                href="#"
                className="border py-2 px-4 text-white-400 font-semibold border-gray-400 rounded"
              >
                Register
              </a>
            </div>
            <div>
              <p className="text-white-500 text-md">
                <span className="font-medium">Price : </span>
                {_props.rate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
