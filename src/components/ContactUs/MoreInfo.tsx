import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faClock } from "@fortawesome/free-regular-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

export const MoreInfo = () => {
  return (
    <div className="mb-10 grid grid-cols-1 gap-10 text-center md:grid-cols-3">
      <div>
        <FontAwesomeIcon
          className="text-tertiary"
          icon={faCalendarCheck}
          size="2x"
        />
        <h2>HOW TO BOOK</h2>
        <p>
          Get in touch and we’ll take you through the simple process of booking
          your tour, based on your preferences. If you’d rather build your
          itinerary with us, we’re ready with plenty of inspiring destinations
          and experiences.
        </p>
      </div>
      <div>
        <FontAwesomeIcon
          className="text-tertiary"
          icon={faBookOpenReader}
          size="2x"
        />
        <h2>COLOMBIA INFORMATION</h2>
        <p>
          Ask us anything you want about Colombia and we’ll do our best to
          respond in an honest, unbiased and frank way. We excel at delivering
          grade ‘A’ information and ideas to our friends and clients so, please,
          don’t hesitate to ask.
        </p>
      </div>
      <div>
        <FontAwesomeIcon className="text-tertiary" icon={faClock} size="2x" />
        <h2>12 HOURS...</h2>
        <p>
          …and you’ll have our response. Thanks for getting in touch! The
          Colombian Project Team.
        </p>
      </div>
    </div>
  );
};
