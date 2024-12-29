import React from "react";
import CarouselBasic from "./play/CarouselBasic";

const ContentSection = ({ isCarouselReverse, transitionStyles }) => {
  return (
    <main
      className={`flex flex-col w-full justify-around py-[149px] md:px-[50px] items-center md:flex-row ${
        isCarouselReverse && "flex-col-reverse gap-4 bg-neutral-400"
      }`}
    >
      <div className="flex w-[80%] md:w-[40%] px-[50] flex-col text-center">
        <h2>This is the Content heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae numquam
          voluptatum, nisi non neque ad consectetur est nemo inventore soluta
          doloribus voluptatibus repellendus voluptas sed cumque quas quasi
          dolor quo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae numquam
          voluptatum, nisi non neque ad consectetur est nemo inventore soluta
          doloribus voluptatibus repellendus voluptas sed cumque quas quasi
          dolor quo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae numquam
          voluptatum, nisi non neque ad consectetur est nemo inventore soluta
          doloribus voluptatibus repellendus voluptas sed cumque quas quasi
          dolor quo!
        </p>
      </div>
      <div className="flex w-[80%] md:w-[40%] px-[50] flex-col ">
        <CarouselBasic
          transitionStyles={transitionStyles}
          className="w-[100%] h-[100%] flex relative"
        />
      </div>
    </main>
  );
};

export default ContentSection;
