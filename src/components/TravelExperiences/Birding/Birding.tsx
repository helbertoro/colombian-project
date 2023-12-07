import { Layout } from "@/components/shared";
import { BannerInternal } from "@/components/shared";

export const Birding = () => {
  return (
    <Layout>
      <div id="banner">
        <BannerInternal type="banner" />
      </div>
      <div className="container my-20">Birding content</div>
      <div id="banner">
        <BannerInternal type="banner" />
      </div>
    </Layout>
  );
};
