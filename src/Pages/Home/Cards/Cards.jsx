import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="lg:pl-[10px]">
      <div className="container text-center">
        <h1>Product card</h1>
        <span>
          Create With <i className="zmdi zmdi-favorite red"></i> By:{" "}
          <strong>Deni Kurniawan</strong> From:{" "}
          <i>
            <a href="" className="wsk-btn">
              Wingerdstok
            </a>
          </i>
        </span>
      </div>

      <div className="shell">
        <div className="container">
          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
			{/* 1st */}
            <div className="col-md-3">
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
                      Description Product tell me how to change playlist height
                      size 
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
            <div className="col-md-3">
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
                      Description Product tell me how to change playlist height
                      size like 600px in html5 player. player good work now
                      check this link
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
            <div className="col-md-3">
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
                      Description Product tell me how to change playlist height
                      size like 600px in html5 player. player good work now
                      check this link
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
            <div className="col-md-3">
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
                      Description Product tell me how to change playlist height
                      size like 600px in html5 player. player good work now
                      check this link
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
          </div>
          <div className="grid gap-3 lg:gap-5 grid-cols-2 lg:grid-cols-4">
            <div className="col-md-6">
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
                      Description Product tell me how to change playlist height
                      size like 600px in html5 player. player good work now
                      check this link
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
            <div className="col-md-3">
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
                      Description Product tell me how to change playlist height
                      size like 600px in html5 player. player good work now
                      check this link
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
            <div className="col-md-3">
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
                      Description Product tell me how to change playlist height
                      size like 600px in html5 player. player good work now
                      check this link
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
            <div className="col-md-6">
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
                      Description Product tell me how to change playlist height
                      size like 600px in html5 player. player good work now
                      check this link
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
