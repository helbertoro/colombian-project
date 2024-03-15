import Image from "next/image";

export const Overview = () => {
  const planDetails = [
    {
      day: "Day 1",
      description: "Arrive in Bogotá",
    },
    {
      day: "Day 2",
      description: "Fly to Pasto",
    },
    {
      day: "Day 3",
      description: "La Cocha Lake",
    },
    {
      day: "Day 4",
      description: "Sibundoy Valley and Paramo complex of ‘Quilinsayaco’",
    },
    {
      day: "Day 5",
      description: "The ‘Trampolin of Diversity’",
    },
    {
      day: "Day 6 – 7",
      description: "Mocoa – Campucana trails",
    },
    {
      day: "Day 8 – 9",
      description: "Pitalito Road (KM 31 & 51). Transfer to San Agustín.",
    },
    {
      day: "Day 10",
      description: "San Agustin Archaeological Park",
    },
    {
      day: "Day 11",
      description: "Puracé National Park (PNN). Transfer to Popayán",
    },
    {
      day: "Day 12",
      description: "Fly to Bogota.",
    },
  ];

  return (
    <div className="my-10">
      <h2>SOUTHERN ANDES, COLOMBIAN MASSIF & AMAZON FOOTHILLS (12 DAYS)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        <div>
          <p>
            Bird in the still-intact high-altitude forests and páramos of the
            southern Andes of Colombia, a region that is literally bursting with
            birdlife that has most likely never seen a birder’s bins before.
          </p>
          <p>
            Some of the rarest birds in Latin America call this place home.
            Descend through the legendary super-humid Amazon foothills
            transition zone, full of rarities that are unique to these
            altitudes.
          </p>
          <p>
            Finish the tour by visiting the mystical and sacred Colombian
            massif, birthplace of Colombia’s greatest rivers, such as the
            Magdalena, Cauca, Caqueta and Patia. These areas are now open to
            birders and have so many small-range and uncommon specialities in
            the canopy and undergrowth that it boggles the mind. Bird from
            tropical through to treeline climatic zones and walk away with a
            list like no other.
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
              src="https://la-leyenda.com/ext-images/colombian/birding/Blue-Crowned-Trogon-Amazon-Foothills-Churumbelos-Colombia-Bird-Colombian-Project.jpeg"
              alt="Blue-crowned Trogon"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>Blue-crowned Trogon</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
