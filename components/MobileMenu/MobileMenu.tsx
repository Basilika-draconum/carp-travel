import { Link } from "react-scroll";
import { NavigationLink } from "@/entities/types";

interface MobileMenuProps {
  closeMenu: () => void;
  data: NavigationLink[];
}
const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu, data }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
      <button
        className="absolute top-14 right-5 text-subTitle uppercase tracking-[1.4px] cursor-pointer hover:underline hover:underline-offset-2"
        onClick={closeMenu}
        type="button"
        aria-label="close"
      >
        Close
      </button>
      <ul className="bg-green p-8 rounded-lg flex flex-col items-center gap-12 text-subTitle text-[18px] tracking-[1.8px]">
        {data.map(({ label, href, duration }) => (
          <li className="cursor-pointer hover-underline-animation" key={label}>
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
