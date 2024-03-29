import React, { useState } from "react";
import Image from "next/image";
import { Layout, WhyBook, Tabs } from "@/components/shared";
import { BannerInternal } from "@/components/shared";
import { cyclingBanner } from "@/utils/banners";
import {
  Overview,
  SampleItinerary,
  KeyLocations,
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

export const Cycling = () => {
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
        <BannerInternal photos={cyclingBanner} />
      </div>
      <div className="container my-20">
        <Tabs
          content={Object.keys(contentTabs)}
          onChangeItem={handleChangeItem}
          selectedItem={activeItem}
        />
        {React.createElement(contentTabs[activeItem].content)}
        <WhyBook section="Cycling" />
      </div>
      <div id="sub">
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
