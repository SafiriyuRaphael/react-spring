import React from "react";
import { useTransition, animated } from "react-spring";
import { useState } from "react";
import { useEffect } from "react";

const UseTransition = () => {
    const DATA = [1, 2, 3];
    const COLORS = ['orange','pink','purple']

    const [colors,setColors]= useState(COLORS)
    const [colorChange, setColorChange] = useState(0)

    useEffect(()=>{
        const interval= setInterval(() => {
            setColorChange((prevIndex)=>(prevIndex+1) % COLORS.length)
        }, 2000);

        return ()=>{
            clearInterval(interval)
        }
    },[])

    useEffect(()=>{
        setColors(COLORS[colorChange])

        setTimeout(() => {
            setColors([])
        }, 1000);
    }, [colorChange])


  const transitions = useTransition(DATA, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 250 },
  });

  const handleMouseIn=()=>{
    setColors(COLORS)
  }
  const handleMouseOut=()=>{
    setColors([])
  }

  
  const funWithColors= useTransition(colors, {
    from:{opacity:0, transform:"perspective(1000px) rotateX(180deg)"},
    enter:{opacity:1, transform:"perspective(600px) rotateX(0deg)"},
    leave:{opacity:0, transform:"perspective(600px) rotateX(180deg)"},
    config: {duration: 500}
  })
  

  return (
    <div>
      <h2 className=" bg-orange-500">Use Transitions</h2>
      <br />
      {transitions((styles, item) =>( 
        <animated.div style={styles} className="text-[50px]">
          {item}
        </animated.div>
      ))}
      <div className="text-5xl min-h-12 w-full uppercase font-bold leading-10"
      /* onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut} */>
      {funWithColors((styles, item)=>(
        <animated.div style={styles} className={`text-${item}-500 my-7`}>
            {item}
        </animated.div>
      ))}
      </div>
    </div>
  );
};

export default UseTransition;
