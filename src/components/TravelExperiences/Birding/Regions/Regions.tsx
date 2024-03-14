import React, { useState } from "react";
import Image from "next/image";
import { Overview, Andes, Caribbean, Amazonas, Pacific, Llanos } from "./";

export const Regions = () => {
  const [activeItem, setActiveItem] = useState(0);

  const Content = [
    {
      title: "Overview",
      image: "colombia.png",
      content: <Overview />,
    },
    {
      title: "Andes ecoregion",
      image: "andes.png",
      content: <Andes />,
    },
    {
      title: "Caribbean ecoregion",
      image: "caribbean.png",
      content: <Caribbean />,
    },
    {
      title: "Amazonas ecoregion",
      image: "amazonas.png",
      content: <Amazonas />,
    },
    {
      title: "Pacific ecoregion",
      image: "pacific.png",
      content: <Pacific />,
    },
    {
      title: "Llanos ecoregion",
      image: "llanos.png",
      content: <Llanos />,
    },
  ];

  return (
    <div>
      <div className="tabs justify-center">
        {Content.map(
          (
            section: { title: string; content: any; image: string },
            index: number,
          ) => (
            <button
              key={`Tab-${index}`}
              className={`tab flex h-auto flex-col flex-nowrap py-4 leading-none ${
                activeItem === index ? "tab-active" : ""
              }`}
              type="button"
              onClick={() => setActiveItem(index)}
            >
              <div className="mb-1">
                <figure className="p-4">
                  <Image
                    src={`https://la-leyenda.com/ext-images/colombian/birding/regions/${section.image}`}
                    alt={section.title}
                    width="0"
                    height="0"
                    sizes="100%"
                    className="h-auto w-full rounded-lg shadow-lg"
                  />
                </figure>
              </div>
              <b className="uppercase text-primary">{section.title}</b>
            </button>
          ),
        )}
      </div>
      <div className="mt-6">{Content[activeItem].content}</div>
    </div>
  );
};
