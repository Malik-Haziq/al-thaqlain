import { Link } from "react-router-dom";

export function Button(_props: { text: string; to: string }) {
  return (
    <>
      <Link
        to={_props.to}
        type="button"
        className={
          "text-white-400 hover:bg-secondary-500 border-2 border-secondary-500 focus:outline-none text-lg px-4 py-2 text-center w-fit duration-150 font-openSans"
        }
      >
        {_props.text}
      </Link>
    </>
  );
}
