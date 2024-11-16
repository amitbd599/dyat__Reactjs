import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import ProductCart from "../components/ProductCart";

const CartPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Cart' theme='' inner='Cart' />

      {/* ProductCart */}
      <ProductCart />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default CartPage;
