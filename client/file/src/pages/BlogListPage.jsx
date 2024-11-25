import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import BlogInnerList from "../components/BlogInnerList";

const BlogListPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='latest' theme='News List' inner='Blog List' />

      {/* BlogInnerList */}
      <BlogInnerList />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default BlogListPage;
