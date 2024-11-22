import React from "react";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <footer
      className='footer-area footer-area-2 text-center bg-cover'
      style={{ backgroundImage: 'url("./assets/img/footer/bg-2.png")' }}
    >
      <div className='container'>
        <div className='footer-top'>
          <Link className='footer-logo' to='/'>
            <img src='assets/img/logo.png' alt='img' />
          </Link>
          <p>
            +0 123 456 7890 - <span>info@yourmail.com</span>
          </p>
          <ul className='p-0 m-0'>
            <li>
              {" "}
              <Link to='/'>Home</Link>
            </li>
            <li>
              {" "}
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              {" "}
              <Link to='/tournament'>Tournament</Link>
            </li>
            <li>
              {" "}
              <Link to='/news'>News</Link>
            </li>
            <li>
              {" "}
              <Link to='/pages'>Pages</Link>
            </li>
            <li>
              {" "}
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <img src='assets/img/footer/line.png' alt='img' />
        </div>
        <p className='copyright'>
          ©2024–by <span>XDYAT</span> © All Rights Reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default FooterTwo;
