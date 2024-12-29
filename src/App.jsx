import { config } from "react-spring";
import Footer from "./Footer";
import Hero from "./Hero";
Footer;
import ContentSection from "./ContentSection";
import CarouselBasic from "./play/CarouselBasic";

function App() {
  const transition1 = {
    from: { opacity: 0, display: "none" },
    enter: { opacity: 1, display: "block" },
    leave: { opacity: 0, display: "none" },
  };
  const transition2 = {
    from: { opacity: 0, transform: "scale(0)", display: "none" },
    enter: { opacity: 1, transform: "scale(1)", display: "block" },
    leave: { opacity: 0, transform: "scale(0)", display: "none" },
  };
  const transition3 = {
    from: {
      opacity: 0,
      transform: "perspective(1000px) rotateX(180deg)",
      display: "none",
    },
    enter: {
      opacity: 1,
      transform: "perspective(1000px) rotateX(0deg)",
      display: "block",
    },
    leave: {
      opacity: 0,
      transform: "perspective(1000px) rotateX(180deg)",
      display: "none",
    },
  };
  const transition4 = {
    from: { opacity: 0, transform: "rotate(180deg)", display: "none" },
    enter: { opacity: 1, transform: "rotate(0deg)", display: "block" },
    leave: { opacity: 0, transform: "rotate(180deg)", display: "none" },
  };

  return (
    <div className="">
      <Hero />
      <ContentSection
        isCarouselReverse={false}
        transitionStyles={transition1}
      />
      <ContentSection isCarouselReverse={true} transitionStyles={transition2} />
      <ContentSection
        isCarouselReverse={false}
        transitionStyles={transition3}
      />
      <ContentSection isCarouselReverse={true} transitionStyles={transition4} />
      <Footer />
    </div>
  );
}

export default App;
