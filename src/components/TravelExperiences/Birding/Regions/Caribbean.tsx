import Image from "next/image";

export const Caribbean = () => {
  return (
    <div>
      <h3 className="mb-4">CARIBBEAN ECOREGION</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        <div>
          <p>
            Throughout the length of the Caribbean coast of Colombia there is an
            array of ecosystems, all of which are home to a startling number of
            range-restricted endemics and near-endemics which can be seen fairly
            easily during a typical 10-day tour. Starting from the northern-most
            tip of Colombia, La Guajira desert and peninsula is a dry scrub
            environment that gradually turns into dry forest the further south
            you go.
          </p>

          <p>
            Heading south, you reach possibly the jewel in Colombia’s birding
            crown. A massif so immense that it creates its own weather pattern
            with the nearby national park, Tayrona, benefitting from the moist
            airs that descend over its jungles. Here we find the towering Sierra
            Nevada de Santa Marta, recently voted by the IUCN as the world’s
            most important concentration of biodiversity and which has the
            highest concentration of endemic flora and fauna on the continent.
            Its highest peaks – which are also Colombia’s highest elevations
            (Pico Cristobal Colon and Pico Simon Bolivar at around 5,770masl or
            18,930ft) – lie just 50km as the crow flies from the hot, tropical
            Caribbean coastline below. This is the highest coastal mountain
            range on earth and it is home to an astounding 23 endemics and
            counting.
          </p>

          <p>
            To the south, a thin range called ‘Perija’ splits from the Eastern
            Andes and creates the border with Venezuela, hence many of the
            species found here are shared and classified as near-endemic (see
            Andes map).
          </p>

          <p>
            To the south-west lie the mangrove and dry tropical forests of Isla
            Salamanca, a national park with some interesting seabirds and some
            rarities hidden in the bush.
          </p>
        </div>
        <div>
          <figure>
            <Image
              src="https://la-leyenda.com/ext-images/colombian/birding/regions/big/caribbean.png"
              alt="Caribbean ecoregion - Colombia birding sites"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </figure>
          <h4 className="mt-6">BIRDING SITES</h4>
          <ol>
            <li>SFF Los Flamencos</li>
            <li>PNN Tayrona</li>
            <li>Minca</li>
            <li>El Dorado Reserve & San Lorenzo Ridge</li>
            <li>Vial Park Isla de Salamanca (PNN)</li>
            <li>Cartagena Botanical Gardens</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
