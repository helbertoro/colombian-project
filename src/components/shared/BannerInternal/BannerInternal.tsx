import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface BannerInternalProps {
  type: string;
}

export const BannerInternal = ({ type }: BannerInternalProps) => {
  const arrowStyles = {
    top: "calc(50% - 15px)",
  };

  return (
    <Carousel
      autoPlay
      infiniteLoop
      animationHandler="fade"
      interval={4000}
      transitionTime={2000}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          className="btn absolute left-4 z-10"
          style={{ ...arrowStyles }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          className="btn absolute right-4 z-10"
          style={{ ...arrowStyles }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    >
      <div>
        <Image
          src="https://la-leyenda.com/ext-images/colombian/banner/banner.jpeg"
          alt="Image Colombian Project Culture"
          width="0"
          height="0"
          sizes="100%"
          className="h-auto w-full"
        />
      </div>
      <div>
        <Image
          src="https://la-leyenda.com/ext-images/colombian/banner/educational-tours-3.jpeg"
          alt="Image Colombian Project Culture"
          width="0"
          height="0"
          sizes="100%"
          className="h-auto w-full"
        />
      </div>
      <div>
        <Image
          src="https://la-leyenda.com/ext-images/colombian/banner/banner.jpeg"
          alt="Image Colombian Project Culture"
          width="0"
          height="0"
          sizes="100%"
          className="h-auto w-full"
        />
      </div>
      <div>
        <Image
          src="https://la-leyenda.com/ext-images/colombian/banner/educational-tours-3.jpeg"
          alt="Image Colombian Project Culture"
          width="0"
          height="0"
          sizes="100%"
          className="h-auto w-full"
        />
      </div>
    </Carousel>
  );
};
