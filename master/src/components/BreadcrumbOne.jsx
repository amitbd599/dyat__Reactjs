import React from "react";

const BreadcrumbOne = () => {
  return (
    <div
      className='breadcrumb-area bg-cover'
      style={{ backgroundImage: 'url("assets/img/bg/4.png")' }}
    >
      <div className='container'>
        <div className='breadcrumb-inner'>
          <h2 className='page-title'>
            about <span>us</span>
          </h2>
          <ul className='page-list'>
            <li>
              <a href='index.html'>Home</a>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbOne;
