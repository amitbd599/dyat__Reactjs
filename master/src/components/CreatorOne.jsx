import React from "react";

const CreatorOne = () => {
  return (
    <div
      className='creator-area pd-top-120 pd-bottom-100 bg-cover'
      style={{ backgroundImage: 'url("assets/img/creator/bg2.png")' }}
    >
      <div className='container'>
        <div className='section-title text-center'>
          <h6 className='subtitle color-base split_chars'>Trusted Wallet</h6>
          <h2 className='title move-line-3d'>trusted by the best</h2>
        </div>
        <div className='row'>
          <div
            className='col-lg-2 col-sm-4 text-center mb-4 pb-4  fade-slide bottom'
            data-delay='0.2'
          >
            <img className='mb-3' src='assets/img/wallet/3.png' alt='img' />
            <h5>Ethereum Max</h5>
          </div>
          <div
            className='col-lg-2 col-sm-4 text-center mb-4 pb-4  fade-slide bottom'
            data-delay='0.3'
          >
            <img className='mb-3' src='assets/img/wallet/4.png' alt='img' />
            <h5>Mahereum Max</h5>
          </div>
          <div
            className='col-lg-2 col-sm-4 text-center mb-4 pb-4  fade-slide bottom'
            data-delay='0.4'
          >
            <img className='mb-3' src='assets/img/wallet/5.png' alt='img' />
            <h5>Max Tone</h5>
          </div>
          <div
            className='col-lg-2 col-sm-4 text-center mb-4 pb-4  fade-slide bottom'
            data-delay='0.5'
          >
            <img className='mb-3' src='assets/img/wallet/6.png' alt='img' />
            <h5>Fix Turbo</h5>
          </div>
          <div
            className='col-lg-2 col-sm-4 text-center mb-4 pb-4  fade-slide bottom'
            data-delay='0.6'
          >
            <img className='mb-3' src='assets/img/wallet/7.png' alt='img' />
            <h5>Edereum Max</h5>
          </div>
          <div
            className='col-lg-2 col-sm-4 text-center mb-4 pb-4  fade-slide bottom'
            data-delay='0.7'
          >
            <img className='mb-3' src='assets/img/wallet/8.png' alt='img' />
            <h5>Roereum Max</h5>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-lg-6 mb-lg-0 mb-5 fade-slide bottom'
            data-delay='0.8'
          >
            <div className='trusted-wallet-inner'>
              <img
                className='bg-one w-100'
                src='assets/img/bg/1.png'
                alt='img'
              />
              <img
                className='bg-two w-100'
                src='assets/img/bg/2.png'
                alt='img'
              />
              <div className='content-inner text-center'>
                <div className='cat text-end'>
                  <a href='wallet.html'>Crepto User</a>
                </div>
                <div className='icon'>
                  <img src='assets/img/wallet/1.png' alt='img' />
                </div>
                <span>
                  Safe {"{"}core{"}"}
                </span>
                <h4>The most battle-tested Account Abstraction Stack</h4>
                <a className='read-more' href='wallet.html'>
                  Learn More <i className='fa fa-angle-right' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 fade-slide bottom' data-delay='0.9'>
            <div className='trusted-wallet-inner'>
              <img
                className='bg-one w-100'
                src='assets/img/bg/1.png'
                alt='img'
              />
              <img
                className='bg-two w-100'
                src='assets/img/bg/2.png'
                alt='img'
              />
              <div className='content-inner text-center'>
                <div className='cat text-end'>
                  <a href='wallet.html'>Developer</a>
                </div>
                <div className='icon'>
                  <img src='assets/img/wallet/2.png' alt='img' />
                </div>
                <span>
                  Safe {"{"}core{"}"}
                </span>
                <h4>The most battle-tested Account Abstraction Stack </h4>
                <a className='read-more' href='wallet.html'>
                  Learn More <i className='fa fa-angle-right' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorOne;
