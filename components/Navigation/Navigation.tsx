import navLink from "../../public/content/navigation.json";
import { Link } from "react-scroll";

interface ToggleMobileMenuProps {
  toggleMobileMenu: () => void;
}
const Navigation: React.FC<ToggleMobileMenuProps> = ({ toggleMobileMenu }) => {
  return (
    <nav className="desktop-nav hidden tablet:flex">
      <ul className="bg-green p-8 rounded-lg flex flex-row items-center gap-12 text-subTitle text-[14px] tracking-[1.8px] desktop:gap-14">
        {navLink.map(({ label, href, duration }) => (
          <li className="cursor-pointer hover-underline-animation" key={label}>
            <Link
              onClick={toggleMobileMenu}
              to={href}
              spy
              smooth
              duration={duration}
              href="#"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
