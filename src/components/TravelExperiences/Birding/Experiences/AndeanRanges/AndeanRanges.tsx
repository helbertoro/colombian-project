import React, { useState } from "react";
import Image from "next/image";
import {
  Layout,
  BannerInternal,
  WhyBook,
  KeyPartners,
  Mentioned,
} from "@/components/shared";
import { birdingAndeanRanges } from "@/utils/banners";
import { Tabs } from "../Tabs/Tabs";
import {
  Overview,
  ItineraryIdeas,
  KeySites,
  TargetSpecies,
  TravelTime,
  Prices,
} from ".";

type ContentTabs = {
  [key: string]: {
    content: React.ComponentType;
  };
};

export const AndeanRanges = () => {
  const [activeItem, setActiveItem] = useState("overview");
  const contentTabs: ContentTabs = {
    overview: {
      content: Overview,
    },
    "itinerary-ideas": {
      content: ItineraryIdeas,
    },
    "key-sites": {
      content: KeySites,
    },
    "target-species": {
      content: TargetSpecies,
    },
    "travel-time": {
      content: TravelTime,
    },
    // gallery: {
    //   content: Overview,
    // },
    prices: {
      content: Prices,
    },
  };

  const handleChangeItem = (item: string) => setActiveItem(item);

  return (
    <Layout>
      <div id="banner">
        <BannerInternal photos={birdingAndeanRanges} />
      </div>
      <div className="container my-20">
        <Tabs
          content={Object.keys(contentTabs)}
          onChangeItem={handleChangeItem}
          selectedItem={activeItem}
        />
        {React.createElement(contentTabs[activeItem].content)}
      </div>
      <WhyBook section="Birding" />
      <div id="banner">
        <Image
          src="https://la-leyenda.com/ext-images/colombian/sub-banner/birding-bottom.jpeg"
          alt="Image Colombian Project Culture"
          width="0"
          height="0"
          sizes="100%"
          className="h-auto w-full"
        />
      </div>
      <div>
        <KeyPartners />
      </div>
      <div className="bg-tertiary">
        <Mentioned />
      </div>
    </Layout>
  );
};
