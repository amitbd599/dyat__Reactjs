import React from "react";

const ProductAreaOne = () => {
  return (
    <div className='product-area pd-top-100 pd-bottom-100 bg-cover'>
      <div className='container'>
        <div className='section-title text-center'>
          <h6 className='sub-title'>Our Product</h6>
          <h2 className='title'>Discover collect</h2>
          <img className='mt-3' src='assets/img/icon/shalep-1.png' alt='img' />
        </div>
        <div className='row'>
          <div className='col-lg-3 col-md-6'>
            <div className='single-product-inner text-center'>
              <div className='thumb'>
                <img src='assets/img/product/1.png' alt='img' />
              </div>
              <div className='details'>
                <h4 className='title'>
                  <a href='shop-details.html'>AirPods</a>
                </h4>
                <div className='ratting'>
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                </div>
                <h6 className='amount'>€50.00</h6>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='single-product-inner text-center'>
              <div className='thumb'>
                <img src='assets/img/product/2.png' alt='img' />
              </div>
              <div className='details'>
                <h4 className='title'>
                  <a href='shop-details.html'>Main Watch</a>
                </h4>
                <div className='ratting'>
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                </div>
                <h6 className='amount'>€50.00</h6>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='single-product-inner text-center'>
              <div className='thumb'>
                <img src='assets/img/product/3.png' alt='img' />
              </div>
              <div className='details'>
                <h4 className='title'>
                  <a href='shop-details.html'>Baseball Cap</a>
                </h4>
                <div className='ratting'>
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                </div>
                <h6 className='amount'>€50.00</h6>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='single-product-inner text-center'>
              <div className='thumb'>
                <img src='assets/img/product/4.png' alt='img' />
              </div>
              <div className='details'>
                <h4 className='title'>
                  <a href='shop-details.html'>Headphones</a>
                </h4>
                <div className='ratting'>
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                  <i className='fa fa-star' />
                </div>
                <h6 className='amount'>€50.00</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAreaOne;
