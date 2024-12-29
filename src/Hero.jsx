import React from "react";
import { useTransition, animated } from "react-spring";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [heading, setHeading] = useState(false);

  const transitions = useTransition(heading, {
    from: { opacity: 0, transform: "translateY(-50px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-50px)" },
    config: { duration: 800 },
  });

  useEffect(() => {
    setHeading(true);

  }, []);

  return (
    <main className="flex flex-grow items-center justify-center text-center space-y-4 bg-gradient-to-r from-blue-400 to-blue-600 h-screen w-screen">
      {transitions((styles, item) => (
        <animated.div style={styles}>
         {item && <>
          <h1 className="font-bold text-white md:text-5xl sm:text-5xl lg:text-6xl ">Welcome to the Carousel</h1>
          <p className=" text-gray-300 font-bold"> This is a simple landing page of carousel</p>
         </> }
        </animated.div>
      ))}
    </main>
  );
};

export default Hero;
