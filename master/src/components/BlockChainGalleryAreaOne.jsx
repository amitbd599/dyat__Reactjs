import React from "react";
import Slider from "react-slick";

const BlockChainGalleryAreaOne = () => {
  const settings = {
    centerMode: true,
    className: "center",
    infinite: true,
    centerPadding: "0px",
    speed: 1000,
    loop: true,
    slidesToShow: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 5,
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
    <div className='block-chain-gallery-area one pd-bottom-120'>
      <div className='container'>
        <div className='section-title text-center'>
          <h6 className='sub-title split_chars'>Our Blockchain</h6>
          <h2 className='title move-line-3d'>Powered by blockchain</h2>
        </div>
        <div className='swiper block-chain-gallery-slider'>
          <div className='swiper-wrapper'>
            <Slider {...settings}>
              <div className='swiper-slide'>
                <div
                  className='block-chain-gallery-thumb'
                  style={{ backgroundImage: 'url("assets/img/gallery/1.png")' }}
                />
              </div>
              <div className='swiper-slide'>
                <div
                  className='block-chain-gallery-thumb'
                  style={{ backgroundImage: 'url("assets/img/gallery/2.png")' }}
                />
              </div>
              <div className='swiper-slide'>
                <div
                  className='block-chain-gallery-thumb'
                  style={{ backgroundImage: 'url("assets/img/gallery/3.png")' }}
                />
              </div>
              <div className='swiper-slide'>
                <div
                  className='block-chain-gallery-thumb'
                  style={{ backgroundImage: 'url("assets/img/gallery/4.png")' }}
                />
              </div>
              <div className='swiper-slide'>
                <div
                  className='block-chain-gallery-thumb'
                  style={{ backgroundImage: 'url("assets/img/gallery/5.png")' }}
                />
              </div>
              <div className='swiper-slide'>
                <div
                  className='block-chain-gallery-thumb'
                  style={{ backgroundImage: 'url("assets/img/gallery/1.png")' }}
                />
              </div>
              <div className='swiper-slide'>
                <div
                  className='block-chain-gallery-thumb'
                  style={{ backgroundImage: 'url("assets/img/gallery/2.png")' }}
                />
              </div>
              <div className='swiper-slide'>
                <div
                  className='block-chain-gallery-thumb'
                  style={{ backgroundImage: 'url("assets/img/gallery/3.png")' }}
                />
              </div>
              <div className='swiper-slide'>
                <div
                  className='block-chain-gallery-thumb'
                  style={{ backgroundImage: 'url("assets/img/gallery/4.png")' }}
                />
              </div>
              <div className='swiper-slide'>
                <div
                  className='block-chain-gallery-thumb'
                  style={{ backgroundImage: 'url("assets/img/gallery/5.png")' }}
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockChainGalleryAreaOne;
