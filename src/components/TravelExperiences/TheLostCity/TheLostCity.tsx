import React, { useState } from "react";
import { Layout, WhyBook, Tabs } from "@/components/shared";
import {
  Overview,
  SampleItinerary,
  KeyLocations,
  Cultures,
  Gallery,
  TravelTime,
  Prices,
} from "./";

type ContentTabs = {
  [key: string]: {
    title: string;
    content: React.ComponentType;
  };
};

export const TheLostCity = () => {
  const [activeItem, setActiveItem] = useState("overview");
  const contentTabs: ContentTabs = {
    overview: {
      title: "Overview",
      content: Overview,
    },
    "sample-itinerary": {
      title: "Sample Itinerary",
      content: SampleItinerary,
    },
    "key-locations": {
      title: "Key Locations",
      content: KeyLocations,
    },
    cultures: {
      title: "Cultures",
      content: Cultures,
    },
    gallery: {
      title: "Gallery",
      content: Gallery,
    },
    "travel-time": {
      title: "Travel Time",
      content: TravelTime,
    },
    prices: {
      title: "Prices",
      content: Prices,
    },
  };

  const handleChangeItem = (item: string) => {
    setActiveItem(item);
  };

  return (
    <Layout>
      <div className="h-96 bg-neutral text-accent">Banner 1</div>
      <div className="container my-20">
        <Tabs
          content={Object.keys(contentTabs)}
          onChangeItem={handleChangeItem}
          selectedItem={activeItem}
        />
        {React.createElement(contentTabs[activeItem].content)}
        <WhyBook section="TheLostCity" />
      </div>
      <div className="h-96 bg-neutral text-accent">Banner 2</div>
    </Layout>
  );
};
