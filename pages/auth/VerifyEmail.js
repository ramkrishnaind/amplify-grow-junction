import React from "react";
import Amplify, { Auth } from "aws-amplify";
import Image from "next/image";
import { color } from "../../public/theme/Color";
import BoxBodyContainer from "../components/common/BoxBodyContainer";
import Button from "../ui-kit/Button";
// import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const VerifyEmail = () => {
  const registerType = useSelector((state) => state.AuthReducer);
  const router = useRouter();

  console.log(registerType.userAuth);

  //   useEffect(() => {
  //     const getInfo = async () => {
  //       await Auth.currentUserInfo()
  //         .then((res) => {
  //           console.log('res', res);
  //         })
  //         .catch((err) => {
  //           console.log('err', err);
  //         });
  //     };
  //     getInfo();
  //   }, []);
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
            style={{
              backgroundColor: color.blackVariant,
              height: 66,
              width: 66,
              borderRadius: 66,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={require("../../public/assets/icon/mailBox.png")}
              alt=""
              style={{ height: 42, width: 42 }}
            />
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 36,
              color: color.blackVariant,
              //   lineHeight: 49.03,
            }}
          >
            Verify your Email
          </div>
          <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
            <div
              style={{
                marginTop: 40,
                fontSize: 20,
                color: color.blackVariant,
                textAlign: "center",
                paddingLeft: 373,
                paddingRight: 373,
                //   lineHeight: 27.24,
              }}
            >
              To keep a trusted and safe community, we’ve sent an email to{" "}
              <span style={{ fontWeight: 700 }}>
                {registerType.userAuth?.username}
              </span>{" "}
              for verification, and you’ll only do this once.
            </div>
          </div>
          <div
            style={{
              marginTop: 48,
              display: "flex",
              flexDirection: "row",
              flex: 1,
              color: color.blackVariant,
              fontSize: 16,
            }}
          >
            Not the correct email?{" "}
            <div
              style={{ fontSize: 16, color: color.blue }}
              onClick={() => {
                router.back();
              }}
            >
              {" "}
              Change email address
            </div>
          </div>
          <Button
            label="Open my email"
            styleOverride={{
              height: 62,
              backgroundColor: color.blackVariant,
              color: color.white,
              //   alignSelf: 'center',
              //   marginTop: 40,
              width: 494,
              fontSize: 16,
              fontWeight: 700,
            }}
            //   onClick={handleSubmit}
            onClick={() => {
              // router.push('/auth/VerifyEmail');
              // Auth.currentAuthenticatedUser(registerType.userAuth?.userDataKey);
              //   alertService.success('Success!!', 'asdsadsa');
              let data = Auth.currentUserInfo();
              console.log("data", data);
              router.push("/register/KYC_step1");
              console.log("entry");

              //   return (
              //     <Link
              //       target="_blank"
              //       rel="noopener noreferrer"
              //       href={'https://gmail.com/'}
              //     />
              //   );
            }}
          />
          <div
            onClick={async () => {
              let username = '"er.riyaz2507@gmail.com"';
              try {
                await Auth.resendSignUp(username);
                console.log("code resent successfully");
              } catch (err) {
                console.log("error resending code: ", err);
              }
            }}
          >
            <div
              style={{
                marginTop: 48,
                display: "flex",
                flexDirection: "row",
                flex: 1,
                color: color.blackVariant,
                fontSize: 16,
              }}
            >
              Did not receive any mail?{" "}
              <div style={{ fontSize: 16, color: color.blue }}>
                {" "}
                Resend email
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default VerifyEmail;
