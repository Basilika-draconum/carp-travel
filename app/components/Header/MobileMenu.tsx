import { Link } from "react-scroll";
import navLinks from "../../../public/content/navigation.json";

interface MobileMenuProps {
  closeMenu: () => void;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
      <button
        className="absolute top-14 right-5 text-subTitle uppercase tracking-[1.4px] cursor-pointer"
        onClick={closeMenu}
        type="button"
      >
        Close
      </button>
      <ul className="bg-green p-8 rounded-lg flex flex-col items-center gap-12 text-subTitle text-[18px] tracking-[1.8px]">
        {navLinks.map(({ label, href, duration }) => (
          <li className="cursor-pointer" key={label}>
            <Link onClick={closeMenu} to={href} spy smooth duration={duration}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
