import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import TeamInner from "../components/TeamInner";

const TeamPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Latest' theme='Team' inner='Team' />

      {/* TeamInner */}
      <TeamInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default TeamPage;
