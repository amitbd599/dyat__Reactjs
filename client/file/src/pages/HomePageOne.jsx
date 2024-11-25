import React from "react";
import HeaderOne from "../components/HeaderOne";
import BannerOne from "../components/BannerOne";
import FeatureAreaOne from "../components/FeatureAreaOne";
import AboutAreaOne from "../components/AboutAreaOne";
import TopAuctionAreaOne from "../components/TopAuctionAreaOne";
import BlockChainGalleryAreaOne from "../components/BlockChainGalleryAreaOne";
import CreatorAreaOne from "../components/CreatorAreaOne";
import TestimonialAreaOne from "../components/TestimonialAreaOne";
import PartnerAreaOne from "../components/PartnerAreaOne";
import FooterOne from "../components/FooterOne";
import TopSellerAreaOne from "../components/TopSellerAreaOne";

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

        {/* TopSellerAreaOne */}
        <TopSellerAreaOne />

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

        {/* PartnerAreaOne */}
        <PartnerAreaOne />

        {/* FooterOne */}
        <FooterOne />
      </>
    </>
  );
};

export default HomePageOne;
