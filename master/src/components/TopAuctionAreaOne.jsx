import React from "react";
import Slider from "react-slick";

const TopAuctionAreaOne = () => {
  const NextArrow = ({ onClick }) => (
    <div className='array-button slider-control-round text-md-end'>
      <button className='array-next' onClick={onClick}>
        <i className='fa fa-angle-left' />
      </button>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className='array-button slider-control-round text-md-end'>
      <button className='array-prev' onClick={onClick}>
        <i className='fa fa-angle-right' />
      </button>
    </div>
  );

  const settings = {
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 4,
    breakpoints: {
      1499: {
        slidesToShow: 4,
      },
      1399: {
        slidesToShow: 4,
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
    <div className='top-auction-area one pd-top-120 pd-bottom-90'>
      <div className='container'>
        <div className='section-title'>
          <div className='row'>
            <div className='col-lg-6 col-md-8'>
              <h6 className='sub-title split_chars'>top Auction</h6>
              <h2 className='title move-line-3d'>Limited Auction</h2>
            </div>
          </div>
        </div>
        <div className='swiper top-auction-slider'>
          <div className='swiper-wrapper'>
            <Slider {...settings}>
              <div className='swiper-slide px-3'>
                <div className='single-feature-inner style-2'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/top-auction/1.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='product-item__wishlist tt-uppercase d-flex justify-content-between align-items-center mb-3'>
                      <a href='creator-details.html'>Lune Studio</a>
                      <i className='fas fa-heart' />
                    </h5>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='left'>
                        <h5 className='d-block'>Highest bid</h5>
                        <a href='creator-details.html' className='bid'>
                          <span className='icon'>
                            <i className='fa fa-link' />
                          </span>
                          3.005 <span className='color-base'>ETH</span>
                        </a>
                      </div>
                      <div className='right'>
                        <a className='btn btn-base' href='creator-details.html'>
                          BID <i className='fa fa-arrow-right' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide px-3'>
                <div className='single-feature-inner style-2'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/top-auction/2.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='product-item__wishlist tt-uppercase d-flex justify-content-between align-items-center mb-3'>
                      <a href='creator-details.html'>Aune Studio</a>
                      <i className='fas fa-heart' />
                    </h5>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='left'>
                        <h5 className='d-block'>Highest bid</h5>
                        <a href='creator-details.html' className='bid'>
                          <span className='icon'>
                            <i className='fa fa-link' />
                          </span>
                          3.005 <span className='color-base'>ETH</span>
                        </a>
                      </div>
                      <div className='right'>
                        <a className='btn btn-base' href='creator-details.html'>
                          BID <i className='fa fa-arrow-right' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide px-3'>
                <div className='single-feature-inner style-2'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/top-auction/3.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='product-item__wishlist tt-uppercase d-flex justify-content-between align-items-center mb-3'>
                      <a href='creator-details.html'>Quae Studio</a>
                      <i className='fas fa-heart' />
                    </h5>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='left'>
                        <h5 className='d-block'>Highest bid</h5>
                        <a href='creator-details.html' className='bid'>
                          <span className='icon'>
                            <i className='fa fa-link' />
                          </span>
                          3.005 <span className='color-base'>ETH</span>
                        </a>
                      </div>
                      <div className='right'>
                        <a className='btn btn-base' href='creator-details.html'>
                          BID <i className='fa fa-arrow-right' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide px-3'>
                <div className='single-feature-inner style-2'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/top-auction/4.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='product-item__wishlist tt-uppercase d-flex justify-content-between align-items-center mb-3'>
                      <a href='creator-details.html'>Lune Studio</a>
                      <i className='fas fa-heart' />
                    </h5>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='left'>
                        <h5 className='d-block'>Highest bid</h5>
                        <a href='creator-details.html' className='bid'>
                          <span className='icon'>
                            <i className='fa fa-link' />
                          </span>
                          3.005 <span className='color-base'>ETH</span>
                        </a>
                      </div>
                      <div className='right'>
                        <a className='btn btn-base' href='creator-details.html'>
                          BID <i className='fa fa-arrow-right' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAuctionAreaOne;
