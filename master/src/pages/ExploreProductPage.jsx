import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import ExploreProductInner from "../components/ExploreProductInner";

const ExploreProductPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Explore' theme='Product' inner='Explore Product' />

      {/* ExploreProductInner */}
      <ExploreProductInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default ExploreProductPage;
