import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import TeamAreaInner from "../components/TeamAreaInner";

const CreatorsPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Top' theme='Creators' inner='Top Creators' />

      {/* TeamAreaInner */}
      <TeamAreaInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default CreatorsPage;
