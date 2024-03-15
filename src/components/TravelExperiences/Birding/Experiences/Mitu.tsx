import Image from "next/image";
import {
  Layout,
  BannerInternal,
  WhyBook,
  KeyPartners,
  Mentioned,
} from "@/components/shared";
import { birdingBanner } from "@/utils/banners";

export const Mitu = () => {
  return (
    <Layout>
      <div id="banner">
        <BannerInternal photos={birdingBanner} />
      </div>
      Andean component
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
