import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import BlogInnerGrid from "../components/BlogInnerGrid";

const BlogGridPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='latest' theme='News Grid' inner='Blog Grid' />

      {/* BlogInnerGrid */}
      <BlogInnerGrid />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default BlogGridPage;
