'use client';

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Work from '@/components/Work';
import Stripe from '@/components/Stripe';
import Products from '@/components/Products';
import Marquees from '@/components/Marquees';
import WorkCard from '@/components/WorkCards';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scrollContainer = document.querySelector('[data-scroll-container]');

      if (scrollContainer instanceof HTMLElement) {
        const scroll = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
        });

        return () => {
          scroll.destroy();
        };
      } else {
        console.warn("Scroll container element not found.");
      }
    }
  }, []);

  return (
    <div data-scroll-container className="h-fit w-full bg-black overflow-hidden">
      <Navbar />
      <Work />
      <Stripe />
      <Products />
      <Marquees />
      <WorkCard />
    </div>
  );
}
export default App;
