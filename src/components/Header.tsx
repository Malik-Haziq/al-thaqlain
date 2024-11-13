export function Header(_props: { heading: string; img: string }) {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${_props.img})` }}
        className="mb-32 h-[30vh] md:h-[40vh] bg-no-repeat bg-center bg-cover text-center flex items-center justify-center"
      >
        <h1 className="text-4xl md:text-7xl text-black-100">
          {_props.heading}
        </h1>
      </div>
    </>
  );
}
