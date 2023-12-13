import Image from "next/image";
import { Layout } from "@/components/shared";
import { BannerInternal } from "@/components/shared";
import { birdingBanner } from "@/utils/banners";

export const Birding = () => {
  return (
    <Layout>
      <div id="banner">
        <BannerInternal photos={birdingBanner} />
      </div>
      <div className="container my-20">Birding content</div>
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
