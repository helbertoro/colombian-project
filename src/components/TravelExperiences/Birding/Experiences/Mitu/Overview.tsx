import Image from "next/image";

export const Overview = () => {
  const planDetails = [
    {
      day: "Day 1",
      description: "Arrival to Bogotá",
    },
    {
      day: "Day 2",
      description: "Fly to Mitú",
    },
    {
      day: "Day 3-5",
      description:
        "Mitú (Cachivera, Santa Cruz, Cer ro Urania and Bocatoma trails)",
    },
    {
      day: "Day 6",
      description: "Fly to Bogotá – end of tour.",
    },
  ];

  return (
    <div className="my-10">
      <h2>MITU (6 DAYS)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        <div>
          <p>
            Located just 50km from the border with Venezuela, Mitu is a
            convergence point for various pristine Amazonian ecosystems, such as
            white-sand forest (due to its Guiana Shield influence), varzea
            flooded forest and terra firme forest. This convergence makes it an
            excellent birding site where many, many Amazonian specialities and
            rarities, such as the grand diversity of antbirds and antwrens,
            cotingas and tanagers, parrots and hummingbirds, can be seen. With a
            single visit to Mitu a huge number of birds can be ticked off your
            list.
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
              src="https://la-leyenda.com/ext-images/colombian/birding/Guianan-Cock-of-The-Rock-Guiana-Shield-Serrania-La-Lindosa-Colombia-Bird-Colombian-Project-2.jpeg"
              alt="Guianan Cock-of-The-Rock"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>Guianan Cock-of-The-Rock</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
