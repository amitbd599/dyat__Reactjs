import React from "react";
import Slider from "react-slick";

const TestimonialAreaOne = () => {
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
    slidesToShow: 1,
  };
  const settings_1 = {
    speed: 1000,
    loop: true,
    arrows: false,
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
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
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
    <div className='testimonial-area one pd-top-120'>
      <div className='container'>
        <div className='section-title'>
          <div className='row'>
            <div className='col-lg-6'>
              <h6 className='sub-title split_chars'>Our Testimonials</h6>
              <h2 className='title move-line-3d'>
                our client <span>feedback</span>
              </h2>
            </div>
          </div>
        </div>
        <div className='swiper mySwiper2'>
          <div className='swiper-wrapper'>
            <Slider {...settings}>
              <div className='swiper-slide'>
                <div className='feedback-inner'>
                  <img src='assets/img/testimonial/1.png' alt='img' />
                  <p>
                    Building your own stuff, you can do that too. The ASSET
                    CREATOR will allow creators to make things for the as well
                    as sell.
                  </p>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='feedback-inner'>
                  <img src='assets/img/testimonial/1.png' alt='img' />
                  <p>
                    Building your own stuff, you can do that too. The ASSET
                    CREATOR will allow creators to make things for the as well
                    as sell.
                  </p>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='feedback-inner'>
                  <img src='assets/img/testimonial/1.png' alt='img' />
                  <p>
                    Building your own stuff, you can do that too. The ASSET
                    CREATOR will allow creators to make things for the as well
                    as sell.
                  </p>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='feedback-inner'>
                  <img src='assets/img/testimonial/1.png' alt='img' />
                  <p>
                    Building your own stuff, you can do that too. The ASSET
                    CREATOR will allow creators to make things for the as well
                    as sell.
                  </p>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='feedback-inner'>
                  <img src='assets/img/testimonial/1.png' alt='img' />
                  <p>
                    Building your own stuff, you can do that too. The ASSET
                    CREATOR will allow creators to make things for the as well
                    as sell.
                  </p>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='feedback-inner'>
                  <img src='assets/img/testimonial/1.png' alt='img' />
                  <p>
                    Building your own stuff, you can do that too. The ASSET
                    CREATOR will allow creators to make things for the as well
                    as sell.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className='swiper mySwiper feedback-list-slider'>
          <div className='swiper-wrapper'>
            <Slider {...settings_1}>
              <div className='swiper-slide'>
                <div className='feedback-list'>
                  <img src='assets/img/testimonial/2.png' alt='img' />
                  <div className='details'>
                    <h5>Alaxerder “</h5>
                    <span>Game CEO</span>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='feedback-list'>
                  <img src='assets/img/testimonial/3.png' alt='img' />
                  <div className='details'>
                    <h5>Jemse lee “</h5>
                    <span>Game CEO</span>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='feedback-list'>
                  <img src='assets/img/testimonial/4.png' alt='img' />
                  <div className='details'>
                    <h5>pall waker “</h5>
                    <span>Game CEO</span>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='feedback-list'>
                  <img src='assets/img/testimonial/5.png' alt='img' />
                  <div className='details'>
                    <h5>Tonoy pro “</h5>
                    <span>Game CEO</span>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='feedback-list'>
                  <img src='assets/img/testimonial/2.png' alt='img' />
                  <div className='details'>
                    <h5>Alaxerder “</h5>
                    <span>Game CEO</span>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='feedback-list'>
                  <img src='assets/img/testimonial/3.png' alt='img' />
                  <div className='details'>
                    <h5>Jemse lee “</h5>
                    <span>Game CEO</span>
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

export default TestimonialAreaOne;
