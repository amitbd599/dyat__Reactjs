import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import AboutAreaThree from "../components/AboutAreaThree";
import RoadmapOne from "../components/RoadmapOne";
import TestimonialAreaTwo from "../components/TestimonialAreaTwo";
import FooterOne from "../components/FooterOne";

const AboutPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne />

      {/* AboutInnerOne */}
      <AboutAreaThree />

      {/* RoadmapInner */}
      <RoadmapOne />

      {/* TestimonialAreaTwo */}
      <TestimonialAreaTwo />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default AboutPage;
