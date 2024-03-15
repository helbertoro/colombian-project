import Image from "next/image";

export const Overview = () => {
  const planDetails = [
    {
      day: "Day 1",
      description: "Arrive in Bogotá",
    },
    {
      day: "Day 2",
      description: "PNN Chingaza",
    },
    {
      day: "Day 3",
      description: "Chicaque Nature Reserve",
    },
    {
      day: "Day 4",
      description: "Enchanted Garden and transfer to Tabacal Lake",
    },
    {
      day: "Day 5",
      description: "Rio Claro Nature Reserve",
    },
    {
      day: "Day 6",
      description: "Rio Claro. Transfer to Medellín",
    },
    {
      day: "Day 7",
      description:
        "La Romera – Bolombolo (Antioquia wren, Greyish piculet, Apical flycatcher) transfer to Jardín",
    },
    {
      day: "Day 8",
      description: "Alto Ventanas",
    },
    {
      day: "Day 9",
      description:
        "Alto Ventanas + Andean Cock of the Rock lek. Transfer to Manizales",
    },
    {
      day: "Day 10",
      description: "Rio Blanco Nature Reserve. Transfer to Termales El Ruiz",
    },
    {
      day: "Day 11",
      description: "PNN Los Nevados transfer to Montezuma, PNN Tatama",
    },
    {
      day: "Day 12",
      description: "Montezuma",
    },
    {
      day: "Day 13",
      description: "Montezuma",
    },
    {
      day: "Day 14",
      description: "AM Montezuma. PM transfer to Cali",
    },
    {
      day: "Day 15",
      description: "El Queremal & KM 18. Return Cali for flight to Bogota",
    },
  ];

  return (
    <div className="my-10">
      <h2>
        ANDEAN RANGES (EASTERN, WESTERN, CENTRAL) & INTER-ANDEAN VALLEYS (15
        DAYS)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        <div>
          <p>
            Colombia is a collection of geographically isolated landscapes and
            nowhere is it more apparent than in its three immense Andean ranges
            which divide the country from south to north, along with the
            inter-Andean valleys of the Magdalena and Cauca Rivers found between
            them. Amongst these jungle laden folds, high-altitude tundra and
            deep valleys, endemics abound, limited to slopes, valley floors and
            various other bio-regions. This is the complete tour of the interior
            of Colombia, which even includes jaunts into the Chocó/Pacific slope
            of the Western Andes. Amazing landscapes, and even better birds.
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
              src="https://la-leyenda.com/ext-images/colombian/birding/Bar-bellied-Woodpecker-Central-Andes-Birding-Colombia-Fabio-Arias.jpeg"
              alt="Bar-bellied Woodpecker. Photo: Fabio Arias"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>Bar-bellied Woodpecker. Photo: Fabio Arias</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
