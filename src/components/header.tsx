export function Header(_props: { heading: string; img: string }) {
  return (
    <>
      <div
        className={`bg-${_props.img} mb-32 h-[40vh] bg-no-repeat bg-center bg-cover text-center`}
      >
        <h1 className=" text-7xl pt-28 text-secondary-400 flex justify-center ">
          {_props.heading}
        </h1>
      </div>
    </>
  );
}
