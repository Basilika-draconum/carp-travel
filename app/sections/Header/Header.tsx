"use client";
import React from "react";
import MobileMenu from "../../../components/MobileMenu/MobileMenu";
import { Link } from "react-scroll";
import Navigation from "@/components/Navigation/Navigation";
import Logo from "@/components/Logo/Logo";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const disableBodyScroll = () => {
    document.body.style.overflow = "hidden";
  };
  const enableBodyScroll = () => {
    document.body.style.overflow = "visible";
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Escape") {
      setMobileMenuOpen(false);
      enableBodyScroll();
    }
  };
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
      enableBodyScroll();
    }
    if (!isMobileMenuOpen) {
      setMobileMenuOpen(true);
      disableBodyScroll();
    }
  };
  return (
    <header className="section-main w-full bg-header-bg bg-no-repeat bg-cover pt-9 tablet:pt-[25px]">
      <div className="container-main">
        <div className="flex justify-between mb-9 tablet:mb-[66px] desktop:mb-[72px]">
          <Logo />
          <div className="md:hidden">
            <button
              className="text-subTitle uppercase tracking-[1.4px] cursor-pointer hover:underline hover:underline-offset-2"
              onClick={toggleMobileMenu}
              type="button"
            >
              Menu
            </button>
            {isMobileMenuOpen && (
              <MobileMenu closeMenu={() => toggleMobileMenu()} />
            )}
          </div>
          <Navigation toggleMobileMenu={toggleMobileMenu} />
        </div>
        <div className="tablet:flex tablet:gap-12 ">
          <h2 className="text-xs font-light tracking-[9px] text-right mb-6 tablet:hidden">
            <span className="text-4xl font-medium tracking-[2px]">7</span>
            <span className="text-4xl font-thin tracking-[3px]">DAYS</span>
            <br /> JOURNEY
          </h2>
          <div>
            <h1 className="text-title uppercase mb-6 tablet:text-titleTb tablet:leading-none tablet:tracking-[-3px] tablet:mb-[90px] desktop:text-titleDt desktop:mb-[146px] desktop:leading-tight">
              Uncover <br />
              <span className="font-thin">Carpathian’s Secrets</span>
            </h1>
            <p className="text-subText mb-6 w-40 tablet:w-[262px] tablet:text-text desktop:w-[608px] desktop:text-[16px] desktop:leading-6 desktop:tracking-[1.4px]">
              Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
              Bukovel
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="hidden tablet:block text-sm font-light tracking-[25px] text-right mb-14 leading-none desktop:text-[16px] desktop:tracking-[36px] desktop:mb-[181px]">
              <span className="text-titleTb font-medium tracking-[7px] desktop:text-titleDt">
                7
              </span>
              <span className="text-titleTb font-thin tracking-[8px] desktop:text-titleDt desktop:font-thin">
                DAYS
              </span>
              <br /> JOURNEY
            </h2>
            <p className="text-text text-justify mb-6 max-w-md tablet:max-w-[230px] tablet:mb-7 tablet:text-[16px] tablet:leading-5 desktop:max-w-[294px] desktop:mb-16 desktop:text-[18px] desktop:leading-6 ">
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
              href="#"
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
