import { Layout } from "@/components/shared";
import { BannerInternal } from "@/components/shared";

export const EducationalTours = () => {
  return (
    <Layout>
      <div id="banner">
        <BannerInternal type="banner" />
      </div>
      <div className="container my-20">Educational Tours content</div>
      <div id="banner">
        <BannerInternal type="banner" />
      </div>
    </Layout>
  );
};
