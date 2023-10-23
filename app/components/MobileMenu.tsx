import React from "react";
import { Link } from "react-scroll";

interface MobileMenuProps {
  closeMenu: () => void;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
      <button
        className="absolute top-8 right-5 text-subTitle uppercase tracking-[1.4px]"
        onClick={closeMenu}
      >
        Close
      </button>
      <ul className="bg-green p-8 rounded-lg flex flex-col items-center gap-12 text-subTitle text-[18px] tracking-[1.8px]">
        <li className="">
          <Link onClick={closeMenu} to="about" spy smooth duration={600}>
            About
          </Link>
        </li>
        <li className="">
          <Link onClick={closeMenu} to="services" spy smooth duration={800}>
            Services
          </Link>
        </li>
        <li className="">
          <Link onClick={closeMenu} to="career" spy smooth duration={1000}>
            Career
          </Link>
        </li>
        <li className="">
          <Link onClick={closeMenu} to="gallery" spy smooth duration={1000}>
            Gallery
          </Link>
        </li>
        <li className="">
          <Link onClick={closeMenu} to="contacts" spy smooth duration={1500}>
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
