import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import TournamentInner from "../components/TournamentInner";
import VideoOne from "../components/VideoOne";
import TeamAreaInnerTwo from "../components/TeamAreaInnerTwo";

const TournamentPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Tournament' theme='' inner='Tournament' />

      {/* TournamentInner */}
      <TournamentInner />

      {/* VideoOne */}
      <VideoOne />

      {/* TeamAreaInnerTwo */}
      <TeamAreaInnerTwo />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default TournamentPage;
