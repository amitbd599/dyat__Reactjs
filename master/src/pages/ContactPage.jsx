import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import ContactInner from "../components/ContactInner";

const ContactPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Contact' theme='Us' inner='Contact Us' />

      {/* ContactInner */}
      <ContactInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default ContactPage;
