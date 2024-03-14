import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface BannerInternalProps {
  photos: { image: string }[];
}

export const BannerInternal = ({ photos }: BannerInternalProps) => {
  const arrowStyles = {
    top: "calc(50% - 15px)",
  };

  const renderImages = () => {
    return photos.map((photo) => (
      <div key={photo.image}>
        <Image
          src={photo.image}
          alt="Image Colombian Project"
          width="0"
          height="0"
          sizes="100%"
          className="h-auto w-full"
        />
      </div>
    ));
  };

  return (
    <Carousel
      autoPlay
      infiniteLoop
      animationHandler="fade"
      interval={4000}
      transitionTime={2000}
      showStatus={false}
      showThumbs={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => {
        return (
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="btn absolute left-4 z-10"
              style={{ ...arrowStyles }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          )
        );
      }}
      renderArrowNext={(onClickHandler, hasNext, label) => {
        return (
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="btn absolute right-4 z-10"
              style={{ ...arrowStyles }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          )
        );
      }}
    >
      {renderImages()}
    </Carousel>
  );
};
