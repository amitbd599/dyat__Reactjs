import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import LoginInner from "../components/LoginInner";

const LoginPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Login' theme='' inner='Login' />

      {/* LoginInner */}
      <LoginInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default LoginPage;
