import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import BlogArea from "../components/BlogArea";

const BlogPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='latest' theme='News' inner='Blog' />

      {/* BlogArea */}
      <BlogArea />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default BlogPage;
