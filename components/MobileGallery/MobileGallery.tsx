import Image from "next/image";
import gallery from "../../public/content/gallery.json";

const MobileGallery = () => {
  return (
    <ul className="flex flex-col justify-center items-center tablet:hidden">
      {gallery.slice(3).map((img) => (
        <li key={img.id}>
          <Image
            src={img.image}
            alt={img.alt}
            width={280}
            height={187}
            loading="lazy"
            className="mt-8"
          />
        </li>
      ))}
    </ul>
  );
};

export default MobileGallery;
