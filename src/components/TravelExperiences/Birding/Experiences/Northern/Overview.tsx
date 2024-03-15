import Image from "next/image";

export const Overview = () => {
  const planDetails = [
    {
      day: "Day 1",
      description: "Arrive in Barranquilla. Night in Barranquilla",
    },
    {
      day: "Day 2",
      description: "Birding Km 4, VP Salamanca and Vale. Night in Santa Marta",
    },
    {
      day: "Day 3",
      description: "Birding around Minca and transfer to El Dorado lodge",
    },
    {
      day: "Day 4",
      description: "All day birding at San Lorenzo Ridge",
    },
    {
      day: "Day 5",
      description:
        "Birding lower altitudes of Santa Marta Mountains. Night in Santa Marta",
    },
    {
      day: "Day 6",
      description: "Bird Tinajas and Gaviotas Trails. Night in Riohacha",
    },
    {
      day: "Day 7",
      description: "Bird Camarones and Flamencos. Night in Valledupar",
    },
    {
      day: "Day 8",
      description:
        "Lower part of Perijá Mountains. Night at Chamicero del Perijá Reserve",
    },
    {
      day: "Day 9",
      description: "Birding all day at Perijá",
    },
    {
      day: "Day 10",
      description: "All day birding the Perijá range, Transfer to Valledupar",
    },
    {
      day: "Day 11",
      description: "Los Besotes Reserve, Transfer to Barranquilla",
    },
    {
      day: "Day 12",
      description: "Departures from Barranquilla´s international airport",
    },
  ];

  return (
    <div className="my-10">
      <h2>NORTHERN COLOMBIA BIRDING TRAIL (12 DAYS)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        <div>
          <p>
            Bird the Northern Colombia Birding Trail and have the chance to view
            some of the newest species known to science. First, you’ll be
            birding in great mangrove and dry forest in Via Parque Salamanca,
            looking for excellent riparian birdlife and then move into the
            world’s most irreplaceable concentration of biodiversity in the
            legendary Sierra Nevada de Santa Marta, the world’s great endemism
            centre and highest coastal mountain. You’ll then head north to the
            incredible dry forests of the Guajira peninsula and then finish off
            this trip by delving into the most isolated range of the Eastern
            Andes – Perija, out of bounds for many years until now. This tour
            offers an unrivalled amount of Colombian endemics and near endemics.
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
              src="https://la-leyenda.com/ext-images/colombian/birding/Santa-Marta-Brush-Finch-E.jpeg"
              alt="Santa Marta Brush-Finch (E). Juan Diego Castillo"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>
              Santa Marta Brush-Finch (E). Juan Diego Castillo
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
