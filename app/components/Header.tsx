"use client";
import React from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="bg-header-bg pt-9 pb-14 px-5">
      <div className="flex justify-between mb-9">
        <Image src="/logo.svg" alt="Logo" width={61} height={33} />
        <div className="mobile-menu md:hidden">
          <button onClick={toggleMobileMenu}>Menu</button>
          {isMobileMenuOpen && (
            <MobileMenu closeMenu={() => setMobileMenuOpen(false)} />
          )}
        </div>
        <nav className="desktop-nav hidden md:flex"></nav>
      </div>
      <div>
        <h1 className="text-xl font-light tracking-[9px]">
          <span className="text-4xl font-medium">7</span>
          <span className="text-4xl font-thin">DAYS</span>
          <br /> JOURNEY
        </h1>
        <h2 className="text-title uppercase mb-6">
          Uncover <br />
          <span className="font-thin">Carpathian’s Secrets</span>
        </h2>
        <p className="text-subText mb-6">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
        <p className="text-text mb-6">
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        <button className="uppercase text-[18px] font-bold border px-16 py-[18px] bg-white/10">
          Join now
        </button>
      </div>
    </div>
  );
};

export default Header;
