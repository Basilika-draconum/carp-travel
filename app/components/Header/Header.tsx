"use client";
import React from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { Link } from "react-scroll";
import navLink from "../../../public/content/navigation.json";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="section-main w-full bg-header-bg bg-no-repeat bg-cover pt-9 tablet:pt-[25px]">
      <div className="container-main">
        <div className="flex justify-between mb-9 tablet:mb-[66px] desktop:mb-[72px]">
          <a
            className="cursor-pointer self-center"
            href="https://carp-travel-eosin.vercel.app/"
          >
            <Image src="/logo.svg" alt="Logo" width={61} height={33} />
          </a>
          <div className="mobile-menu md:hidden">
            <button
              className="text-subTitle uppercase tracking-[1.4px]"
              onClick={toggleMobileMenu}
            >
              Menu
            </button>
            {isMobileMenuOpen && (
              <MobileMenu closeMenu={() => setMobileMenuOpen(false)} />
            )}
          </div>
          <nav className="desktop-nav hidden tablet:flex">
            <ul className="bg-green p-8 rounded-lg flex flex-row items-center gap-12 text-subTitle text-[14px] tracking-[1.8px] desktop:gap-14">
              {navLink.map(({ label, href, duration }) => (
                <li className="cursor-pointer" key={label}>
                  <Link
                    onClick={toggleMobileMenu}
                    to={href}
                    spy
                    smooth
                    duration={duration}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="tablet:flex tablet:gap-12 ">
          <h2 className="text-xs font-light tracking-[9px] text-right mb-6 tablet:hidden">
            <span className="text-4xl font-medium tracking-[2px]">7</span>
            <span className="text-4xl font-thin tracking-[3px]">DAYS</span>
            <br /> JOURNEY
          </h2>
          <div>
            <h1 className="text-title uppercase mb-6 tablet:text-titleTb tablet:leading-none tablet:tracking-[-3px] tablet:mb-[68px] desktop:text-titleDt desktop:mb-[146px] desktop:leading-tight">
              Uncover <br />
              <span className="font-thin">Carpathian’s Secrets</span>
            </h1>
            <p className="text-subText mb-6 w-40 tablet:w-[262px] tablet:text-text desktop:w-[608px] desktop:text-[16px] desktop:leading-6 desktop:tracking-[1.4px]">
              Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
              Bukovel
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="mobile:hidden tablet:block text-sm font-light tracking-[25px] text-right mb-14 leading-normal desktop:text-[16px] desktop:tracking-[36px] desktop:mb-[181px] desktop:leading-none">
              <span className="text-titleTb font-medium tracking-[7px] desktop:text-titleDt">
                7
              </span>
              <span className="text-titleTb font-thin tracking-[8px] desktop:text-titleDt desktop:font-thin">
                DAYS
              </span>
              <br /> JOURNEY
            </h2>
            <p className="text-text text-justify mb-6 max-w-md tablet:max-w-[230px] tablet:mb-7 tablet:text-[16px] tablet:leading-5 desktop:max-w-[294px] desktop:text-[18px] desktop:leading-6 ">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>
            <Link
              className="join-button cursor-pointer uppercase text-[18px] font-bold  px-[93px] py-[14px] bg-white/10 hover:bg-white/20 tablet:px-[64px] tablet:py-[14px] desktop:py-[10px] desktop:text-[22px] "
              to="contacts"
              spy
              smooth
              duration={1500}
            >
              Join now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
