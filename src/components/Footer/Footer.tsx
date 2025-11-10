import React from 'react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="footer-bg bg-[#fff6e2] py-6 mt-6 relative">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <p className="text-lg mb-2 text-[#ae3321]">Thanks for scrolling</p>
        <SocialLinks />
        <div className="hidden sm:block mt-0 mb-0 text-[8rem] md:text-[12rem] sm:text-[6rem] leading-none">
          <h2 className="font-bold bricolage text-[#ae3321]">shiftd.design</h2>
        </div>
      </div>
    </footer>
  );
}
