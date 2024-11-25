import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import ErrorInner from "../components/ErrorInner";

const ErrorPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Error' theme='404' inner='Error' />

      {/* ErrorInner */}
      <ErrorInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default ErrorPage;
