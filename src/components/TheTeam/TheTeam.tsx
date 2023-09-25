import { Layout } from "@/components/shared";
import { teamContent } from "./teamContent";
import { tourLeadersContent } from "./tourLeadersContent";

export const TheTeam = () => {
  return (
    <Layout>
      <div className="container my-20">
        <h1>OUR TEAM</h1>
        <p>
          The team at The Colombian Project is our key to success. We’re very
          proud and happy to include within our team tourism professionals with
          a very high level of bilingualism who are able and willing to come up
          with the best Colombia experiences around. Find out who they are and
          what they do below.
        </p>
        <div className="grid grid-cols-4">
          {teamContent.map((member, index) => (
            <div key={`team-member-${index}`}>
              <p>Foto</p>
              <h3>{member.name}</h3>
              <p>{member.rol}</p>
            </div>
          ))}
        </div>
        <h2 className="text-center text-primary">TOUR LEADERS</h2>
        <div className="grid grid-cols-4">
          {tourLeadersContent.map((member, index) => (
            <div key={`tour-leader-${index}`}>
              <p>Foto</p>
              <h3>{member.name}</h3>
              <p>{member.rol}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-96 bg-neutral text-accent">Banner 2</div>
    </Layout>
  );
};
