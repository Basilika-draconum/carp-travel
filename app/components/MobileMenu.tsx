import React from "react";

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
      <ul className="bg-green p-8 rounded-lg">
        <li className="">
          <a onClick={closeMenu} href="#">
            About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
