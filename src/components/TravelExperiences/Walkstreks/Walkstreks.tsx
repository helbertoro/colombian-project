import React, { useState } from "react";
import Image from "next/image";
import { Layout, WhyBook, Tabs } from "@/components/shared";
import { BannerInternal } from "@/components/shared";
import { walkstreaksBanner } from "@/utils/banners";
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

export const Walkstreks = () => {
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
      title: "Destination Higlights",
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
        <BannerInternal photos={walkstreaksBanner} />
      </div>
      <div className="container my-20">
        <Tabs
          content={Object.keys(contentTabs)}
          onChangeItem={handleChangeItem}
          selectedItem={activeItem}
        />
        {React.createElement(contentTabs[activeItem].content)}
        <WhyBook section="Walkstreks" />
      </div>
      <div id="banner">
        <Image
          src="https://la-leyenda.com/ext-images/colombian/banner/sub.jpeg"
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
