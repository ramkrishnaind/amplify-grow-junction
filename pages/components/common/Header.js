import Image from "next/image";
import React from "react";
import { color } from "../../../public/theme/Color";
import Button from "../../ui-kit/Button";

const Header = (props) => {
  const { btnName, onClickBtn, style } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: color.headerColor,
        alignItems: "center",
        paddingLeft: 48,
        paddingRight: 48,
      }}
    >
      <Image
        src={require("../../../public/assets/icon/logo.png")}
        alt={""}
        style={{ height: 89, width: 224 }}
      />
      <Button
        label={btnName}
        onClick={() => {
          onClickBtn();
        }}
        styleOverride={style}
      />
    </div>
  );
};

export default Header;
