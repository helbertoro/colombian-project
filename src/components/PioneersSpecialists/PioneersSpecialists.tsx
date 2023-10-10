import { Layout } from "@/components/shared";
import { BannerInternal } from "@/components/shared";

export const PioneersSpecialists = () => {
  return (
    <Layout>
      <div id="banner">
        <BannerInternal type="banner" />
      </div>
      <div className="container my-20">
        <h1>ABOUT US</h1>
        <p>
          The Colombian Project has gained a very positive national and
          international reputation for our work in Colombia. We’re known for
          being pioneers for the places we visit, for the quality of experiences
          we offer travelers and for delivering on our word, time and time
          again. Within our team we have a wide variety of personal passions and
          specialist interests which have led us to delve into specialist niches
          with confidence, ultimately providing truly memorable experiences for
          our clients. With our attitudes of ‘always learning’ and ‘never
          perfect’, we strive to understand the exact requirements of our
          clients through careful listening and consultation with the aim to
          create a Colombian holiday of a lifetime. To break this down further,
          we’ve listed below some of the key elements that make us ‘different’.
        </p>
        <div className="flex gap-8">
          <div>
            <div className="mb-4 h-96 w-full bg-primary">foto 1</div>
            <div className="h-96 w-full bg-primary">foto 2</div>
          </div>
          <div className="w-9/12">
            <h2 className="text-center">PIONEERS</h2>
            <p>
              We’ve always been at the vanguard of product development here in
              Colombia and some of the tours we’ve developed over the years have
              been firsts for the country, including:
            </p>
            <h3>EXPERT-LED HISTORY & ARCHEOLOGY:</h3>
            <p>
              A tour developed with Steppes Travel in which we brought together
              a number of national experts, none of whom had ever worked in
              tourism before, to deliver a highly insightful expert-led
              special-interest tour with many exclusive, behind the scenes
              experiences. We have been the only Colombia experience within
              their prestigious brochure.
            </p>
            <h3>WILDLIFE WATCHING:</h3>
            <p>
              We are not the only operators to offer wildlife experiences
              outside of birding, but we have taken it to the next level,
              working with some of the world’s best travel companies to deliver
              tours that not only offer a strong birding spine, but also offer
              opportunities to appreciate a wide range of other wildlife that
              exist in the diverse habitats included within our tours.
            </p>
            <h3>PRIMATES:</h3>
            <p>
              In Colombia’s first dedicated primate tour, working with Reef &
              Rainforest (UK), we gained exclusive access to national parks
              which were otherwise closed, facilitated visits to various NGOs
              and conservation projects around the country.
            </p>
            <p>
              We always explore further and take a specialist interest deeper to
              push the limits of what Colombia can offer. The best thing about
              this work is that Colombia makes it so very easy, with such rich
              natural, cultural and geographical diversity from which to create
              new experiences.
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
