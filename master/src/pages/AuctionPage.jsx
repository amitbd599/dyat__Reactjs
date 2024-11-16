import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import CreatorDetails from "../components/CreatorDetails";

const AuctionPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Explore' theme='Auction' inner='Auction' />

      {/* CreatorDetails */}
      <CreatorDetails />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default AuctionPage;
