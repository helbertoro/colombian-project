import Image from "next/image";

export const Overview = () => {
  const planDetails = [
    {
      day: "Day 1",
      description: "Arrival to Bogotá",
    },
    {
      day: "Day 2",
      description: "Flight to Yopal. Drive to Hato La Aurora",
    },
    {
      day: "Day 3",
      description: "Hato la Aurora",
    },
    {
      day: "Day 4",
      description: "Hato la Aurora",
    },
    {
      day: "Day 5",
      description: "Hato La Aurora AM. Transfer to Yopal. Fly to Bogotá",
    },
    {
      day: "Day 6",
      description: "PNN Chingaza",
    },
    {
      day: "Day 7",
      description: "Chicaque Nature Reserve",
    },
    {
      day: "Day 8",
      description: "Tabacal Lake & Enchanted garden",
    },
    {
      day: "Day 9",
      description: "Rio Claro",
    },
    {
      day: "Day 10",
      description: "Rio Claro Transfer to Medellín",
    },
    {
      day: "Day 11",
      description:
        "La Romera – Bolombolo (Antioquia wren, Grayish Piculet, Apical Flycatcher) transfer to Jardín",
    },
    {
      day: "Day 12",
      description: "Alto Ventanas",
    },
    {
      day: "Day 13",
      description:
        "Alto Ventanas medio día & Andean Cock of the Rock lek. Transfer to Manizales",
    },
    {
      day: "Day 14",
      description: "Rio Blanco Reserve. Transfer to Termales El Ruiz",
    },
    {
      day: "Day 15",
      description: "PNN Los Nevados transfer to Montezuma",
    },
    {
      day: "Day 16",
      description: "Montezuma",
    },
    {
      day: "Day 17",
      description: "Montezuma",
    },
    {
      day: "Day 18",
      description: "Montezuma. Transfer to Buga",
    },
    {
      day: "Day 19",
      description: "Buga (El Sonso Lake) Transfer to Cali",
    },
    {
      day: "Day 20",
      description: "KM 18. Fly to Bogotá",
    },
    {
      day: "Day 21",
      description: "Leave Bogota",
    },
  ];

  return (
    <div className="my-10">
      <h2>
        ANDEAN RANGES OF COLOMBIA & MAGDALENA VALLEY + LLANOS (EASTERN PLAINS)
        (21 DAYS)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        <div>
          <p>
            This tour captures the very best of the Andes of Colombia, visiting
            the sites that will swiftly take your list into the hundreds, full
            of small-range endemics, high-Andean specialities and rarities,
            whilst finishing in one of Latin America’s most unique yet unvisited
            birding destinations – the Eastern Plains of Colombia (Llanos
            Orientales). Shared only by Colombia and Venezuela, the Llanos
            provides a painter’s landscape and open riparian habitats for
            excellent birding not to mention great photo opportunities.
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
              src="https://la-leyenda.com/ext-images/colombian/birding/Magdalena-Antbird-Rio-Claro-endemic-Colombia-Alejandro-Pinto.jpeg"
              alt="Magdalena Antbird (E). Photo: Alejandro Pinto"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>
              Magdalena Antbird (E). Photo: Alejandro Pinto
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
