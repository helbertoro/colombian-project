import Image from "next/image";
import { Layout } from "@/components/shared";
import { BannerInternal } from "@/components/shared";
import { pioneersBanner } from "@/utils/banners";

export const PioneersSpecialists = () => {
  return (
    <Layout>
      <div id="banner">
        <BannerInternal photos={pioneersBanner} />
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
        <h2 className="mt-8 block text-center">PIONEERS</h2>
        <div className="flex flex-wrap gap-11 md:gap-16 lg:flex-nowrap">
          <div className="flex w-full flex-row gap-4 lg:w-4/12 lg:flex-col">
            <div className="mb-4 w-full">
              <figure>
                <Image
                  src="https://la-leyenda.com/ext-images/colombian/pioneers-specialists/Group-photo-in-Santa-Marta-PHOTO-BY-KARIN-BEUMER-BROWNER.jpeg"
                  alt="Group photo in Santa Marta, El Dorado Reserve, Sierra Nevada de Santa Marta"
                  width="0"
                  height="0"
                  sizes="100%"
                  className="h-auto w-full rounded-lg shadow-lg"
                />
                <figcaption>
                  Group photo in Santa Marta, El Dorado Reserve, Sierra Nevada
                  de Santa Marta
                </figcaption>
              </figure>
            </div>
            <div className="w-full">
              <figure>
                <Image
                  src="https://la-leyenda.com/ext-images/colombian/pioneers-specialists/Santa-Marta-White-fronted-Capuchin-Endemic-primate-Tayrona-Colombia-Colombian-Project.jpeg"
                  alt="Santa Marta White fronted Capuchin, PNN Tayrona"
                  width="0"
                  height="0"
                  sizes="100%"
                  className="h-auto w-full rounded-lg shadow-lg"
                />
                <figcaption>
                  Santa Marta White fronted Capuchin, PNN Tayrona
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="w-full lg:w-9/12">
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
