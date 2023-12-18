const Socials = () => {
  return (
    <ul className="w-[81px] text-subTitletablet:text-[16px] desktop:text-lg desktop:w-[186px] desktop:flex desktop:flex-col desktop:items-end">
      <li className="hover-underline-animation">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="facebook"
        >
          facebook
        </a>
      </li>
      <li className="hover-underline-animation">
        <a
          href="https://www.instagram.com/dubinenko_anzhelika?igshid=NGVhN2U2NjQ0Yg%3D%3D"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="instagram"
        >
          instagram
        </a>
      </li>
      <li className="hover-underline-animation">
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="youtube"
        >
          youtube
        </a>
      </li>
      <li className="hover-underline-animation">
        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="tiktok"
        >
          tiktok
        </a>
      </li>
    </ul>
  );
};

export default Socials;
