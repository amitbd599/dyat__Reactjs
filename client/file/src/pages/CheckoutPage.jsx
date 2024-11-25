import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import CheckoutCartInner from "../components/CheckoutCartInner";

const CheckoutPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Checkout' theme='' inner='Checkout' />

      {/* CheckoutCartInner */}
      <CheckoutCartInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default CheckoutPage;
