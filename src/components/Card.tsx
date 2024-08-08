export function Card(_props: {
  img: string;
  heading: string;
  para: string;
  button: string;
}) {
  return (
    <>
      <div className="card w-80 border rounded-lg flex flex-col gap-6">
        <img
          src={_props.img}
          className="w-80 rounded-tl-lg rounded-tr-lg"
          alt="image"
        />
        <div className="px-4 relative pb-28">
          <div>
            <h1 className="text-2xl font-openSans mb-4">{_props.heading}</h1>
            <p className="text-sm">{_props.para}</p>
          </div>
        <div className="mt-12 mb-8 absolute top-56">
            <a
              href="#"
              className="border p-3 pr-6 pl-6 rounded  hover:bg-black-100"
            >
              {_props.button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
