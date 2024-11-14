import React from "react";
import Slider from "react-slick";

const TopAdvisorsOne = () => {
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
    speed: 500,
    loop: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div
      className='top-advisors-area pd-top-120 pd-bottom-90 bg-cover'
      style={{ backgroundImage: 'url("assets/img/creator/bg2.png")' }}
    >
      <div className='container'>
        <div className='section-title'>
          <div className='row'>
            <div className='col-lg-6'>
              <h6 className='sub-title split_chars'>Team &amp; Advisors</h6>
              <h2 className='title move-line-3d'>Crypto Expart Advisors</h2>
            </div>
            <div className='col-lg-6 align-self-center mt-md-0 mt-4'>
              <div className='array-button slider-control-round  text-lg-end'>
                <button className='array-prev-advisors'>
                  <i className='fa fa-angle-left' />
                </button>
                <button className='array-next-advisors'>
                  <i className='fa fa-angle-right' />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='swiper advisors-slider'>
          <div className='swiper-wrapper'>
            <Slider {...settings}>
              <div className='swiper-slide px-3'>
                <div className='single-advisors-inner'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/team/1.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='name'>
                      <a href='team-details.html'>Alxender Pul</a>
                    </h5>
                    <span className='designation'>CEO</span>
                    <div className='social-list text-end'>
                      <a href='#'>
                        <i className='fab fa-facebook' />
                      </a>
                      <a href='#'>
                        <i className='fab fa-twitter' />
                      </a>
                      <a href='#'>
                        <i className='fab fa-linkedin' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide px-3'>
                <div className='single-advisors-inner'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/team/1.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='name'>
                      <a href='team-details.html'>Siddrat mat</a>
                    </h5>
                    <span className='designation'>Developer</span>
                    <div className='social-list text-end'>
                      <a href='#'>
                        <i className='fab fa-facebook' />
                      </a>
                      <a href='#'>
                        <i className='fab fa-twitter' />
                      </a>
                      <a href='#'>
                        <i className='fab fa-linkedin' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide px-3'>
                <div className='single-advisors-inner'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/team/2.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='name'>
                      <a href='team-details.html'>Robart Fine</a>
                    </h5>
                    <span className='designation'>Co-Founder</span>
                    <div className='social-list text-end'>
                      <a href='#'>
                        <i className='fab fa-facebook' />
                      </a>
                      <a href='#'>
                        <i className='fab fa-twitter' />
                      </a>
                      <a href='#'>
                        <i className='fab fa-linkedin' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide px-3'>
                <div className='single-advisors-inner'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/team/3.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='name'>
                      <a href='team-details.html'>Jone Doe</a>
                    </h5>
                    <span className='designation'>CEO</span>
                    <div className='social-list text-end'>
                      <a href='#'>
                        <i className='fab fa-facebook' />
                      </a>
                      <a href='#'>
                        <i className='fab fa-twitter' />
                      </a>
                      <a href='#'>
                        <i className='fab fa-linkedin' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide px-3'>
                <div className='single-advisors-inner'>
                  <div className='thumb text-center p-0'>
                    <img src='assets/img/team/4.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5 className='name'>
                      <a href='team-details.html'>Daniel vibe</a>
                    </h5>
                    <span className='designation'>CEO</span>
                    <div className='social-list text-end'>
                      <a href='#'>
                        <i className='fab fa-facebook' />
                      </a>
                      <a href='#'>
                        <i className='fab fa-twitter' />
                      </a>
                      <a href='#'>
                        <i className='fab fa-linkedin' />
                      </a>
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

export default TopAdvisorsOne;
