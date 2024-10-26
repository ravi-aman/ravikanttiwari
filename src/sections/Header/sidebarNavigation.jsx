import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from './Header';
import Link from './sidebarLink';
import Curve from './sidebarCurve';
import Footer from './sidebarFooter';

const navItems = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Work",
    href: "#work",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Index() {
  const path = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(path);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className="font-lexend h-screen bg-gray-800 fixed right-0 top-0 text-white z-30"
    >
      <div className="box-border h-full p-24 flex flex-col justify-between">
        <div onMouseLeave={() => { setSelectedIndicator(path) }} className="flex flex-col text-[56px] gap-3 mt-[80px]">
          <div className="text-gray-400 border-b border-gray-400 uppercase text-[11px] mb-[40px]">
            Navigation
          </div>
          {
            navItems.map((data, index) => {
              return <Link 
                key={index} 
                data={{ ...data, index }} 
                isActive={selectedIndicator === data.href} 
                setSelectedIndicator={setSelectedIndicator}
              />;
            })
          }
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
