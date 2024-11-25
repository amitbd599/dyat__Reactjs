import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BreadcrumbOne from "../components/BreadcrumbOne";
import FooterOne from "../components/FooterOne";
import CreatorItems from "../components/CreatorItems";
import CreatorDetailsInner from "../components/CreatorDetailsInner";

const CreateItemPage = () => {
  return (
    <>
      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BreadcrumbOne */}
      <BreadcrumbOne title='Creator' theme='Items' inner='Creator Items' />

      {/* CreatorDetailsInner */}
      <CreatorDetailsInner />

      {/* CreatorItems */}
      <CreatorItems />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default CreateItemPage;
