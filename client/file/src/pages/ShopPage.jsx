import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import ShopInner from "../components/ShopInner";

const ShopPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Shop' theme='' inner='Shop' />

      {/* ShopInner */}
      <ShopInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default ShopPage;
