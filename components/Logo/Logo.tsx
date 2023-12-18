import Image from "next/image";

const Logo = () => {
  return (
    <a className="cursor-pointer self-center" href="/" aria-label="logo">
      <Image
        src="/icons/logo.svg"
        alt="Logo"
        width={61}
        height={33}
        priority={true}
      />
    </a>
  );
};

export default Logo;
