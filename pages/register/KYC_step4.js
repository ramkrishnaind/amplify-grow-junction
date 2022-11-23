import React, { useEffect, useState } from "react";
import { color } from "../../public/theme/Color";
import BoxBodyContainer from "../components/common/BoxBodyContainer";
import KYC_header from "../components/registration/KYC_header";
import Button from "../ui-kit/Button";
import SkeletonLoader from "../ui-kit/SkeletonLoader";
import * as mutations from "../../src/graphql/mutations";
import * as queries from "../../src/graphql/queries";
import { API, Auth } from "aws-amplify";
import TextField from "../ui-kit/TextField";

import { countryCodeJson } from "../../public/utils/CountryCodeJson";

const numberValidation = new RegExp(/^[0-9]{0,10}$/);
const KYC_step4 = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [loading, setLoading] = useState();
  return (
    <BoxBodyContainer
      styleOverride={{ alignItems: "flex-start" }}
      body={
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <KYC_header
            stepImage={require("../../public/assets/icon/StepIndicator4.png")}
          />
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                flexDirection: "column",
                // alignSelf: "center",
                // backgroundColor: "red",
              }}
            >
              <div style={{ color: color.blackVariant }}>
                Receive updates on whatsapp
              </div>
              <div style={{ color: color.blackVariant }}>
                Add your Whats app number so that you get reminder of session on
                time
              </div>

              <TextField
                label="Whatsapp Number"
                id="number"
                // type="number"
                placeholder="000 000 000"
                value={phoneNumber}
                phoneNumber={true}
                onChangeValue={(text) => {
                  if (numberValidation.test(text.target.value)) {
                    setPhoneNumber(text.target.value);
                  }
                }}
                // errMsg={touched.email && errors.email}
              />
              <Button
                label={"Continue"}
                styleOverride={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 6,
                  paddingBottom: 6,
                  color: color.white,
                  //   borderWidth: 1,
                  //   borderColor: color.blackVariant,
                  borderRadius: 22,
                  height: 43,

                  backgroundColor: color.btnColor,
                  width: 186,
                  marginTop: 70,
                  marginBottom: 48,
                }}
                loader={loading}
                onClick={() => {
                  //   setShowDomainInput(true);
                  //   if (showDomainInput) {
                  //     saveDomainSkills();
                  //   }
                  router.push("/register/KYC_step2");
                }}
              />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default KYC_step4;
