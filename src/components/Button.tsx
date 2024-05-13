export function Button(_props: { text: string }) {
  return (
    <>
      <button
        type="button"
        className="text-white bg-secondary-400 hover:bg-secondary-500 focus:ring-4 focus:outline-none focus:ring-secondary-100 font-medium rounded-md text-lg px-4 py-2 text-center w-fit"
      >
        {_props.text}
      </button>
    </>
  );
}
