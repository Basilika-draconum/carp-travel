interface MenuButtonProps {
  toggleMobileMenu: () => void;
}
const MenuButton: React.FC<MenuButtonProps> = ({ toggleMobileMenu }) => {
  return (
    <button
      className="text-subTitle uppercase tracking-[1.4px] cursor-pointer hover-underline-animation"
      onClick={toggleMobileMenu}
      type="button"
    >
      Menu
    </button>
  );
};

export default MenuButton;
