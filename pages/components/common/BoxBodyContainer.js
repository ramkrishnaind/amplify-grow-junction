import React from "react";
import { color } from "../../../public/theme/Color";

const BoxBodyContainer = (props) => {
  const { body, styleOverride } = props;
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100%",
        width: "100%",
        position: "absolute",
        bottom: "auto",
        flexDirection: "column",
        flex: 1,
        backgroundColor: color.white,
        padding: 100,
        alignItems: "stretch",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flex: 1,
          backgroundColor: color.headerColor,
          flexDirection: "column",
          ...styleOverride,
        }}
      >
        {body}
      </div>
    </div>
  );
};
export default BoxBodyContainer;
