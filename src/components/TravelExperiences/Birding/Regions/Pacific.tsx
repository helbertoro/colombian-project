import Image from "next/image";

export const Pacific = () => {
  return (
    <div>
      <h3 className="mb-4">PACIFIC ECOREGION</h3>
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_250px] sm:gap-8">
        <div>
          <p>
            The Pacific coast of Colombia – a 1,000 mile playground for pregnant
            humpbacks and their eventual offspring and a land of impassable wet
            forest that is a haven for life in general. The forested lowland
            plains of this relatively narrow strip of land between the Pacific
            Ocean and the mountains of the Western Andes runs from the equally
            impressive and humid jungles of the Darien, down to the northwest
            coast of Ecuador. This forest is hugely diverse.
          </p>
          <p>
            Amphibians thrive here as do every other type of animal and insect,
            especially birds. It is one of the wettest places on earth and it
            rains an average of 250 to 300 days of the year. This is true ‘wet’
            or ‘rainforest’ according to Holdridge as there is a thin belt of
            land, where the Western Andes begin to rise that records over
            8,000mm (8m) of rain a year – astonishing. The Pacific is home to
            two Colombia endemics as most species are shared with Ecuador.
          </p>
          <p>
            The vast majority of the Pacific Chocó is in very good to pristine
            state of conservation and settlements are small. As a result of a
            scarce population, infrastructure is generally poor and most birding
            takes place along the coast in beachside lodges, shrouded in jungle
            but with a sea view. Species here abound in the canopy, a mixture of
            honeycreepers, parrots and toucans, docile puffbirds and many, many
            more. Most are range restricted and, if clients haven’t birded in
            Ecuador, much of what is seen on tour will be new. Three to four
            days in the Pacific will cover most of this zone’s birding
            highlights.
          </p>
          <h4>BIRDING SITES</h4>
          <ol>
            <li>Nuqui</li>
            <li>Bahia Solano / El Valle (PNN Utria)</li>
            <li>Capurgana</li>
          </ol>
        </div>
        <div>
          <figure>
            <Image
              src="https://la-leyenda.com/ext-images/colombian/birding/regions/big/pacific.png"
              alt="Pacific ecoregion - Colombia birding sites"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};
