import GalleryButtons from "@/components/GalleryButtons/GalleryButtons";
import MobileGallery from "@/components/MobileGallery/MobileGallery";
import TitleSection from "@/components/TitleSection/TitleSection";
import GallerySlider from "@/components/GallerySlider/GallerySlider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./gallery.css";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="section-main w-full bg-gallery-bg bg-no-repeat bg-cover bg-center"
    >
      <div className="container-main">
        <TitleSection
          title1="our"
          title2="gallery"
          className="tablet:pb-16 tablet:text-center desktop:px-[104px] desktop:pb-[104px]"
        />
        <div>
          <MobileGallery />
          <div className="hidden tablet:block tablet:relative">
            <GallerySlider />
            <GalleryButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
