import { Link } from "react-router-dom";

export function Button(_props: { text: string; to: string }) {
  return (
    <>
      <Link
        to={_props.to}
        type="button"
        className={
          "text-white-400 hover:text-black-400 hover:bg-white-500 border-2 border-white-500 focus:outline-none text-lg px-4 py-2 text-center w-fit duration-200 font-openSans"
        }
      >
        {_props.text}
      </Link>
    </>
  );
}
