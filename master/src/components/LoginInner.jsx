import React from "react";

const LoginInner = () => {
  return (
    <div className='product-cart-area bg-color-50 pd-top-120 pd-bottom-120'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-lg-6 pe-xl-5'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='pe-xl-5 pe-lg-4'>
              <div className='section-title'>
                <div className='row'>
                  <h6 className='subtitle tt-uppercase'>Start for free</h6>
                  <h2 className='title'>
                    Create <span>account</span>
                  </h2>
                  <p className='mb-0 mt-3'>
                    Already a Member?{" "}
                    <a className='color-base' href='#'>
                      Log in
                    </a>
                  </p>
                </div>
              </div>
              <form className='login-form-inner'>
                <div className='single-input-inner style-border'>
                  <input type='text' placeholder='Your Email' />
                  <span>
                    <img src='assets/img/icon/17.png' alt='img' />
                  </span>
                </div>
                <div className='single-input-inner style-border'>
                  <input type='password' placeholder='Password' />
                  <span>
                    <img src='assets/img/icon/18.png' alt='img' />
                  </span>
                </div>
                <a className='btn btn-base tt-uppercase w-100' href=''>
                  Log in
                </a>
                <div className='text-md-end mt-4 tt-uppercase'>
                  <button
                    className='bg-transparent border-0 text-white'
                    type='submit'
                  >
                    forget your password
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className='col-lg-6 ps-xl-5 mt-lg-0 mt-5'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='ps-xl-5 ps-lg-4'>
              <img className='w-100' src='assets/img/login.png' alt='img' />
              <div className='login-social-btn mt-4'>
                <a
                  className='tt-uppercase w-100 border-1 d-block w-100 border-radius-6 p-4'
                  href='#'
                >
                  <i className='fab fa-facebook me-2' />
                  login with facebook
                  <i className='fa fa-angle-right float-right' />
                </a>
                <a
                  className='tt-uppercase w-100 border-1 d-block w-100 border-radius-6 p-4'
                  href='#'
                >
                  <i className='fab fa-apple me-2' />
                  login with apple
                  <i className='fa fa-angle-right float-right' />
                </a>
                <a
                  className='tt-uppercase w-100 border-1 d-block w-100 border-radius-6 p-4'
                  href='#'
                >
                  <i className='fab fa-google me-2' />
                  login with Google
                  <i className='fa fa-angle-right float-right' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginInner;
