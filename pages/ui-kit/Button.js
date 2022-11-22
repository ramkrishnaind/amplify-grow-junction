import React from "react";
import Loader from "./Loader";
const Button = (props) => {
  const {
    label,
    handleSubmit = () => {},
    styleOverride,
    disable,
    loader = false,
    ...rest
  } = props;

  return (
    <button
      type="submit"
      className="group relative flex w-full justify-center  items-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      style={styleOverride}
      {...rest}
    >
      {loader ? <Loader /> : label}
    </button>
  );
};
export default Button;
