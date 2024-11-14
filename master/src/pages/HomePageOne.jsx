import React from "react";
import HeaderOne from "../components/HeaderOne";
import BannerOne from "../components/BannerOne";
import FeatureAreaOne from "../components/FeatureAreaOne";
import TopSellerArea from "./TopSellerArea";
import AboutAreaOne from "../components/AboutAreaOne";
import TopAuctionAreaOne from "../components/TopAuctionAreaOne";
import BlockChainGalleryAreaOne from "../components/BlockChainGalleryAreaOne";
import CreatorAreaOne from "../components/CreatorAreaOne";
import TestimonialAreaOne from "../components/TestimonialAreaOne";

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

        {/* BlockChainGalleryAreaOne */}
        <BlockChainGalleryAreaOne />

        {/* CreatorAreaOne */}
        <CreatorAreaOne />

        {/* TestimonialAreaOne */}
        <TestimonialAreaOne />
      </>
    </>
  );
};

export default HomePageOne;
