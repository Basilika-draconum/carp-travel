import Image from "next/image";
import React from "react";

const gallery = [
  { image: "/images/gallery1.png", alt: "mountain", id: "1" },
  { image: "/images/gallery2.png", alt: "lake", id: "2" },
  { image: "/images/gallery3.png", alt: "trees", id: "3" },
];
const Gallery = () => {
  return (
    <section className="w-full bg-gallery-bg bg-no-repeat bg-cover bg-center pt-9 pb-14 px-5">
      <h2 className="text-title">
        <span className="font-thin">Our </span>gallery
      </h2>
      <div>
        <ul className="flex flex-col justify-center items-center">
          {gallery.map((img) => (
            <Image
              key={img.id}
              src={img.image}
              alt={img.alt}
              width={280}
              height={187}
              className="mt-8 "
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
