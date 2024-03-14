import Image from "next/image";

export const Amazonas = () => {
  return (
    <div>
      <h3 className="mb-4">AMAZONAS ECOREGION</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        <div>
          <p>
            When thinking of the Amazon, Colombia probably isn’t the first
            country that comes to mind, unlike Brazil, Peru or Ecuador…but that
            can be a good thing. Colombia’s portion of the great basin – largely
            unexplored until the mid-20th century – was protected by the simple
            fact of its unnavigable rivers that crisscrossed its heart. Largely
            saved from the rubber boom by this unique characteristic, the Amazon
            ecoregion of Colombia, which takes up an entire third of the
            country’s territory, is in largely excellent condition and,
            consequently, is excellent for birding. Ecosystems here are myriad
            of terra firme, flooded várzea and abundant white-sand forest, an
            indicator of the Guiana Shield’s presence via the Araracuara
            formation, which dates back 1.8 billion years at its most ancient
            points.
          </p>
          <p>
            This mixture of ecosystems, and relative easy access from major
            cities such as Bogota, means that birding in Colombia’s Amazon can
            be a very richly rewarded experience. Parrots, countless antbirds,
            cotingas, raptors, manakins, and tanagers all make up what can be a
            quite fantastic bird list from just one or two sites, such as Mitu –
            renowned for its variety of habitats; Inirida – known for its
            sandstone domes and species that only exist in this borderline
            Orinoco/Amazon juncture, and San Jose del Guaviare which offers
            excellent terra firme birding and has the advantage of the Serrania
            de La Lindosa, an Araracuara/Guiana Shield range which is home to
            all the birds that are associated with the shield. Five days to a
            week is normally sufficient for a successful birding experience.
            Leticia, Mocagua and Puerto Nariño cannot be forgotten, on the banks
            of the Amazon itself and an exciting Amazon experience – riparian
            species and hungry raptors abound near the famed PNN Amacayacu,
            which showcases the Colombian Amazon at its best.
          </p>
        </div>
        <div>
          <figure>
            <Image
              src="https://la-leyenda.com/ext-images/colombian/birding/regions/big/amazonas.png"
              alt="Amazonas ecoregion - Colombia birding sites"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </figure>
          <h4 className="mt-6">BIRDING SITES</h4>
          <ol>
            <li>Mitu</li>
            <li>Inirida</li>
            <li>San Jose del Guaviare</li>
            <li>Mocagua & Mocagua Island</li>
            <li>Leticia</li>
            <li>Puerto Nariño</li>
            <li>PNN Amacayacu</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
