const GalleryButtons = () => {
  return (
    <>
      <button
        type="button"
        className="swiper-button-prev"
        aria-label="button-back"
      >
        BACK
      </button>
      <button
        type="button"
        className="swiper-button-next"
        aria-label="button-next"
      >
        NEXT
      </button>
    </>
  );
};

export default GalleryButtons;
