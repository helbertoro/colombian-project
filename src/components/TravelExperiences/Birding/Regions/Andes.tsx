import Image from "next/image";
export const Andes = () => {
  return (
    <div>
      <h3 className="mb-4">ANDES ECOREGION</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        <div>
          <p>
            The Andes of Colombia form the country’s hub, with more than 70% of
            the population living in the various cities located in their valleys
            and plateaus. The three main ‘Cordilleras’ or mountain ranges of the
            Andes are the Eastern, Central and Western, themselves separated by
            two immense inter-Andean valleys formed by the mighty Magdalena and
            Cauca rivers. The Andes of Colombia, which reach well over 5,300masl
            (17,388ft) in both the Eastern and Central and over 4,000m
            (13,123ft) in the Western, are a myriad of altitudes, vegetation
            types and climates, resulting in a spectacular diversity of birds,
            all specialists in their respective domain. No less than 50
            Colombian endemics are found in the Colombian Andes. Important areas
            of endemism include the Magdalena and Cauca valleys, isolated for
            millennia as the Andes grew, the highest reaches of the cordilleras
            (along all three ranges), the drier Chicamocha region in the
            department of Santander, and, of course, the montane belt of forest
            found on the western slope of the Western Andes where the Andean
            forests meet the tropical biogeographical region of Chocó. Species
            found here are generally also found in Ecuador, with the higher
            areas home to a number of Colombia endemics.
          </p>
          <h4>BIRDING SITES</h4>
          <ol className="columns-2">
            <li>La Florida</li>
            <li>PNN Chingaza</li>
            <li>Cerulean Warbler Reserve</li>
            <li>Tabacal Lake</li>
            <li>Jardin Encantado</li>
            <li>Monterredondo</li>
            <li>Rio Claro</li>
            <li>El Paujil</li>
            <li>Victoria</li>
            <li>Bellavista</li>
            <li>Rio Blanco</li>
            <li>Los Nevados</li>
            <li>Hotel Tinamu</li>
            <li>SFF Otun-Quimbaya</li>
            <li>Las Tangaras</li>
            <li>Montezuma Lodge (PNN Tatama)</li>
            <li>Jardin</li>
            <li>Chestnut-capped Piha Reserve</li>
            <li>La Romera Park</li>
            <li>Sonso Lake</li>
            <li>KM18</li>
            <li>El Queremal – Alto Anchicaya</li>
            <li>La Cocha</li>
            <li>Mocoa – Pitalito Road</li>
            <li>Paramo Bordoncillo</li>
            <li>Trampolin of Diversity</li>
            <li>San Agustin</li>
            <li>PNN Purace</li>
          </ol>
        </div>
        <div>
          <figure>
            <Image
              src="https://la-leyenda.com/ext-images/colombian/birding/regions/big/andes.png"
              alt="Andes ecoregion - Colombia birding sites"
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
