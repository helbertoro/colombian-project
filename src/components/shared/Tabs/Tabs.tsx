import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGlobe,
  faCalendarCheck,
  faMap,
  faSigning,
  faImage,
  faAddressBook,
  faMoneyBill,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";

interface TabsProps {
  content: string[];
  onChangeItem: (item: string) => void;
  selectedItem: string;
}

type OptionsContent = {
  [key: string]: {
    title: string;
    icon: IconDefinition;
  };
};

export const Tabs = ({ content, onChangeItem, selectedItem }: TabsProps) => {
  const Options: OptionsContent = {
    overview: {
      title: "Overview",
      icon: faGlobe,
    },
    "sample-itinerary": {
      title: "Sample Itinerary",
      icon: faCalendarCheck,
    },
    "key-locations": {
      title: "Key Locations",
      icon: faMap,
    },
    cultures: {
      title: "Cultures",
      icon: faSigning,
    },
    gallery: {
      title: "Gallery",
      icon: faImage,
    },
    "travel-time": {
      title: "Travel Time",
      icon: faAddressBook,
    },
    prices: {
      title: "Prices",
      icon: faMoneyBill,
    },
    "destination-highlights": {
      title: "Destination Highlights",
      icon: faPaw,
    },
  };

  return (
    <div>
      <div className="tabs justify-center">
        {content.map((item: string, index: number) => (
          <button
            key={`Tab-${index}`}
            className={`tab flex h-auto flex-col flex-nowrap py-4 leading-none ${
              selectedItem === item ? "tab-active" : ""
            }`}
            type="button"
            onClick={() => onChangeItem(item)}
          >
            <div className="mb-1 text-xl text-secondary">
              <FontAwesomeIcon icon={Options[item].icon} />
            </div>
            <b className="uppercase text-primary">{Options[item].title}</b>
          </button>
        ))}
      </div>
    </div>
  );
};
