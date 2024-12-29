import React from "react";
import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

const CarouselBasic = ({transitionStyles}) => {
  const slides = [
    "/img/pexels-matreding-10586216.jpg",
    "/img/pexels-jenkin-shen-12165130-19856517.jpg",
    "/img/pexels-oliver-morgan-media-400577173-28183013.jpg",
    "/img/pexels-omerderinyar-29887004.jpg"
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const transition = useTransition(activeIndex, transitionStyles);

  useEffect(()=>{
    const interval = setInterval(() => {
      setActiveIndex((active)=>(active+1) % slides.length)
    }, 5000);

    const cleanUp= ()=>{
      clearInterval(interval)
    }
    return cleanUp
  },[])

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % slides.length);
  };
  const previousSlide = () => {
    setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
  };
  return (
    <div className="w-full flex justify-around mt-12 relative">
      <div
        onClick={previousSlide}
        className="flex flex-col justify-center absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white font-extrabold text-3xl select-none hover:bg-black rounded-md p-1 cursor-pointer"
      >
        &#60;
      </div>

      <div className="min-w-[100%] min-h-[300px] w-[120%] transition-all duration-500">
        {transition((styles, item) => (
          <animated.div
          className="rounded-lg shadow-black shadow-xl"

            key={item}
            style={{
              ...styles,
              backgroundImage: `url(${slides[activeIndex]})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              display: "flex",
              position: "absolute",
              backgroundPosition: "center center",
              
            }}
          />
        ))}
      </div>
      <div
        onClick={nextSlide}
        className=" cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white font-extrabold text-3xl select-none hover:bg-black rounded-md p-1"
      >
        &#62;
      </div>
    </div>
  );
};

export default CarouselBasic;
