import Image from "next/image";
import React from "react";
import { color } from "../../../public/theme/Color";
import useWindowDimensions from "../../../public/utils/useWindowDimensions";

const KYC_header = (props) => {
  const { stepImage } = props;
  const { width, height } = useWindowDimensions();

  return (
    // <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
    <div
      style={{
        display: "flex",
        // flexDirection: 'column',
        // width: 'auto',
        // flexDirection: 'row',
        flex: 1,
        // backgroundColor: "red",
      }}
    >
      {/* <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          // position: 'absolute',
          // marginRight: 157,
        }}> */}
      <Image
        src={require("../../../public/assets/icon/leftArrow.png")}
        alt=""
        style={{
          height: 14,
          width: 16,
          alignSelf: "center",
          marginRight: 12,
          marginLeft: 84,
        }}
      />
      <div
        style={{
          color: color.blackVariant,
          marginRight: 157,
          alignSelf: "center",
        }}
      >
        Go Back
      </div>
      {/* </div> */}
      {/* <div
        style={{
          alignItems: 'center',
          backgroundColor: 'red',
          display: 'flex',
          flex: 1,
        }}> */}

      <Image
        src={stepImage}
        alt=""
        style={{
          height: height / 8,
          width: width / 2.5,
          alignSelf: "center",
        }}
      />
    </div>

    // </div>
    // </div>
  );
};
export default KYC_header;
