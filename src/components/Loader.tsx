import spinner from "../assets/oval.svg";

export function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <img src={spinner} alt="spinner" className="w-10" />
      <p>Loading...</p>
    </div>
  );
}
