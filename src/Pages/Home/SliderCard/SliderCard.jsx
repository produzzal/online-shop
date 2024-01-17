import React from "react";
import "./SliderCard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
const SliderCard = () => {
 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      <div className="shell">
        <div className="container">
          <div className=" p-10  grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 ">
            {/* 1st */}
            <Slider {...settings}>
              <div className="col-md-3 pl-5">
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <img
                      src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"
                      alt="Product"
                      className="img-responsive"
                    />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="title-product">
                      <h3>My face not my heart</h3>
                    </div>
                    <div className="description-prod">
                      <p>
                        Description Product tell me how to change playlist
                        height size
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left">
                        <span className="price">Rp500.000</span>
                      </div>
                      <div className="wcf-right">
                        <a href="#" className="buy-btn">
                          <i className="zmdi zmdi-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd */}
              <div className="col-md-3 pl-5">
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <img
                      src="https://1.bp.blogspot.com/-b-2SgNUrFHg/WVSvmewWqgI/AAAAAAAAAK0/1K4YCcbYjhokHwV_IgiVJN9mEnQoWunIwCPcBGAYYCw/s1600/fashion-portrait-nicole-6347.jpg"
                      alt="Product"
                      className="img-responsive"
                    />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="title-product">
                      <h3>My face not my heart</h3>
                    </div>
                    <div className="description-prod">
                      <p>
                        Description Product tell me how to change playlist
                        height size like 600px in html5 player. player good work
                        now check this link
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left">
                        <span className="price">Rp500.000</span>
                      </div>
                      <div className="wcf-right">
                        <a href="#" className="buy-btn">
                          <i className="zmdi zmdi-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3rd */}
              <div className="col-md-3 pl-5">
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <img
                      src="https://1.bp.blogspot.com/-XL_Ba-178Fo/WVSvm5AbApI/AAAAAAAAAK4/X5109HTqUiAhPjbmz4NFVHcpL7ZWe6T3ACPcBGAYYCw/s1600/wow-29.jpg"
                      alt="Product"
                      className="img-responsive"
                    />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="title-product">
                      <h3>My face not my heart</h3>
                    </div>
                    <div className="description-prod">
                      <p>
                        Description Product tell me how to change playlist
                        height size like 600px in html5 player. player good work
                        now check this link
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left">
                        <span className="price">Rp500.000</span>
                      </div>
                      <div className="wcf-right">
                        <a href="#" className="buy-btn">
                          <i className="zmdi zmdi-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 4th */}
              <div className="col-md-3 pl-5">
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <img
                      src="https://3.bp.blogspot.com/-iUes8qr4uC8/WVSvl6Wf_fI/AAAAAAAAAKs/JiTUUVvdbqEC_QGGaQhuVJiezIN3LIqEgCPcBGAYYCw/s1600/IMG_5367-bp.jpg"
                      alt="Product"
                      className="img-responsive"
                    />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="title-product">
                      <h3>My face not my heart cvf ggf gfg g</h3>
                    </div>
                    <div className="description-prod">
                      <p>
                        Description Product tell me how to change playlist
                        height size like 600px in html5 player. player good work
                        now check this link
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left">
                        <span className="price">Rp500.000</span>
                      </div>
                      <div className="wcf-right">
                        <a href="#" className="buy-btn">
                          <i className="zmdi zmdi-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 pl-5">
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <img
                      src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"
                      alt="Product"
                      className="img-responsive"
                    />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="title-product">
                      <h3>My face not my heart</h3>
                    </div>
                    <div className="description-prod">
                      <p>
                        Description Product tell me how to change playlist
                        height size
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left">
                        <span className="price">Rp500.000</span>
                      </div>
                      <div className="wcf-right">
                        <a href="#" className="buy-btn">
                          <i className="zmdi zmdi-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd */}
              <div className="col-md-3 pl-5">
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <img
                      src="https://1.bp.blogspot.com/-b-2SgNUrFHg/WVSvmewWqgI/AAAAAAAAAK0/1K4YCcbYjhokHwV_IgiVJN9mEnQoWunIwCPcBGAYYCw/s1600/fashion-portrait-nicole-6347.jpg"
                      alt="Product"
                      className="img-responsive"
                    />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="title-product">
                      <h3>My face not my heart</h3>
                    </div>
                    <div className="description-prod">
                      <p>
                        Description Product tell me how to change playlist
                        height size like 600px in html5 player. player good work
                        now check this link
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left">
                        <span className="price">Rp500.000</span>
                      </div>
                      <div className="wcf-right">
                        <a href="#" className="buy-btn">
                          <i className="zmdi zmdi-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3rd */}
              <div className="col-md-3 pl-5">
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <img
                      src="https://1.bp.blogspot.com/-XL_Ba-178Fo/WVSvm5AbApI/AAAAAAAAAK4/X5109HTqUiAhPjbmz4NFVHcpL7ZWe6T3ACPcBGAYYCw/s1600/wow-29.jpg"
                      alt="Product"
                      className="img-responsive"
                    />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="title-product">
                      <h3>My face not my heart</h3>
                    </div>
                    <div className="description-prod">
                      <p>
                        Description Product tell me how to change playlist
                        height size like 600px in html5 player. player good work
                        now check this link
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left">
                        <span className="price">Rp500.000</span>
                      </div>
                      <div className="wcf-right">
                        <a href="#" className="buy-btn">
                          <i className="zmdi zmdi-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 4th */}
              <div className="col-md-3 pl-5">
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <img
                      src="https://3.bp.blogspot.com/-iUes8qr4uC8/WVSvl6Wf_fI/AAAAAAAAAKs/JiTUUVvdbqEC_QGGaQhuVJiezIN3LIqEgCPcBGAYYCw/s1600/IMG_5367-bp.jpg"
                      alt="Product"
                      className="img-responsive"
                    />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="title-product">
                      <h3>My face not my heart cvf ggf gfg g</h3>
                    </div>
                    <div className="description-prod">
                      <p>
                        Description Product tell me how to change playlist
                        height size like 600px in html5 player. player good work
                        now check this link
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left">
                        <span className="price">Rp500.000</span>
                      </div>
                      <div className="wcf-right">
                        <a href="#" className="buy-btn">
                          <i className="zmdi zmdi-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 pl-5">
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <img
                      src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"
                      alt="Product"
                      className="img-responsive"
                    />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="title-product">
                      <h3>My face not my heart</h3>
                    </div>
                    <div className="description-prod">
                      <p>
                        Description Product tell me how to change playlist
                        height size
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left">
                        <span className="price">Rp500.000</span>
                      </div>
                      <div className="wcf-right">
                        <a href="#" className="buy-btn">
                          <i className="zmdi zmdi-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd */}
              <div className="col-md-3 pl-5">
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <img
                      src="https://1.bp.blogspot.com/-b-2SgNUrFHg/WVSvmewWqgI/AAAAAAAAAK0/1K4YCcbYjhokHwV_IgiVJN9mEnQoWunIwCPcBGAYYCw/s1600/fashion-portrait-nicole-6347.jpg"
                      alt="Product"
                      className="img-responsive"
                    />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="title-product">
                      <h3>My face not my heart</h3>
                    </div>
                    <div className="description-prod">
                      <p>
                        Description Product tell me how to change playlist
                        height size like 600px in html5 player. player good work
                        now check this link
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left">
                        <span className="price">Rp500.000</span>
                      </div>
                      <div className="wcf-right">
                        <a href="#" className="buy-btn">
                          <i className="zmdi zmdi-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3rd */}
              <div className="col-md-3 pl-5">
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <img
                      src="https://1.bp.blogspot.com/-XL_Ba-178Fo/WVSvm5AbApI/AAAAAAAAAK4/X5109HTqUiAhPjbmz4NFVHcpL7ZWe6T3ACPcBGAYYCw/s1600/wow-29.jpg"
                      alt="Product"
                      className="img-responsive"
                    />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="title-product">
                      <h3>My face not my heart</h3>
                    </div>
                    <div className="description-prod">
                      <p>
                        Description Product tell me how to change playlist
                        height size like 600px in html5 player. player good work
                        now check this link
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left">
                        <span className="price">Rp500.000</span>
                      </div>
                      <div className="wcf-right">
                        <a href="#" className="buy-btn">
                          <i className="zmdi zmdi-shopping-basket"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 4th */}
              <div className="col-md-3 pl-5">
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <img
                      src="https://3.bp.blogspot.com/-iUes8qr4uC8/WVSvl6Wf_fI/AAAAAAAAAKs/JiTUUVvdbqEC_QGGaQhuVJiezIN3LIqEgCPcBGAYYCw/s1600/IMG_5367-bp.jpg"
                      alt="Product"
                      className="img-responsive"
                    />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="title-product">
                      <h3>My face not my heart cvf ggf gfg g</h3>
                    </div>
                    <div className="description-prod">
                      <p>
                        Description Product tell me how to change playlist
                        height size like 600px in html5 player. player good work
                        now check this link
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left">
                        <span className="price">Rp500.000</span>
                      </div>
                      <div className="wcf-right">
                        <a href="#" className="buy-btn">
                          <i className="zmdi zmdi-shopping-basket"></i>
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


export default SliderCard;

