import Image from "next/image";
import React from "react";
import { color } from "../../../public/theme/Color";
import useWindowDimensions from "../../../public/utils/useWindowDimensions";

const KYC_header = (props) => {
  const { stepImage } = props;
  const { width, height } = useWindowDimensions();

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        marginTop: 60,
      }}
    >
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
  );
};
export default KYC_header;
