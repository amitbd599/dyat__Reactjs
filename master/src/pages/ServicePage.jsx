import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import PlatformOne from "../components/PlatformOne";
import VideoOne from "../components/VideoOne";
import CreatorOne from "../components/CreatorOne";
import TestimonialAreaOne from "../components/TestimonialAreaOne";

const ServicePage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Our' theme='Service' inner='Service' />

      {/* PlatformOne */}
      <PlatformOne />

      {/* VideoOne */}
      <VideoOne />

      {/* CreatorOne */}
      <CreatorOne />

      {/* TestimonialAreaOne */}
      <TestimonialAreaOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default ServicePage;
