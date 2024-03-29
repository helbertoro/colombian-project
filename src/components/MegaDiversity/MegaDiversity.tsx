import Image from "next/image";
import { Layout } from "@/components/shared";
import { BannerInternal } from "@/components/shared";
import { megaDiversityBanner } from "@/utils/banners";

export const MegaDiversity = () => {
  return (
    <Layout>
      <div id="banner">
        <BannerInternal photos={megaDiversityBanner} />
      </div>
      <div className="container">
        <div className="columns-two my-20">
          <div>
            <div>
              <figure>
                <Image
                  src="https://la-leyenda.com/ext-images/colombian/colombia/Guambiano-lady-market-Silvia-Cauca-Colombia-Culture-1.jpeg"
                  alt="Photo Misak / Guambiano woman, Silvia market, Cauca"
                  width="0"
                  height="0"
                  sizes="100%"
                  className="h-auto w-full rounded-lg shadow-lg"
                />
                <figcaption>
                  Misak / Guambiano woman, Silvia market, Cauca
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <h1>EXPLAINING COLOMBIA’S DIVERSITY</h1>
            <p>
              Colombia’s stunning mega-diversity, second in the world only to
              Brazil – a country seven times its size – can only be understood
              if you begin to examine its geography.
            </p>
            <p>
              Starting with the mountains, an Andean knot enters the country
              from Ecuador and after some 100km splits into three Andean
              mountain ranges – the Western, Central and Eastern. The highest of
              the three, the Central Andes, volcanic in its creation and
              punctuated by glacier-capped volcanoes along its length, is older
              and higher than the Western, which was created by the Nazca plate
              subduction below the South American plate, as was the Eastern
              Andes, the oldest and widest of the three ranges, noted for its
              large plateau or ‘altiplano’ on which sits the capital Bogota,
              reaching heights of over 5,350masl (17,500ft).
            </p>
            <p>
              This colossal Andean landscape or region is itself divided by two
              major rivers, the Cauca and Magdalena that flow within two
              fertile, tropical inter-Andean valleys. These mountain ranges,
              known as ‘Las Cordilleras’, essentially split the even vaster
              Amazon basin from the lowland tropical forest of the Pacific or
              ‘Chocó’ biogeographical region that stretches from the northern
              jungles of the Darien bordering Panamá along the Pacific coast to
              northern Ecuador. Here it is important to highlight that Colombia
              has not one but two major rainforests, with the jungles of the
              Pacific plain (‘Choco region’) being more diverse per KM/sq. than
              its Amazonian counterpart.
            </p>
            <p>
              Bordering the northern edge of the Amazonian plain, the Guaviare
              River roughly separates the basin of Colombia’s other large, flat
              expanse, the tropical savannas of the ‘Llanos’ (plains). This
              immense, flat grassland drains to the Orinoco River and stretches
              deep into Venezuela, with a harsh, long dry season from November
              to April. During the wet season, large areas of the Llanos are
              flooded providing the backdrop to the original Colombian cowboys –
              ‘Los Llaneros’.
            </p>
          </div>
        </div>
        <div className="mx-auto w-9/12">
          <Image
            src="https://la-leyenda.com/ext-images/colombian/megadiversity/mapa.jpeg"
            alt="Image Colombian Project Culture"
            width="0"
            height="0"
            sizes="100%"
            className="h-auto w-full"
          />
        </div>
        <div className="my-20 flex flex-wrap gap-11 md:gap-16 lg:flex-nowrap">
          <div className="w-full lg:w-9/12">
            <p>
              To the north, along the Caribbean, 1,000 miles (1,600km) of
              coastline stretch from the Darien to the northernmost tip of South
              America – La Guajira peninsula and desert on the border with
              Venezuela.
            </p>
            <p>
              Particularly special is the magical topographical accident that is
              the Sierra Nevada de Santa Marta, Colombia’s highest mountains
              which tower over 5,770masl or 18,900+ft. These snow-covered peaks
              lie just 50km as the crow flies from the stunning tropical beaches
              and jungles of Tayrona national park, making it the highest
              coastal range on Earth.
            </p>
            <p>
              This island of evolution, isolated from the Andean mountains, has,
              become, over time, yet another endemism hotspot and leads us on to
              our conclusion: Colombia’s dizzying collection of ecosystems, from
              snow-covered mountains with their various climatic zones, lush
              valleys, vast plains and impenetrable forests, to arid deserts and
              endless coastlines, each geographically isolated from one another
              and formed over millions of years, have conspired to make Colombia
              an evolutionary hotspot for an equally dazzling collection of
              flora and fauna.
            </p>
            <p>
              This natural abundance of food, fresh water and array of climatic
              conditions eventually attracted humans, who also thrived here,
              adapting and evolving into the multitudes of pre-Hispanic cultures
              that we know of today, entirely distinct from one another in
              language, culture and traditions, lords and kings over their own
              isolated pockets of the country. It is no coincidence that
              Colombia has over 70 indigenous languages that are still spoken
              today, remnants of the great and beautiful golden peoples that
              once inhabited Colombia’s territory before the arrival of the
              Spanish.
            </p>
          </div>
          <div className="flex w-full flex-row gap-4 lg:w-3/12 lg:flex-col">
            <div className="w-full">
              <figure>
                <Image
                  src="https://la-leyenda.com/ext-images/colombian/colombia/IMG_9320-2.jpeg"
                  alt="Photo Lulo, agro-ecological farm, Laguna de la Cocha, Nariño"
                  width="0"
                  height="0"
                  sizes="100%"
                  className="h-auto w-full rounded-lg shadow-lg"
                />
                <figcaption>
                  Lulo, agro-ecological farm, Laguna de la Cocha, Nariño
                </figcaption>
              </figure>
            </div>
            <div className="w-full">
              <figure>
                <Image
                  src="https://la-leyenda.com/ext-images/colombian/colombia/MTB-ride-Coffee-Region-Central-Andes-Multisport-Colombia-Colombian-Project.jpeg"
                  alt="Photo Crowned-Woodnymph, El Dorado Reserve"
                  width="0"
                  height="0"
                  sizes="100%"
                  className="h-auto w-full rounded-lg shadow-lg"
                />
                <figcaption>Crowned-Woodnymph, El Dorado Reserve</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div id="sub">
        <Image
          src="https://la-leyenda.com/ext-images/colombian/megadiversity/White-fronted-Capuchin.jpg"
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
