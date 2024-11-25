import React from "react";
import { Link } from "react-router-dom";

const BreadcrumbOne = ({ title, theme, inner }) => {
  return (
    <div
      className='breadcrumb-area bg-cover'
      style={{ backgroundImage: 'url("assets/img/bg/4.png")' }}
    >
      <div className='container'>
        <div className='breadcrumb-inner'>
          <h2 className='page-title'>
            {title} <span>{theme}</span>
          </h2>
          <ul className='page-list'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>{inner}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbOne;