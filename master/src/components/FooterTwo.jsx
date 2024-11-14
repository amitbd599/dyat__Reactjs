import React from "react";

const FooterTwo = () => {
  return (
    <footer
      className='footer-area footer-area-2 text-center bg-cover'
      style={{ backgroundImage: 'url("./assets/img/footer/bg-2.png")' }}
    >
      <div className='container'>
        <div className='footer-top'>
          <a className='footer-logo' href='index.html'>
            <img src='assets/img/logo.png' alt='img' />
          </a>
          <p>
            +0 123 456 7890 - <span>info@yourmail.com</span>
          </p>
          <ul className='p-0 m-0'>
            <li>
              {" "}
              <a href='index.html'>Home</a>
            </li>
            <li>
              {" "}
              <a href='about.html'>About Us</a>
            </li>
            <li>
              {" "}
              <a href='tournament.html'>Tournament</a>
            </li>
            <li>
              {" "}
              <a href='news.html'>News</a>
            </li>
            <li>
              {" "}
              <a href='pages.html'>Pages</a>
            </li>
            <li>
              {" "}
              <a href='contact.html'>Contact</a>
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
