import Image from "next/image";
import { Layout } from "@/components/shared";
import { BannerInternal } from "@/components/shared";
import { combiningInterestBanner } from "@/utils/banners";

export const CombiningInterestInColombia = () => {
  return (
    <Layout>
      <div id="banner">
        <BannerInternal photos={combiningInterestBanner} />
      </div>
      <div className="container my-20">
        <div className="columns-two">
          <div>
            <div>
              <Image
                src="https://la-leyenda.com/ext-images/colombian/colombia/MTB-ride-Coffee-Region-Central-Andes-Multisport-Colombia-Colombian-Project.jpeg"
                alt="Image Colombian Project Culture"
                width="0"
                height="0"
                sizes="100%"
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div>
            <p>
              Whilst many people travel on special interest tours and holidays,
              focusing on one specific activity, hobby, interest or sport, many
              travelers are looking to delve into a range of interests during
              their time in a new country. With that in mind we love nothing
              better than to combine our various activities to really showcase
              what Colombia has to offer.
            </p>
            <p>
              Over 90% of the trip requests we receive are for bespoke holidays,
              blending cultural discovery with birding, for example, or wildlife
              watching with cycling and trekking, and we pull out all the stops
              to create an exciting mix of activities in a single trip.
            </p>
          </div>
        </div>
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
