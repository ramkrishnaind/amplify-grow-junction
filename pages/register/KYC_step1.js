import { API, Auth } from "aws-amplify";
import { config } from "process";
import React, { useEffect, useState } from "react";
import { color } from "../../public/theme/Color";
import BoxBodyContainer from "../components/common/BoxBodyContainer";

import TextField from "../ui-kit/TextField";
// import {createDemo} from '../../src/graphql/mutations';
import * as mutations from "../../src/graphql/mutations";

import KYC_header from "../components/registration/KYC_header";
import { listDemoSkillsLists, listTodos } from "../../src/graphql/queries";
import Button from "../ui-kit/Button";

Auth.configure(config);
const KYC_step1 = () => {
  const [link, setLink] = useState();
  const [domainList, setdomainList] = useState();
  const [showDomainInput, setShowDomainInput] = useState(false);
  const [domainName, setDomainName] = useState({ value: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCurrentUser = async () => {
      const { username } = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      try {
        const listData = await API.graphql({
          query: listDemoSkillsLists,
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        setdomainList(listData?.data?.listDemoSkillsLists?.items);
      } catch (err) {
        console.log("err", err);
      }
    };
    getCurrentUser();
  }, []);

  const saveDomainSkills = async () => {
    setLoading(true);
    try {
      const data = { value: domainName };
      const postData = await API.graphql({
        query: mutations.createDemoSkillsList,
        variables: { input: domainName },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      console.log("post data", postData);
      showDomainInput(false);
      setLoading(false);
    } catch (e) {
      console.log("e", e);
      setLoading(false);
      showDomainInput(false);
    }
  };

  return (
    <BoxBodyContainer
      styleOverride={{ alignItems: "flex-start" }}
      body={
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            // alignItems: "center",
          }}
        >
          <KYC_header
            stepImage={require("../../public/assets/icon/StepIndicator.png")}
          />
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              //   backgroundColor: "red",
              //   alignSelf: "center",
              //   marginLeft: 351,
              //   marginRight: 351,
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
                Get ready to mentor and share
              </div>
              <div style={{ color: color.blackVariant }}>
                Add some basic details to personalise the experience
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <TextField
                  label="LinkedIn Profile URL"
                  id="url"
                  type="url"
                  placeholder="Paster Linkedin profile URL "
                  value={link}
                  onChangeValue={(text) => {
                    //   if (spaceValidation.test(text.target.value)) {
                    //     setFieldValue(text.target.id, text.target.value);
                    //   }
                  }}
                  // errMsg={touched.email && errors.email}
                />
              </div>
              <div style={{ color: color.blackVariant, marginBottom: 20 }}>
                Domain you want to provide mentorship
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  flex: 1,
                }}
              >
                {domainList?.length ? (
                  <>
                    {domainList?.map((item, index) => {
                      return (
                        <div
                          key={index.toString()}
                          style={{
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 6,
                            paddingBottom: 6,
                            color: color.blackVariant,
                            borderWidth: 1,
                            borderColor: color.blackVariant,
                            borderRadius: 22,
                            marginRight: 10,
                            marginBottom: 20,
                          }}
                        >
                          {item?.value}
                        </div>
                      );
                    })}
                    {showDomainInput && (
                      <input
                        style={{
                          backgroundColor: "transparent",
                          borderRadius: 25,
                          borderWidth: 1,
                          borderColor: color.blackVariant,
                          paddingLeft: 20,
                          color: color.blackVariant,
                          marginRight: 10,
                          //   marginLeft: 10,
                          width: 129,
                          height: 43,
                        }}
                        placeholder="Enter here..."
                        name="value"
                        onChange={(e) => {
                          setDomainName(() => ({
                            [e.target.name]: e.target.value,
                          }));
                        }}
                      />
                    )}
                    <Button
                      label={showDomainInput ? "Save" : "Add another"}
                      styleOverride={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 6,
                        paddingBottom: 6,
                        color: color.white,
                        borderWidth: 1,
                        borderColor: color.blackVariant,
                        borderRadius: 22,
                        height: 43,
                        backgroundColor: color.blackVariant,
                        width: showDomainInput ? 100 : 160,
                      }}
                      loader={loading}
                      onClick={() => {
                        setShowDomainInput(true);
                        if (showDomainInput) {
                          saveDomainSkills();
                        }
                      }}
                    />
                  </>
                ) : null}
              </div>
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
                  setShowDomainInput(true);
                  if (showDomainInput) {
                    saveDomainSkills();
                  }
                }}
              />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default KYC_step1;
