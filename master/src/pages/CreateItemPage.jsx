import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import CreatorDetailsInner from "../components/CreatorDetailsInner";
import CreatorDetailsArea from "../components/CreatorDetailsArea";

const CreateItemPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Creator' theme='Details' inner='Creator Details' />

      {/* CreatorDetailsInner */}
      <CreatorDetailsInner />

      {/* CreatorDetailsArea */}
      <CreatorDetailsArea />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default CreateItemPage;
