import React from "react";
import { Link } from "react-router-dom";

const BlogArea = () => {
  return (
    <div className='blog-area pd-top-120'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8' data-aos='fade-up' data-aos-delay='300'>
            <div className='single-blog-inner style-large'>
              <div className='thumb'>
                <img src='assets/img/blog/1.png' alt='img' />
              </div>
              <div className='details p-0'>
                <div className='cat'>
                  <Link to='#'>Victory</Link>
                </div>
                <h2 className='title'>
                  <Link to='/blog-details'>THE FIRST WEB3 GAME like</Link>
                </h2>
                <ul className='blog-meta'>
                  <li>
                    <i className='far fa-user' /> By Admin
                  </li>
                  <li>
                    <i className='far fa-calendar-alt' /> March 10, 2024
                  </li>
                  <li>
                    <i className='far fa-comments' /> Category
                  </li>
                </ul>
                <p>
                  We think your skin should look and refhed matted Nourish your
                  outecon secture’ar inner deauty with our essential infused
                  include hits like have the best online games.
                </p>
                <Link className='read-more-text mt-3' to='/blog-details'>
                  Read More <i className='fas fa-angle-double-right pt-1' />
                </Link>
              </div>
            </div>
            <div className='single-blog-inner style-large'>
              <div className='thumb'>
                <img src='assets/img/blog/2.png' alt='img' />
              </div>
              <div className='details p-0'>
                <div className='cat'>
                  <Link to='#'>Victory</Link>
                </div>
                <ul className='blog-meta'>
                  <li>
                    <i className='far fa-user' /> By Admin
                  </li>
                  <li>
                    <i className='far fa-folder-open' /> Category
                  </li>
                </ul>
                <h2 className='title'>
                  <Link to='/blog-details'>
                    Successful Agricultural Guide to Running Beginner
                  </Link>
                </h2>
                <p>
                  Aliquam eros justo, posuere loborti viverra lao ullamcorper
                  posuere viverra .Aliquam eros justo, posuere Aliquam eros
                  justo, posuere loborti viverra laoreet matti ullamcorper
                </p>
                <Link className='btn btn-base mt-3' to='/service-details'>
                  Read More <i className='fa fa-arrow-right ' />
                </Link>
              </div>
            </div>
            <div className='single-blog-inner style-large'>
              <div className='thumb'>
                <img src='assets/img/blog/3.png' alt='img' />
              </div>
              <div className='details p-0'>
                <div className='cat'>
                  <Link to='#'>Victory</Link>
                </div>
                <ul className='blog-meta'>
                  <li>
                    <i className='far fa-user' /> By Admin
                  </li>
                  <li>
                    <i className='far fa-folder-open' /> Category
                  </li>
                </ul>
                <h2 className='title'>
                  <Link to='/blog-details'>
                    A Beginner's Guide to Running a Successful Agricultural
                  </Link>
                </h2>
                <p>
                  Aliquam eros justo, posuere loborti viverra lao ullamcorper
                  posuere viverra .Aliquam eros justo, posuere Aliquam eros
                  justo, posuere loborti viverra laoreet matti ullamcorper
                </p>
                <Link className='btn btn-base mt-3' to='/service-details'>
                  Read More <i className='fa fa-arrow-right' />
                </Link>
              </div>
            </div>
            <div className='pagination'>
              <Link className='prev page-numbers' to='#'>
                <i className='fa fa-angle-left' />
              </Link>
              <Link className='page-numbers' to='#'>
                1
              </Link>
              <span className='page-numbers current'>2</span>
              <Link className='page-numbers' to='#'>
                3
              </Link>
              <Link className='next page-numbers' to='#'>
                <i className='fa fa-angle-right' />
              </Link>
            </div>
          </div>
          <div
            className='col-lg-4 col-12'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='td-sidebar'>
              <div className='widget widget_author'>
                <div className='thumb'>
                  <img src='assets/img/widget/author.png' alt='blog' />
                </div>
                <div className='details'>
                  <h4>ABOUT AUTHOR</h4>
                  <p className='mb-4'>
                    We think your skn should looresk referyd matter Nourish
                    yours outecwo resnsectr our essential products
                  </p>
                  <img src='assets/img/widget/signature.png' alt='blog' />
                </div>
              </div>
              <div className='widget widget_catagory'>
                <h4 className='widget-title'>Catagory</h4>
                <ul className='catagory-items'>
                  <li>
                    <Link to='/blog'>
                      <i className='fas fa-caret-right' /> Business{" "}
                      <span>3</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/blog'>
                      <i className='fas fa-caret-right' /> Finance{" "}
                      <span>7</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/blog'>
                      <i className='fas fa-caret-right' /> Web Design{" "}
                      <span>2</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/blog'>
                      <i className='fas fa-caret-right' /> Counsiling{" "}
                      <span>3</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/blog'>
                      <i className='fas fa-caret-right' /> IT Service{" "}
                      <span>5</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='widget widget-recent-post'>
                <h4 className='widget-title'>Recent News</h4>
                <ul>
                  <li>
                    <div className='media'>
                      <div className='media-left'>
                        <img src='assets/img/widget/1.png' alt='blog' />
                      </div>
                      <div className='media-body align-self-center'>
                        <h6 className='title'>
                          <Link to='/blog-details'>THE FIRST WEB3 GAME</Link>
                        </h6>
                        <div className='post-info'>
                          <i className='far fa-calendar-alt' />
                          <span>15 October</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='media'>
                      <div className='media-left'>
                        <img src='assets/img/widget/2.png' alt='blog' />
                      </div>
                      <div className='media-body align-self-center'>
                        <h6 className='title'>
                          <Link to='/blog-details'>
                            Startup Ideas for Digital Design
                          </Link>
                        </h6>
                        <div className='post-info'>
                          <i className='far fa-calendar-alt' />
                          <span>15 October</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='media'>
                      <div className='media-left'>
                        <img src='assets/img/widget/3.png' alt='blog' />
                      </div>
                      <div className='media-body align-self-center'>
                        <h6 className='title'>
                          <Link to='/blog-details'>
                            ACROSS MOBILE or PC game!
                          </Link>
                        </h6>
                        <div className='post-info'>
                          <i className='far fa-calendar-alt' />
                          <span>15 October</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='widget widget_tag_cloud mb-0'>
                <h4 className='widget-title'>Tags</h4>
                <div className='tagcloud'>
                  <Link to='#'>Crazy Games</Link>
                  <Link to='#'>Post Type</Link>
                  <Link to='#'>Who Stickman Hook </Link>
                  <Link to='#'>Playhop</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
