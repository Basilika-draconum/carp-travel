"use client";
import React from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { Link } from "react-scroll";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <section className="w-full bg-header-bg bg-no-repeat bg-cover pt-9 pb-14 px-5 tablet:pt-[25px] tablet:px-8 tablet:pb-16 desktop:px-[104px] desktop:pb-[104px]">
      <div className="flex justify-between mb-9 tablet:mb-[66px] desktop:mb-[72px]">
        <Image src="/logo.svg" alt="Logo" width={61} height={33} />
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
            <li className="">
              <Link
                onClick={toggleMobileMenu}
                to="about"
                spy
                smooth
                duration={600}
              >
                About
              </Link>
            </li>
            <li className="">
              <Link
                onClick={toggleMobileMenu}
                to="services"
                spy
                smooth
                duration={800}
              >
                Services
              </Link>
            </li>
            <li className="">
              <Link
                onClick={toggleMobileMenu}
                to="career"
                spy
                smooth
                duration={1000}
              >
                Career
              </Link>
            </li>
            <li className="">
              <Link
                onClick={toggleMobileMenu}
                to="gallery"
                spy
                smooth
                duration={1000}
              >
                Gallery
              </Link>
            </li>
            <li className="">
              <Link
                onClick={toggleMobileMenu}
                to="contacts"
                spy
                smooth
                duration={1000}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="tablet:flex tablet:gap-12 ">
        <h1 className="text-xs font-light tracking-[9px] text-right mb-6 tablet:hidden">
          <span className="text-4xl font-medium tracking-[2px]">7</span>
          <span className="text-4xl font-thin tracking-[3px]">DAYS</span>
          <br /> JOURNEY
        </h1>
        <div>
          <h2 className="text-title uppercase mb-6 tablet:text-titleTb tablet:leading-none tablet:tracking-[-3px] tablet:mb-[68px] desktop:text-titleDt desktop:mb-[146px] desktop:leading-tight">
            Uncover <br />
            <span className="font-thin">Carpathian’s Secrets</span>
          </h2>
          <p className="text-subText mb-6 w-40 tablet:w-[262px] tablet:text-text desktop:w-[608px] desktop:text-[16px] desktop:leading-6 desktop:tracking-[1.4px]">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="mobile:hidden tablet:block text-sm font-light tracking-[25px] text-right mb-14 leading-normal desktop:text-[16px] desktop:tracking-[36px] desktop:mb-[181px] desktop:leading-none">
            <span className="text-titleTb font-medium tracking-[7px] desktop:text-titleDt">
              7
            </span>
            <span className="text-titleTb font-thin tracking-[8px] desktop:text-titleDt desktop:font-thin">
              DAYS
            </span>
            <br /> JOURNEY
          </h1>
          <p className="text-text text-justify mb-6 max-w-md tablet:max-w-[230px] tablet:mb-7 tablet:text-[16px] tablet:leading-5 desktop:max-w-[294px] desktop:text-[18px] desktop:leading-6 ">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <Link
            className="uppercase text-[18px] font-bold border px-[93px] py-[18px] bg-white/10 tablet:px-[64px] tablet:py-[14px] desktop:py-[16px] desktop:text-[32px]"
            to="contacts"
            spy
            smooth
            duration={1500}
          >
            Join now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
