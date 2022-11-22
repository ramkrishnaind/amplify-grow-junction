import Image from "next/image";
import React from "react";
import { color } from "../../public/theme/Color";

const TextField = (props) => {
  const {
    label,
    placeholder,
    type,
    id,
    name,
    onChangeValue,
    disabled = false,
    icon,
    styleOverride,
    value,
    errMsg,
    ...rest
  } = props;

  return (
    <div className="mb-5 flex-1" style={{}}>
      <label htmlFor="email-address" style={{ color: color.blackVariant }}>
        {label}
      </label>
      <div
        className="focus-outline mr-5  p-4  w-full flex flex-row rounded-md border border-gray-300 px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        style={{ ...styleOverride }}
      >
        <input
          id={id}
          name={name}
          type={type}
          required
          disabled={disabled}
          style={{ backgroundColor: color.headerColor }}
          value={value}
          onChange={(text) => {
            onChangeValue(text);
          }}
          className="w-full  rounded-md  text-black border-none focus:outline-none "
          placeholder={placeholder}
          {...rest}
        />
        {icon && (
          <Image src={icon} alt="" className="h-5 max-w-full self-center" />
        )}
      </div>
      {errMsg ? (
        <div
          style={{
            //   position: 'absolute',
            //paddingTop: 35,
            fontSize: 12,
            color: "red",
          }}
        >
          {errMsg}
        </div>
      ) : null}
    </div>
  );
};
export default TextField;
