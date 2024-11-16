import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import BlogInner from "../components/BlogInner";

const BlogDetailsPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='latest' theme='News' inner='Blog' />

      {/* BlogInner */}
      <BlogInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default BlogDetailsPage;
