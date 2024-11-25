import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import HelpCenterInner from "../components/HelpCenterInner";

const HelpCenterPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Help Center' theme='' inner='Help Center' />

      {/* HelpCenterInner */}
      <HelpCenterInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default HelpCenterPage;
