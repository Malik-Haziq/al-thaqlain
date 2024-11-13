export function Destination(_props: {
  heading: string;
  Paragraph: string;
  img: string;
  button: string;
}) {
  return (
    <section className="flex gap-24 items-center flex-wrap">
      <div className="basis-1/2">
        <h2 className="text-4xl text-white-100 mb-12">{_props.heading}</h2>
        <p className="text-white-200 mb-12 text-lg leading-normal">
          {_props.Paragraph}
        </p>
        <a
          href="#"
          className="p-3 border-2 font-semibold hover:text-black-400 hover:bg-white-100 duration-75 "
        >
          {_props.button}
        </a>
      </div>
      <img src={_props.img} alt="Destination img" className="h-56" />
    </section>
  );
}
