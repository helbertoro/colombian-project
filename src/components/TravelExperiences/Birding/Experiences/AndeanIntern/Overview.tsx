import Image from "next/image";

export const Overview = () => {
  const planDetails = [
    {
      day: "Day 1",
      description: "Arrival to Bogotá",
    },
    {
      day: "Day 2",
      description:
        "PNN Chingaza & Observatorio de Colibríes (Hummingbird Observatory)",
    },
    {
      day: "Day 3",
      description:
        "Enchanted Garden & Tabacal Lake. Transfer to Magdalena Valley",
    },
    {
      day: "Day 4",
      description: "Rio Claro Nature Reserve. Afternoon at El Condor Cave",
    },
    {
      day: "Day 5",
      description: "Godoy trail AM. Transfer to Termales El Ruiz",
    },
    {
      day: "Day 6",
      description: "PNN Los Nevados. Transfer to Rio Blanco",
    },
    {
      day: "Day 7",
      description: "Rio Blanco AM. Transfer to Montezuma Lodge",
    },
    {
      day: "Day 8",
      description: "Montezuma upper altitudes",
    },
    {
      day: "Day 9",
      description: "Montezuma lower altitudes",
    },
    {
      day: "Day 10",
      description:
        "Montezuma (feeders). Transfer to Pereira to for flight to Bogota",
    },
    {
      day: "Day 11",
      description: "Fly home",
    },
  ];

  return (
    <div className="my-10">
      <h2>3 ANDEAN RANGES & MAGDALENA VALLEY ENDEMICS BONANZA (11 DAYS)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        <div>
          <p>
            If your wish is to view the endless range of avifauna found in the
            tropical Andes of Colombia, then this tour doesn’t disappoint.
            You’ll bird in some truly superb sites across the Eastern, Central
            and Western Andes, aiming to view all the restricted-range endemics
            found in the mountainous high dips and folds, cloaked in pristine
            paramo and wonderful high-Andean forest. As you descend, elfin
            forest will give way to the humid, jungle-clad Magdalena Valley
            foothills where you will search for even more Colombian or Magdalena
            endemics in this inter-Andean bioregion. A quick but very fulfilling
            tour that will make huge inroads to your tropical Andes bird list.
          </p>
          <h3 className="mb-4">OVERVIEW</h3>
          <div>
            {planDetails.map((plan, index) => (
              <p key={`plan-${index}`}>
                <b className="text-primary">{plan.day}:</b> {plan.description}
              </p>
            ))}
          </div>
        </div>
        <div>
          <figure>
            <Image
              src="https://la-leyenda.com/ext-images/colombian/birding/Crescent-faced-Antpitta-Central-Andes-Coffee-Region-BIrding-Colombia-Fabio-Arias.jpeg"
              alt="Crescent-faced Antpitta. Photo: Fabio Arias"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>Crescent-faced Antpitta. Photo: Fabio Arias</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
