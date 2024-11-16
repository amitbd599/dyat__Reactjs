import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import ServiceDetailsInner from "../components/ServiceDetailsInner";

const ServiceDetailsPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Our' theme='Service' inner='Service' />

      {/* ServiceDetailsInner */}
      <ServiceDetailsInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default ServiceDetailsPage;
