import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import TeamDetailsInner from "../components/TeamDetailsInner";

const TeamDetailsPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Team' theme='Details' inner='Team Details' />

      {/* TeamDetailsInner */}
      <TeamDetailsInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default TeamDetailsPage;
