import { Link } from "react-router-dom";

export function Button(_props: { text: string; to: string; white : boolean}) {
  return (
    <>
      <Link
        to={_props.to}
        type="button"
        className={
          ` hover:text-black-400 border-2  ${_props.white ? 'border-gray-500 bg-white-100 text-black-100 hover:bg-white-200 hover:text-white-100' : 'border-white-500 hover:bg-white-300'  } focus:outline-none text-lg px-4 py-2 text-center w-fit duration-200 font-openSans font-medium`
        }
      >
        {_props.text}
      </Link>
    </>
  );
}
