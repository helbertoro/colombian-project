import Image from "next/image";

export const Overview = () => {
  return (
    <div className="columns-two my-20">
      <div>
        <h2>THE LOST CITY</h2>
        <p>
          This trek to the Lost City is fast becoming one of the iconic treks of
          the world. This trek will take you deep into the mystical jungle-laden
          mountains of the mystical and sacred Sierra Nevada de Santa Marta
          Mountains, declared the most important concentration of biodiversity
          for preservation on Earth. Deep in its jungles, you will discover one
          of the world’s most important archaeological ruins, ‘The Lost City’ or
          ‘Ciudad Perdida’. Re-live the moment when explorers followed rumors of
          an ancient ruin – long forgotten and hidden deep in the depths of the
          Sierra’s folds and valleys – to embark on a search from the searing
          heat of the Caribbean coast to the cooler, mountain airs of the
          Sierra.
        </p>

        <p>
          The site was abandoned by the Tayronas some 350 years ago, not long
          after the arrival of the Spanish. Giant stone structures and
          staircases, jungle paths, stunning waterfalls and natural pools,
          surrounded by the towering green mountains of the Sierra Nevada are
          just some of the highlights on this adventure. Most important,
          however, is the fascinating cultural context that you’ll experience,
          passing through indigenous settlements of the indigenous people that
          now inhabit the Sierra, among them the Kogis, direct descendants of
          the Tayronas.
        </p>
      </div>
      <div>
        <div>
          <figure>
            <Image
              src="https://la-leyenda.com/ext-images/colombian/the-lost-city/Lost-City-side-staircase-Sierra-Nevada-Santa-Marta-Trek-Ciudad-Perdida-Colombia-Colombian-Project.jpeg"
              alt="Staircase, Lost City"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>Staircase, Lost City</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
