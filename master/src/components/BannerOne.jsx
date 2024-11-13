import React from "react";

const BannerOne = () => {
  return (
    <div
      className='banner-area bg-relative banner-area-1'
      style={{ backgroundImage: 'url("./assets/img/banner/3.png")' }}
    >
      <img className='chain-style' src='assets/img/banner/5.png' alt='img' />
      <img
        className='chain-style right-to-left-move'
        src='assets/img/banner/5.png'
        alt='img'
      />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7'>
            <div className='banner-content'>
              <h1 className='title move-line-3d'>
                <span className='light'>
                  Unlesh the
                  <img
                    className='line-img'
                    src='assets/img/banner/4.png'
                    alt='img'
                  />
                </span>
                <span className='font-large'>
                  create <span className='color-base'>nft’s</span>
                </span>
                <span className='light'>Of</span>
                <span className='color-base'>art</span>
              </h1>
              <h4 className='sub-title split_chars'>GENERAL INFORMATION</h4>
              <div className='btn-box d-inline-block fade-slide bottom'>
                <a className='btn btn-main style-small' href='about.html'>
                  <span>
                    <span>Explore More</span>
                  </span>
                </a>
              </div>
              <div className='list-img fade-slide bottom'>
                <img src='assets/img/banner/1.png' alt='img' />
              </div>
            </div>
          </div>
          <div className='col-lg-5 mt-lg-0 mt-5'>
            <div className='banner-img text-lg-end top_image_bounce'>
              <img src='assets/img/banner/2.png' alt='img' />
              <img
                className='shape-img  shapeBlinker_img'
                src='assets/img/banner/6.png'
                alt='img'
              />
              <img
                className='shape-img-2 spin_image'
                src='assets/img/banner-2/2.png'
                alt='img'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
