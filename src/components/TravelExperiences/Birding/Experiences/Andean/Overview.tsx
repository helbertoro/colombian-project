import Image from "next/image";

export const Overview = () => {
  const planDetails = [
    {
      day: "Day 1",
      description: "Arrive to Bogota.",
    },
    {
      day: "Day 2",
      description:
        "Fly to Pereira, transfer to Pueblo Rico and Montezuma Lodge, PNN Tatama",
    },
    {
      day: "Day 3",
      description: "Montezuma",
    },
    {
      day: "Day 4",
      description: "Montezuma",
    },
    {
      day: "Day 5",
      description: "Montezuma, transfer to Cali",
    },
    {
      day: "Day 6",
      description: "El Queremal – Alto Anchicayá",
    },
    {
      day: "Day 7",
      description: "Anchicayá lowlands",
    },
    {
      day: "Day 8",
      description: "KM 18. Evening flight to Santa Marta",
    },
    {
      day: "Day 9",
      description: "Minca",
    },
    {
      day: "Day 10",
      description: "Santa Marta Highlands",
    },
    {
      day: "Day 11",
      description: "El Dorado and San Lorenzo ridge",
    },
    {
      day: "Day 12",
      description: "El Dorado transfer to Barranquilla or fly to Bogotá",
    },
    {
      day: "Day 13",
      description: "Fly home",
    },
  ];

  return (
    <div className="my-10">
      <h2>
        COLOMBIAN ISOLATED ENDEMICS – WESTERN ANDES, CHOCO/PACIFIC SLOPE &
        SIERRA NEVADA DE SANTA MARTA (13 DAYS)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        <div>
          <p>
            This tour will take you to the heart of Colombia’s two highest-rated
            birding zones – the Choco Andes transition, where everything you see
            is endemic (see Bangsia’s) or near-endemic (many only shared with
            Ecuador), birding along one of the great roads in the Neotropics –
            the fabled old road to Buenaventura in the Anchicaya Valley that was
            immortalized in Steven Hilty’s ‘A Guide To The Birds of Colombia’.
            Finish off in the mystical and biologically unique Sierra Nevada de
            Santa Marta – an evolutionary island of biodiversity where you have
            the chance to view over 20 endemics that occur in the San Lorenzo
            Ridge area.
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
              src="https://la-leyenda.com/ext-images/colombian/birding/Golden-chested-Tanager-Anchicaya-Colombia.jpeg"
              alt="Golden-chested Tanager (E) Photo: Anderson Muñoz"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>
              Golden-chested Tanager (E). Photo: Anderson Muñoz
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
