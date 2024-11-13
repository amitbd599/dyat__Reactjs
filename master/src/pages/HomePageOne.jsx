import React from "react";
import HeaderOne from "../components/HeaderOne";
import BannerOne from "../components/BannerOne";
import FeatureAreaOne from "../components/FeatureAreaOne";
import TopSellerArea from "./TopSellerArea";
import AboutAreaOne from "../components/AboutAreaOne";
import TopAuctionAreaOne from "../components/TopAuctionAreaOne";

const HomePageOne = () => {
  return (
    <>
      <>
        {/* HeaderOne */}
        <HeaderOne />

        {/* BannerOne */}
        <BannerOne />

        {/* FeatureAreaOne */}
        <FeatureAreaOne />

        {/* TopSellerArea */}
        <TopSellerArea />

        {/* AboutAreaOne */}
        <AboutAreaOne />

        {/* TopAuctionAreaOne */}
        <TopAuctionAreaOne />
      </>
    </>
  );
};

export default HomePageOne;
