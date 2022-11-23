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
    phoneNumber = false,
    textStyleOverride,
    infoMsg,
    ...rest
  } = props;

  return (
    <div className="mb-5 flex-1" style={{}}>
      <label
        htmlFor="email-address"
        style={{
          color: color.blackVariant,
          fontSize: 14,
          fontWeight: 400,
          marginBottom: 8,
        }}
      >
        {label}
      </label>
      <div
        className="focus-outline mr-5  p-4  w-full flex flex-row rounded-md border border-gray-300 px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        style={{ ...styleOverride }}
      >
        {phoneNumber ? (
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: color.lightGrey,
                marginLeft: 10,
                marginRight: 10,
                fontSize: 14,
              }}
            >
              +91
            </div>
            <div
              style={{
                color: color.lightGrey,
                marginLeft: 10,
                marginRight: 20,
                fontSize: 14,
              }}
            >
              |
            </div>
          </div>
        ) : null}
        <input
          id={id}
          name={name}
          type={type}
          required
          disabled={disabled}
          style={{
            backgroundColor: color.headerColor,
            fontSize: 14,
            ...textStyleOverride,
          }}
          value={value}
          onChange={(text) => {
            onChangeValue(text);
          }}
          st
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
      ) : (
        <div
          style={{
            //   position: 'absolute',
            //paddingTop: 35,
            fontSize: 12,
            color: color.blue,
          }}
        >
          {infoMsg}
        </div>
      )}
    </div>
  );
};
export default TextField;
