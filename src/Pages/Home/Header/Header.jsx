import React from "react";
import { Carousel } from "@material-tailwind/react";

const Header = () => {
  return (
    <div>
      <Carousel
        className="rounded-xl h-[200px] lg:h-[565px] mb-10"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="">
          <img
            src="https://i.ibb.co/MGQJtXK/2daa20bf-67e0-4f17-8a44-0ca30601994f-BD-1920-539.jpg"
            alt="image 1"
            className="w-[576px] lg:w-[1360px] h-[200px] lg:h-[556px] object-cover"
          />
        </div>
        <div className="">
          <img
            src="https://i.ibb.co/7RMbqg5/0edbdbeb-8bc7-4753-b3e2-432f1e04cfbf-BD-1920-300.jpg"
            alt="image 2"
            className="w-[1360px] h-[556px] object-cover"
          />
        </div>
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default Header;
