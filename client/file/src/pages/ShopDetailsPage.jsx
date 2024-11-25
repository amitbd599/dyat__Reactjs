import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import ProductDetailsInner from "../components/ProductDetailsInner";

const ShopDetailsPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Shop' theme='Details' inner='Shop Details' />

      {/* ProductDetailsInner */}
      <ProductDetailsInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default ShopDetailsPage;
