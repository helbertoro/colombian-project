import { Layout } from "@/components/shared";
import { BannerInternal } from "@/components/shared";

export const TravelingInColombia = () => {
  return (
    <Layout>
      <div id="banner">
        <BannerInternal type="banner" />
      </div>
      <div className="container my-20">
        <div className="columns-two">
          <div>
            <h1>TRAVELLING IN COLOMBIA</h1>
            <p>
              Travel in Colombia has improved greatly due to significant
              government investment in road and air travel infrastructure.
            </p>
            <p>
              While many internal flights still connect through Bogota which can
              lengthen journey times, each month there are more and more direct
              flights between major cities and destinations such as Medellin,
              Cartagena, and Cali. More low-cost carriers are entering the
              market which will hopefully inject some much needed competition
              over the next few years.
            </p>
            <p>
              Generally, flights are punctual with a wide range of flight times
              and good service. More remote locations are served by experienced
              airlines such as Satena which, although operate a restricted
              baggage allowance policy, do provide high-quality and reliable
              services.
            </p>
          </div>
          <div>
            <div className="h-96 w-full bg-primary">img</div>
          </div>
        </div>
        <div className="columns-two">
          <div>
            <div className="h-96 w-full bg-primary">img</div>
          </div>
          <div>
            <p>
              Road connections are very good to excellent between major cities
              and regions thanks to the construction of new 4G highways, with
              most secondary and tertiary (unpaved) roads in good condition.
              While there are certainly some unpaved, bumpy roads in parts, a
              good 4×4 network ensures travel to even very remote jungle or
              mountain lodges is never too difficult.
            </p>
            <p>
              Hotel infrastructure is growing and there are more high-quality
              hotels opening up all the time. Generally in major cities there is
              a hotel for every type of client with the star-level
              understandably lowering the more remote you go. That said, even in
              the most remote locations we have sourced clean, comfortable and
              unique accommodations for our clients.
            </p>
          </div>
        </div>
      </div>
      <div id="sub">
        <BannerInternal type="sub" />
      </div>
    </Layout>
  );
};
