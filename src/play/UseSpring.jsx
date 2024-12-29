import { useSpring, animated } from "react-spring";
import { useState } from "react";
import React from "react";


const UseSpring = () => {
    const [currentPosition, setCurrentPosition] = useState(0);
/*   const spring = useSpring({
    from: { x: 0 },
    to: { x: 500 },
    config: { duration: 1000 },
  }); */

  const [spring,api]= useSpring(()=>({
    from: {x:currentPosition},
    onChange: (ev)=> {
        setCurrentPosition(ev.value.x)
    },
    config: {duration: 2000}
  }))

  const handleMouseEnter=()=>{
    api.start({
        from: {x: currentPosition},
        to: {x: 500}
    })
  }

  const handleMouseLeave =()=>{
    api.start({
        from: {x: currentPosition},
        to: {x: 0}
    })
  }

  return (
    <div>
      <h2>UseSPRING</h2>
      <br />
      <animated.div
        className="w-[100px] h-[100px] bg-red-600 rounded-full ml-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={spring}
      />
    </div>
  );
};

export default UseSpring;
