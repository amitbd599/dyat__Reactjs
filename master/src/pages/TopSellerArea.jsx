import React from "react";
import Slider from "react-slick";

const TopSellerArea = () => {
  const NextArrow = ({ onClick }) => (
    <button className='array-next' onClick={onClick}>
      <i className='fa fa-angle-left' />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button className='array-prev' onClick={onClick}>
      <i className='fa fa-angle-right' />
    </button>
  );

  const settings = {
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 3,
    breakpoints: {
      1499: {
        slidesToShow: 3,
      },
      1399: {
        slidesToShow: 3,
      },
      1199: {
        slidesToShow: 3,
      },
      991: {
        slidesToShow: 2,
      },
      767: {
        slidesToShow: 2,
      },
      575: {
        slidesToShow: 1,
      },
      0: {
        slidesToShow: 1,
      },
    },
  };
  return (
    <div className='top-seller-area pd-bottom-80'>
      <div className='container'>
        <div className='section-title d-md-flex justify-content-between align-items-center'>
          <h2 className='title move-line-3d'>
            Top Seller <span>In 1 Day</span>
          </h2>
          <div className='array-button slider-control-round mt-md-0 mt-4'></div>
        </div>
        <div className='swiper top-seller-slider fade-slide bottom'>
          <div className='swiper-wrapper'>
            <Slider {...settings}>
              <div className='swiper-slide px-3'>
                <div
                  className='top-seller-inner'
                  style={{
                    backgroundImage: 'url("assets/img/top-seller/bg.png")',
                  }}
                >
                  <div className='top-seller-item d-flex justify-content-between'>
                    <div className='thumb'>
                      <img src='assets/img/top-seller/1.png' alt='img' />
                    </div>
                    <div className='content'>
                      <h5 className='tt-uppercase'>first player</h5>
                      <span className='color-base mb-2 d-block'>
                        Highest bid
                      </span>
                      <div className='author-img'>
                        <img src='assets/img/top-seller/4.png' alt='img' />
                        <span>+56</span>
                      </div>
                    </div>
                    <div className='button text-end'>
                      <span className='tag mb-2'>
                        <span>158</span>
                      </span>
                      <span className='tag'>
                        <span>35K</span>
                      </span>
                    </div>
                  </div>
                  <h6 className='bottom-item'>
                    <span />
                    powered by blockchain
                  </h6>
                </div>
              </div>
              <div className='swiper-slide px-3'>
                <div
                  className='top-seller-inner'
                  style={{
                    backgroundImage: 'url("assets/img/top-seller/bg.png")',
                  }}
                >
                  <div className='top-seller-item d-flex justify-content-between'>
                    <div className='thumb'>
                      <img src='assets/img/top-seller/2.png' alt='img' />
                    </div>
                    <div className='content'>
                      <h5 className='tt-uppercase'>Second player</h5>
                      <span className='color-base mb-2 d-block'>
                        Highest bid
                      </span>
                      <div className='author-img'>
                        <img src='assets/img/top-seller/4.png' alt='img' />
                        <span>+56</span>
                      </div>
                    </div>
                    <div className='button text-end'>
                      <span className='tag mb-2'>
                        <span>158</span>
                      </span>
                      <span className='tag'>
                        <span>35K</span>
                      </span>
                    </div>
                  </div>
                  <h6 className='bottom-item'>
                    <span />
                    powered by blockchain
                  </h6>
                </div>
              </div>
              <div className='swiper-slide px-3'>
                <div
                  className='top-seller-inner'
                  style={{
                    backgroundImage: 'url("assets/img/top-seller/bg.png")',
                  }}
                >
                  <div className='top-seller-item d-flex justify-content-between'>
                    <div className='thumb'>
                      <img src='assets/img/top-seller/3.png' alt='img' />
                    </div>
                    <div className='content'>
                      <h5 className='tt-uppercase'>Third player</h5>
                      <span className='color-base mb-2 d-block'>
                        Highest bid
                      </span>
                      <div className='author-img'>
                        <img src='assets/img/top-seller/4.png' alt='img' />
                        <span>+56</span>
                      </div>
                    </div>
                    <div className='button text-end'>
                      <span className='tag mb-2'>
                        <span>158</span>
                      </span>
                      <span className='tag'>
                        <span>35K</span>
                      </span>
                    </div>
                  </div>
                  <h6 className='bottom-item'>
                    <span />
                    powered by blockchain
                  </h6>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellerArea;
