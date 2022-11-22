import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { color } from "../../public/theme/Color";
import BoxBodyContainer from "../components/common/BoxBodyContainer";
import Button from "../ui-kit/Button";
import { useDispatch } from "react-redux";
import { RegisterTypeRequest } from "../../redux/actions/AuthAction";

const TypeOfRegister = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <BoxBodyContainer
      body={
        <>
          <Image
            src={require("../../public/assets/icon/logo.png")}
            alt=""
            style={{ height: 89, width: 224 }}
          />
          <div
            style={{ marginTop: 80, fontSize: 36, color: color.blackVariant }}
          >
            Choose to Register
          </div>
          <div
            style={{
              width: "100%",
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              label="Register as mentors"
              styleOverride={{
                height: 62,
                width: 360,
                backgroundColor: "transparent",
                borderWidth: 2,
                borderColor: color.btnColor,
                color: color.blackVariant,
                marginTop: 40,
                borderRadius: 4,
                marginRight: 24,
              }}
              onClick={() => {
                RegisterTypeRequest(dispatch, "MENTOR");

                router.push("/auth/Register");
              }}
            />
            <Button
              label="Register as student"
              styleOverride={{
                height: 62,
                width: 360,
                backgroundColor: color.btnColor,
                color: color.blackVariant,
                marginTop: 40,
                borderRadius: 4,
              }}
              onClick={() => {
                RegisterTypeRequest(dispatch, "STUDENT");
                router.push("/auth/Register");
              }}
            />
          </div>
          <div
            style={{
              fontSize: 16,
              marginTop: 36,
              color: color.blackVariant,
              cursor: "pointer",
            }}
            onClick={() => {
              router.push("/auth/Login");
            }}
          >
            Go back to Login
          </div>
        </>
      }
    />
  );
};

export default TypeOfRegister;
