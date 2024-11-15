'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { redirect, usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './sidebarNavigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../components/common/RoundedButton';
import Magnetic from '../../components/common/Magnetic';



export const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}

export const slide = {
    initial: { x: 80 },
    enter: i => ({ x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
    exit: i => ({ x: 80, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } })
}

export const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } }
}
export default function Index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect(() => {
        if (isActive) setIsActive(false);
    }, [pathname]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {
                    gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" });
                },
                onEnterBack: () => {
                    gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false));
                }
            }
        });
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div
                ref={header}
                className="font-lexend absolute flex z-10 top-0 text-white p-8 justify-between w-full font-light box-border items-center"
            >
                <div className="flex cursor-pointer font-medium">
                    <p className="m-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">rk</p>
                    
                </div>
                <div className="flex items-center">
                    <Magnetic>
                        <div className="flex flex-col relative z-10 p-4 cursor-pointer font-light transition-all duration-500 ease-in-out hover:bg-[linear-gradient(180deg,#c1ff5d_30%,#ffffff_80%)] hover:text-transparent hover:bg-clip-text">
                            <div className="text-lg" onClick={() => redirect('/work')}>
                                project
                            </div>
                            <div className="absolute w-1.5 h-1.5 top-[45px] left-1/2 bg-white rounded-full transform scale-0 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className="flex flex-col relative z-10 p-4 cursor-pointer font-light transition-all duration-500 ease-in-out hover:bg-[linear-gradient(180deg,#c1ff5d_30%,#ffffff_80%)] hover:text-transparent hover:bg-clip-text">
                            <div className="text-lg" onClick={() => scrollToSection('about')}>
                                About
                            </div>
                            <div className="absolute w-1.5 h-1.5 top-[45px] left-1/2 bg-white rounded-full transform scale-0 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className="flex flex-col relative z-10 p-4 cursor-pointer font-light transition-all duration-500 ease-in-out hover:bg-[linear-gradient(180deg,#c1ff5d_30%,#ffffff_80%)] hover:text-transparent hover:bg-clip-text">
                            <div className="text-lg" onClick={() => scrollToSection('contact')}>
                                Contact
                            </div>
                            <div className="absolute w-1.5 h-1.5 top-[45px] left-1/2 bg-white rounded-full transform scale-0 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
                        </div>
                    </Magnetic>
                </div>
            </div>
            <div ref={button} className="transform scale-0 fixed right-0 z-40">
                <Rounded onClick={() => { setIsActive(!isActive); }} className="relative m-5 w-20 h-20 rounded-full bg-[#1C1D20] cursor-pointer flex items-center justify-center">
                    <div className={`w-full relative z-10`}>
                        <div className="block h-0.5 w-2/5 mx-auto bg-white relative transition-transform duration-300" style={{ top: '-5px' }}></div>
                        <div className="block h-0.5 w-2/5 mx-auto bg-white relative transition-transform duration-300" style={{ top: '5px' }}></div>
                    </div>
                </Rounded>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    );
}
