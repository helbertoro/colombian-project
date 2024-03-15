import Image from "next/image";

export const Overview = () => {
  const planDetails = [
    {
      day: "Day 1",
      description: "Arrive in Bogotá",
    },
    {
      day: "Day 2",
      description: "PNN Chingaza and Hummingbird Observatory",
    },
    {
      day: "Day 3",
      description: "Tabacal lagoon AM, PM Enchanted Garden",
    },
    {
      day: "Day 4",
      description: "PNN Sumapaz",
    },
    {
      day: "Day 5",
      description: "Monterredondo. Transfer to Villavicencio",
    },
    {
      day: "Day 6",
      description: "Bosque Bavaria. Transfer to San Jose del Guaviare",
    },
    {
      day: "Day 7",
      description: "Buenavista trail",
    },
    {
      day: "Day 8",
      description: "Diamante de las Aguas Reserve",
    },
    {
      day: "Day 9",
      description: "El Capricho",
    },
    {
      day: "Day 10",
      description: "Fly or drive back to Bogota",
    },
  ];

  return (
    <div className="my-10">
      <h2>
        EASTERN ANDES, LLANOS FOOTHILLS & AMAZON TRANSITION ZONE (10 DAYS)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        <div>
          <p>
            Discover the incredible Eastern Andes, Llanos (tropical savannas)
            foothills and be bewildered by the myriad of species that occur in
            the transition between the Orinoco plains and the vast Amazon region
            of Colombia, where these two ecosystems collide.
          </p>
          <p>
            Jungle-laden tepuy (table-top) mountains, black water lakes and
            teeming diversity lie in store for you in Guaviare. This tour is for
            birders who are looking for an amazing tour full of Amazonian and
            tropical lowland birds, mixed with the uniqueness of the tropical
            Andes foothills.
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
              src="https://la-leyenda.com/ext-images/colombian/birding/White-eared-Jacamar-Galbacyrhynchus-leucotis-Playa-Güio-Reserve.jpeg"
              alt="White-eared Jacamar. Photo: Juan Diego Castillo"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>
              White-eared Jacamar. Photo: Juan Diego Castillo
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
