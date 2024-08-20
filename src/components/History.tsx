export function History(_props: { heading: string; Paragraph: string }) {
  return (
    <section className="-mt-24 ">
      <h2 className="text-6xl text-white-400 mb-28">{_props.heading}</h2>
      <p className="text-white-200 mb-12 leading-normal text-lg  ">
        {_props.Paragraph}
      </p>
    </section>
  );
}
