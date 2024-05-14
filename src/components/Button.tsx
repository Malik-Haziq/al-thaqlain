import { Link } from "react-router-dom";

export function Button(_props: { text: string; to: string; filled?: boolean }) {
  return (
    <>
      <Link
        to={_props.to}
        type="button"
        className={
          _props.filled
            ? "text-white bg-secondary-500 hover:bg-secondary-600 focus:ring-4 focus:outline-none focus:ring-secondary-100 text-lg px-4 py-2 text-center w-fit duration-150 font-openSans"
            : "text-white hover:bg-secondary-500 border-2 border-secondary-500 focus:outline-none text-lg px-4 py-2 text-center w-fit duration-150 font-openSans"
        }
      >
        {_props.text}
      </Link>
    </>
  );
}
