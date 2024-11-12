import React from "react";

const FeatureAreaOne = () => {
  return (
    <div className='feature-area pd-top-120 pd-bottom-90'>
      <div className='container'>
        <div className='section-title d-md-flex justify-content-between align-items-center'>
          <h2 className='title move-line-3d'>featured Item</h2>
          <a
            className='read-more-arrow-text d-flex align-items-center mt-md-0 mt-4'
            href='explore-product.html'
          >
            Discover More
            <span>
              <i className='fa fa-arrow-right' />
            </span>
          </a>
        </div>
        <div className='row'>
          <div className='col-xl-3 col-md-6'>
            <div
              className='single-feature-inner fade-slide bottom'
              data-delay='0.2'
            >
              <h4 className='title d-flex justify-content-between align-items-center'>
                Lune Studio
                <img src='assets/img/feature/1.png' alt='img' />
              </h4>
              <div className='thumb text-center'>
                <img src='assets/img/feature/5.png' alt='img' />
              </div>
              <div className='details d-flex justify-content-between align-items-center'>
                <div className='left'>
                  <h5 className='d-block'>
                    <a href='creator-details.html'>Highest bid</a>
                  </h5>
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
          <div className='col-xl-3 col-md-6'>
            <div
              className='single-feature-inner fade-slide bottom'
              data-delay='0.3'
            >
              <h4 className='title d-flex justify-content-between align-items-center'>
                Tune Studio
                <img src='assets/img/feature/2.png' alt='img' />
              </h4>
              <div className='thumb text-center'>
                <img src='assets/img/feature/6.png' alt='img' />
              </div>
              <div className='details d-flex justify-content-between align-items-center'>
                <div className='left'>
                  <h5 className='d-block'>
                    <a href='creator-details.html'>Highest bid</a>
                  </h5>
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
          <div className='col-xl-3 col-md-6'>
            <div
              className='single-feature-inner fade-slide bottom'
              data-delay='0.4'
            >
              <h4 className='title d-flex justify-content-between align-items-center'>
                Bone Studio
                <img src='assets/img/feature/3.png' alt='img' />
              </h4>
              <div className='thumb text-center'>
                <img src='assets/img/feature/7.png' alt='img' />
              </div>
              <div className='details d-flex justify-content-between align-items-center'>
                <div className='left'>
                  <h5 className='d-block'>
                    <a href='creator-details.html'>Highest bid</a>
                  </h5>
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
          <div className='col-xl-3 col-md-6'>
            <div
              className='single-feature-inner fade-slide bottom'
              data-delay='0.5'
            >
              <h4 className='title d-flex justify-content-between align-items-center'>
                Doe Studio
                <img src='assets/img/feature/4.png' alt='img' />
              </h4>
              <div className='thumb text-center'>
                <img src='assets/img/feature/8.png' alt='img' />
              </div>
              <div className='details d-flex justify-content-between align-items-center'>
                <div className='left'>
                  <h5 className='d-block'>
                    <a href='creator-details.html'>Highest bid</a>
                  </h5>
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
      </div>
    </div>
  );
};

export default FeatureAreaOne;
