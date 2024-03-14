import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export const Itinerary = () => {
  const [activeItem, setActiveItem] = useState(0);

  const Content = [
    {
      title: "Intro",
      content:
        "A brief description of the tour as a whole with some juicy tit-bits of information that you should know.",
    },
    {
      title: "Overview",
      content: "A day by day one-line rundown of what the tour has in store.",
    },
    {
      title: "Key sites",
      content:
        "The main birding sites that will be visited on the tour so clients can check listings and start to prepare their birding brains.",
    },
    {
      title: "Targets",
      content:
        "Some of the main stars of the show that will be focused on during the tour.",
    },
    {
      title: "Other itinerary ideas",
      content:
        "For those non-birders and couples with shared interests, we’ve put forward a small list of ideas that can be easily included during any given tour.",
    },
    {
      title: "Time to travel",
      content:
        "Best time of year to do this particular tour, taking into account weather and any other relevant time-related characteristics that may impact on getting the best views.",
    },
    {
      title: "No prices?",
      content:
        "Upon request. Note that a typical birding itinerary can cost anywhere between $200 to $350 USD/day per person, including all services.",
    },
  ];

  return (
    <div>
      <div className="tabs justify-center">
        {Content.map(
          (section: { title: string; content: string }, index: number) => (
            <button
              key={`Tab-${index}`}
              className={`tab flex h-auto flex-col flex-nowrap py-4 leading-none ${
                activeItem === index ? "tab-active" : ""
              }`}
              type="button"
              onClick={() => setActiveItem(index)}
            >
              <div className="mb-1 text-xl text-secondary">
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </div>
              <b className="uppercase text-primary">{section.title}</b>
            </button>
          ),
        )}
      </div>
      <p className="mt-6">{Content[activeItem].content}</p>
    </div>
  );
};
