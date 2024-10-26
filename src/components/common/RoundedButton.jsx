/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from './Magnetic';

export default function Index({ children, ...attributes }) {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
      .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo('enter', 'exit');
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className="relative flex items-center justify-center p-[15px] px-[60px] border border-white rounded-full cursor-pointer  group"
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        <p className="relative z-100 transition-colors duration-400 group-hover:text-white">
          {children}
        </p>
        <div
          ref={circle}
          className="absolute top-full w-full h-[150%] bg-[#c1ff5dcd] rounded-full"
        ></div>
      </div>
    </Magnetic>
  );
}
