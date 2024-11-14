import React from "react";

const BannerTwo = () => {
  return (
    <div
      className='banner-area bg-relative banner-area-2'
      style={{ backgroundImage: 'url("./assets/img/banner-2/bg.png")' }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7'>
            <div className='banner-content'>
              <h1 className='title move-line-3d'>
                <span className='light'>
                  Online Eyes
                  <img
                    className='line-img left_image_bounce'
                    src='assets/img/banner/4.png'
                    alt='img'
                  />
                </span>
                <span className='font-large'>
                  crypto <span className='color-base font-jersey'>account</span>
                </span>
              </h1>
              <h4 className='sub-title split_chars'>GENERAL INFORMATION</h4>
              <div
                className='btn-box d-inline-block fade-slide bottom'
                data-delay='0.5'
              >
                <a className='btn btn-main style-small' href='about.html'>
                  <span>
                    <span>Explore More</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='banner-img text-lg-end'>
              <img
                className='top_image_bounce'
                src='assets/img/banner-2/1.png'
                alt='img'
              />
              <img
                className='animate-img-1 spin_image'
                src='assets/img/banner-2/2.png'
                alt='img'
              />
              <img
                className='animate-img-2 spin_image'
                src='assets/img/banner-2/3.png'
                alt='img'
              />
              <img
                className='animate-img-3 left_image_bounce'
                src='assets/img/banner-2/4.png'
                alt='img'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;