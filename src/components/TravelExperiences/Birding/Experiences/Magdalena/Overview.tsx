import Image from "next/image";

export const Overview = () => {
  const planDetails = [
    {
      day: "Day 1",
      description: "Arrive in Bogotá. Night at Bogota airport hotel",
    },
    {
      day: "Day 2",
      description:
        "La Florida AM. Transfer to Indigo-capped Hummingbird Reserve (Fusagasugá). Night in Girardot",
    },
    {
      day: "Day 3",
      description: "Mana Dulce Reserve. Night in Ibagué",
    },
    {
      day: "Day 4",
      description: "Picaleñas rice fields. Laguna del Hato. Night in Honda",
    },
    {
      day: "Day 5",
      description: "Bellavista Reserve, Victoria. Transfer to Doradal",
    },
    {
      day: "Day 6",
      description: "Rio Claro Reserve & El Condor Cave",
    },
    {
      day: "Day 7",
      description: "Rio Claro Reserve. Transfer to El Paujil Reserve",
    },
    {
      day: "Day 8",
      description: "Birding at El Paujil Reserve",
    },
    {
      day: "Day 9",
      description:
        "Birding at El Paujil Reserve. Transfer to Cerulean Warbler Reserve",
    },
    {
      day: "Day 10",
      description: "Birding at Lengerke trail",
    },
    {
      day: "Day 11",
      description: "Birding at Cerulean Warbler Reserve",
    },
    {
      day: "Day 12",
      description:
        "Morning at Cerulean Warbler Reserve. Transfer to Bucaramanga airport. Fly to Bogotá",
    },
    {
      day: "Day 13",
      description: "Fly Home",
    },
  ];

  return (
    <div className="my-10">
      <h2>MAGDALENA VALLEY & EASTERN ANDES FOOTHILLS (13 DAYS)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        <div>
          <p>
            Through geographical accidents and tropical latitudes, sections of
            the great Magdalena River Valley are celebrated as some of
            Colombia’s greatest biodiversity hotspots. The super-humid forests
            that cloak the western foothills and uber-diverse lowland tropical
            forest are just full of species that have evolved here, and only
            here. During this tour you’ll explore the hot flatlands of the
            Magdalena and venture up into foothills and mountains of the Eastern
            Andes that overlook the Magdalena drainage basin. Birding here is
            excellent, with days full of endemic sightings and other rarities
            during this superb tour.
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
              src="https://la-leyenda.com/ext-images/colombian/birding/Bogota-Rail-Rallus-semiplumbeus-endemic-La-Florida.jpeg"
              alt="Bogota Rail (E) Photo: Alejandro Pinto"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>Bogota Rail (E) Photo: Alejandro Pinto</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
