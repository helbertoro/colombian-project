import Image from "next/image";
import { Layout } from "@/components/shared";
import { BannerInternal } from "@/components/shared";
import { birdingBanner } from "@/utils/banners";

export const Birding = () => {
  return (
    <Layout>
      <div id="banner">
        <BannerInternal photos={birdingBanner} />
      </div>
      <div id="content-intro">
        <h1 className="mt-8">COLOMBIA BIRDING</h1>
        <div className="bg-texture bg-neutral pb-5 pt-8">
          <div className="mx-auto w-full px-3 text-center text-base-100 sm:w-3/4 md:w-2/4">
            <p>
              The word ‘Colombia’ sparks imagination and wonder when mentioned
              in birding circles. It is the mecca for neo-tropical birding,
              being home to over 1,950 recorded species with more being found
              all the time as the country’s vast territory is explored during
              this time of transition and peace.
            </p>
            <p>
              This startling amount represents close to 20% of the world’s total
              number of birds. Among this mouth-watering list there are at least
              84 ‘country endemics’ found in Colombia’s various isolated
              geo-regions and ecosystems, the evolutionary results of the
              complex and extreme Andean topography, its role as the bio-bridge
              between North, Central and South America and its 1,000-mile
              Caribbean and Pacific coastlines.
            </p>
            <p>
              To capture and showcase this astounding avian treasure trove, we
              are delighted to introduce our latest array of The Colombian
              Project Birding experiences – the culmination of years of hard
              work, experience in the birding sector and our dedication to bird
              observation, conservation and exploration.
            </p>
          </div>
        </div>
      </div>
      <div id="content-colombia" className="container my-20">
        <h2 className="text-center">BIRDING IN COLOMBIA</h2>
        <p>
          Birding in Colombia involves visits to a wide range of private
          reserves, national and regional parks, farms and private properties.
          Road connections are very good to excellent between major cities
          thanks to the construction of new 4G highways, with most secondary and
          tertiary (unpaved) roads in good condition. Major cities are never too
          far away from the main birding sites meaning that connections by both
          road and air are easy to coordinate. Infrastructure is generally
          excellent in the cities with it understandably lowering in * level the
          more remote you go. That said, the lodgings we offer are clean and
          comfortable complete with private bathrooms – thankfully these are
          abundant and getting better all the time as Colombia’s tourism sector
          strengthens.
        </p>
      </div>
      <div id="content-tabs" className="container my-20">
        Tabs
      </div>
      <div id="content-itinerary" className="container my-20">
        <h2 className="text-center">ITINERARIES - WHAT YOU NEED TO KNOW</h2>
        <p>
          We’ve included 10 of our most popular itineraries below. Our tours
          cover large swathes of the country and showcase relatively new birding
          areas, such as Inirida and the Southern Andes/Colombian Massif, both
          of which are quickly becoming havens for birders, full of stunning
          jewels that are essential ticks on any life list.
        </p>
        <div className="mt-14 flex flex-wrap gap-y-6">
          <div className="w-full px-8 text-center md:w-4/12">
            <h3 className="mb-4">A SMALL SELECTION</h3>
            <p>
              ​These itineraries are a small selection of the various birding
              tours that we offer and it’s worth mentioning that we operate
              Colombia as a whole –there is no known region or site that we do
              not visit and we are always searching for more sites so that we
              are at the forefront of the very best birding experiences in
              Colombia.
            </p>
          </div>
          <div className="w-full px-8 text-center md:w-4/12">
            <h3 className="mb-4">TAILOR MADE</h3>
            <p>
              All tours are suitable for groups or independent travelers and can
              be changed, adapted or modified in line with your specific
              requirements, such as budget, time, travel style, specific target
              list etc. There’s nothing we like better than create and mould a
              tour to your exact needs and wants.
            </p>
          </div>
          <div className="w-full px-8 text-center md:w-4/12">
            <h3 className="mb-4">SMALL GROUPS</h3>
            <p>
              We don’t do large groups for our birding tours. In fact, we don’t
              do large groups for any of our tours as it’s not what we’re about.
              We keep group sizes small to ensure a more personalized
              experience, with more contact time with the tour leader and of
              course, much better opportunities for field sightings of the
              various species.
            </p>
          </div>
        </div>
      </div>
      <div id="content-quickGuide" className="container my-20">
        <h2 className="text-center">A QUICK GUIDE TO OUR ITINERARIES</h2>
        <p>Tabs</p>
      </div>
      <div id="content-experiences" className="container my-20">
        <h2 className="text-center">OUR BIRDING EXPERIENCES</h2>
        <p>experiences</p>
      </div>
      <div id="banner">
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
