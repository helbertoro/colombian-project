import { Layout } from "@/components/shared";
import { BannerInternal } from "@/components/shared";
import { accordionContent } from "./accordionContent";

export const TailorMadeHolidays = () => {
  return (
    <Layout>
      <div id="banner">
        <BannerInternal type="banner" />
      </div>
      <div className="container my-20">
        <h1>TAILOR MADE TRAVEL</h1>
        <p>
          It’s a beautiful thing being able to discover something entirely
          different, frequently breath-taking and most definitely not the norm.
          Here in Colombia you have that chance with our tailor made holidays.
          That’s our promise to you.
        </p>
        <p>
          Start your journey at home and let us take you through the exciting
          process that is tailor made travel – The Colombian Project way.
        </p>

        {accordionContent.map((item, index) => (
          <div
            key={`made-travel-${index}`}
            className="collapse collapse-arrow bg-base-200"
          >
            <input type="radio" name="made-travel" />
            <div className="collapse-title text-xl font-medium">
              {item.title}
            </div>
            <div className="collapse-content">
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </div>
        ))}
      </div>
      <div id="sub">
        <BannerInternal type="sub" />
      </div>
    </Layout>
  );
};
