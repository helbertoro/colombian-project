import { Layout } from "../shared/Layout/Layout";
import Image from "next/image";
import partners from "../../images/partners.jpeg";
import mentions from "../../images/mentions.jpeg";

export const Home = () => {
  return (
    <Layout>
      <p>
        We consider ourselves experts in what we do with the knowledge to put
        together special interest tours no matter what the niche. We measure
        ourselves against the best and always aim to offer something different
        and better if we can, taking into account the small details that make
        all the difference.
      </p>
      <div>
        <div className="container py-8">
          <h3 className="mb-3 text-center text-primary">
            KEY PARTNERS & AFFILIATIONS
          </h3>
          <Image src={partners} alt="Image Colombian Project Partners" />
        </div>
      </div>
      <div className="bg-tertiary">
        <div className="container py-8">
          <h3 className="mb-3 text-center text-accent">AS MENTIONED IN</h3>
          <Image
            src={mentions}
            alt="Image Colombian Project Mentions in the Press"
          />
        </div>
      </div>
    </Layout>
  );
};
