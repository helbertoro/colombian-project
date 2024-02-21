import Image from "next/image";
import { Layout } from "@/components/shared";
import { teamContent } from "./teamContent";
import { tourLeadersContent } from "./tourLeadersContent";
import { BannerInternal } from "@/components/shared";
import { theTeamBanner } from "@/utils/banners";

export const TheTeam = () => {
  return (
    <Layout>
      <div id="banner">
        <BannerInternal photos={theTeamBanner} />
      </div>
      <div className="container my-20">
        <h1>OUR TEAM</h1>
        <p>
          The team at The Colombian Project is our key to success. We’re very
          proud and happy to include within our team tourism professionals with
          a very high level of bilingualism who are able and willing to come up
          with the best Colombia experiences around. Find out who they are and
          what they do below.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
          {teamContent.map((member, index) => (
            <div key={`team-member-${index}`}>
              <Image
                src={`https://la-leyenda.com/ext-images/colombian/about/team/${member.photo}`}
                alt="Image Colombian Project Culture"
                width="0"
                height="0"
                sizes="100%"
                className="mb-3 h-auto w-full rounded-lg shadow-lg"
              />
              <h3>{member.name}</h3>
              <p>{member.rol}</p>
            </div>
          ))}
        </div>
        <h2 className="mt-4 text-center text-primary">TOUR LEADERS</h2>
        <div className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
          {tourLeadersContent.map((member, index) => (
            <div key={`tour-leader-${index}`}>
              <Image
                src={`https://la-leyenda.com/ext-images/colombian/about/leaders/${member.photo}`}
                alt="Image Colombian Project Culture"
                width="0"
                height="0"
                sizes="100%"
                className="mb-3 h-auto w-full rounded-lg shadow-lg"
              />
              <h3>{member.name}</h3>
              <p>{member.rol}</p>
            </div>
          ))}
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
