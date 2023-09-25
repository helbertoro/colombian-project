import { Layout } from "@/components/shared";

export const CombiningInterestInColombia = () => {
  return (
    <Layout>
      <div className="h-96 bg-neutral text-accent">Banner 1</div>
      <div className="container my-20">
        <div className="columns-two">
          <div>
            <div className="h-96 w-full bg-primary">img</div>
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
      <div className="h-96 bg-neutral text-accent">Banner 2</div>
    </Layout>
  );
};
