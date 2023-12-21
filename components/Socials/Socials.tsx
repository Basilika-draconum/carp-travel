import { Social } from "@/entities/types";

interface SocialsProps {
  socials: Social[];
}

const Socials: React.FC<SocialsProps> = ({ socials }) => {
  return (
    <ul className="w-[81px] text-subTitletablet:text-[16px] desktop:text-lg desktop:w-[186px] desktop:flex desktop:flex-col desktop:items-end">
      {socials.map((social) => (
        <li key={social._key} className="hover-underline-animation">
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={social.label}
          >
            {social.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
