import Image from "next/image";

export const Overview = () => {
  const planDetails = [
    {
      day: "Day 1",
      description: "Arrive in Bogotá",
    },
    {
      day: "Day 2",
      description: "Fly to Inírida – Birding at Inirida river",
    },
    {
      day: "Day 3",
      description: "Sabanitas and Caño Culebra trails",
    },
    {
      day: "Day 4",
      description: "Matraca trail and Caño Cunuven",
    },
    {
      day: "Day 5",
      description: "Caño Vitina and Los Pepes trail",
    },
    {
      day: "Day 6",
      description: "Mavecure mountains",
    },
    {
      day: "Day 7",
      description: "Guaviare river and back to Bogotá",
    },
  ];

  return (
    <div className="my-10">
      <h2>INIRIDA (7 DAYS)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        <div>
          <p>
            Be one of the first to explore this stunningly diverse corner of the
            Colombian Amazon. Rack up those Amazonian white sand, flooded Varzea
            and Guiana shield forest specialities and experience the sheer
            number of birds that call this fluvial star home. Along with unique
            Orinoco ecosystems, local indigenous cultures and ancient Amazonian
            history complete the experience at Puerto Inirida.
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
              src="https://la-leyenda.com/ext-images/colombian/birding/Lafresnayes-Piculet-AP1.jpeg"
              alt="Lafresnaye’s Piculet"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>Lafresnaye’s Piculet</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
