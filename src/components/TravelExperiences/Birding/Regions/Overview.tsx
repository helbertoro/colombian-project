import Image from "next/image";

export const Overview = () => {
  return (
    <div>
      <h3 className="mb-4">COLOMBIA’S DIVERSITY EXPLAINED’</h3>
      <div className="sm:columns-2 sm:gap-8">
        <p>
          Colombia’s stunning mega-diversity, summed up simply as being second
          only to Brazil, a country which is 7 times the size, can only be
          depicted if you understand its geography.
        </p>

        <p>
          Starting with the mountains, an Andean knot enters the country from
          Ecuador and after 100km or so splits into 3 Andean chains – Western,
          Central and Eastern.
        </p>

        <p>
          The Central Andes, volcanic in its creation and punctuated by
          glacier-capped volcanoes along its length, is older than the Western,
          which was created by the Nazca plate subduction below the South
          American plate, noted for its large plateau or ‘altiplano’ on which
          the capital Bogota sits, reaching heights of over 5,350masl
          (17,500ft).
        </p>

        <p>
          This colossal Andean landscape or region is itself divided by two
          major rivers, the Cauca and Magdalena that nestle in two massive,
          fertile, tropical inter-Andean valleys. ‘Las Cordilleras’ essentially
          split the even vaster Amazon basin with the lowland tropical forest of
          the Pacific or ‘Choco’ biogeographical region that stretches from the
          jungles of the Darien down to northern Ecuador. Here it is important
          to highlight that Colombia has not one but two major rainforests, with
          the jungles of the Pacific plain (‘Choco region’) being more diverse
          per KM/sq than its Amazonian counterpart.
        </p>

        <p>
          Bordering the northern edge of the Amazonian plain the Guaviare River
          roughly separates the basin to Colombia’s other large, flat expanse.
          Here the tropical savannas of the ‘Llanos’ (plains) are the result of
          acidic soil and a climate that leaves it with a harsh, long dry season
          between November to April. During the wet season large areas of the
          Llanos are flooded providing the backdrop to the original Colombian
          cowboys – ‘Los Llaneros’. This immense, flat grassland drains to the
          Orinoco River and stretches deep into Venezuela.
        </p>

        <p>
          To the north, along the Caribbean, 1,000 miles or 1,600km of coastline
          stretch from the Darien to the northernmost tip of South America – La
          Guajira peninsula and desert on the border of Venezuela.
        </p>

        <p>
          Most special of all, is the topographical accident that is the Sierra
          Nevada de Santa Marta, Colombia’s highest mountains that tower at over
          5,700masl or 18,700ft. These snow covered peaks lie just 50km from the
          stunning beaches and jungles of Tayrona national park, as the crow
          flies. This island of evolution leads us on to our conclusion.
        </p>

        <p>
          Colombia’s collection of snow-covered mountains and their various
          climatic zones, its lush valleys, endless plains, impenetrable
          forests, arid deserts and endless coastlines are all part of a diverse
          geography formed over millions of years. This unique geography has
          enabled Colombia to shelter an equally unique diversity of avian
          fauna, perfectly adapted to its unique surroundings. Colombia is the
          land of birds, but not by chance. This section, dedicated to the
          country’s ecoregions – Andean, Pacific, Amazon, Llanos and Caribbean –
          will explain why.
        </p>

        <figure>
          <Image
            src="https://la-leyenda.com/ext-images/colombian/birding/aves.jpeg"
            alt="Black-chested Mountain-Tanager"
            width="0"
            height="0"
            sizes="100%"
            className="h-auto w-full rounded-lg shadow-lg"
          />
          <figcaption>Black-chested Mountain-Tanager</figcaption>
        </figure>
      </div>
    </div>
  );
};
