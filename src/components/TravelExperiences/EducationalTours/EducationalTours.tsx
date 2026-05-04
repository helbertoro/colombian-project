import React, { useState } from "react";
import Image from "next/image";
import { Layout, Tabs } from "@/components/shared";
import { BannerInternal } from "@/components/shared";
import { educationalTourismBanner } from "@/utils/banners";
import {
  Overview,
  SampleItinerary,
  KeyLocations,
  DestinationHiglights,
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

export const EducationalTours = () => {
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
    "destination-highlights": {
      title: "Destination Highlights",
      content: DestinationHiglights,
    },
    // gallery: {
    //   title: "Gallery",
    //   content: Gallery,
    // },
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
      <div id="banner">
        <BannerInternal photos={educationalTourismBanner} />
      </div>
      {/* <div id="banner">
        <Image
          src="https://res.cloudinary.com/df4oqzjjm/image/upload/v1776305888/educational-tours-3_j8feul.jpg"
          alt="Image Colombian Project Culture"
          width="0"
          height="0"
          sizes="100%"
          className="h-auto w-full"
        />
      </div> */}
      <div className="container my-20">
        <Tabs
          content={Object.keys(contentTabs)}
          onChangeItem={handleChangeItem}
          selectedItem={activeItem}
        />
        {React.createElement(contentTabs[activeItem].content)}
      </div>
      <div id="sub">
        <Image
          src="https://res.cloudinary.com/df4oqzjjm/image/upload/v1776305945/sub_ts93tk.jpg"
          alt="Image Colombian Project Culture"
          width="0"
          height="0"
          sizes="100%"
          className="h-auto w-full"
        />
      </div>
    </Layout>
  );
};
