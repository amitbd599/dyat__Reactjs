import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import WalletInner from "../components/WalletInner";

const WalletPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Connect' theme='Wallet' inner='Wallet' />

      {/* WalletInner */}
      <WalletInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default WalletPage;
