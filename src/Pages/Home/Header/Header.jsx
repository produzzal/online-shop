import React from "react";
import Slider from "react-slick";

const Header = () => {
  var settings = {
    autoplay: true,
    dots: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: false,
    prevArrow: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="rounded-xl h-[200px] lg:h-[565px] ">
      <Slider {...settings}>
       <div className="">
          <img
            src="https://i.ibb.co/MGQJtXK/2daa20bf-67e0-4f17-8a44-0ca30601994f-BD-1920-539.jpg"
            alt="image 1"
            className="w-[576px] lg:w-[1360px] h-[200px] lg:h-[556px] "
          />
        </div>
        <div className="">
          <img
            src="https://i.ibb.co/7RMbqg5/0edbdbeb-8bc7-4753-b3e2-432f1e04cfbf-BD-1920-300.jpg"
            alt="image 2"
            className="w-[576px] lg:w-[1360px] h-[200px] lg:h-[556px] "
          />
        </div>
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className=" w-[576px] lg:w-[1360px] h-[200px] lg:h-[556px] "
        />
      </Slider>
    </div>
  );
};

export default Header;
