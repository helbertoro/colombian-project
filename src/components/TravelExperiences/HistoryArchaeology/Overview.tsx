import Image from "next/image";

export const Overview = () => {
  return (
    <div className="columns-two my-20">
      <div>
        <h2>HISTORY & ARCHAEOLOGY</h2>
        <p>
          Colombia – a country full of color, natural beauty, tropical warmth
          and endless bounty. These attributes have, throughout history,
          attracted humans to its shores with promises of riches and plenty.
          Throughout tens of thousands of years Colombia has been home to
          numerous peoples distributed over its rugged geography. These isolated
          cultures evolved and adapted to their unique surroundings, in some
          cases thriving and leaving an indelible mark.
        </p>

        <p>
          Thankfully, some of the relics of these ancient societies have
          survived, leaving us in awe of their advanced methods of gold work,
          for example, and their skilled craftsmanship, including some methods
          which are still to be replicated by modern artisans. The Colombian
          Project has pioneered Colombia’s only historical and archaeological
          tour in one of the continent’s most historically important yet least
          studied countries. We’ve gathered some of the country’s top experts in
          their respective fields of anthropology, colonial history,
          archaeology, sociology and archaeobotany, all working together to give
          an unprecedented, cross-disciplinary insight into their chosen topics,
          whether it be the statues of San Agustin, the mysterious, captivating
          rock art of the Amazon basin, the ancient Tayrona or Spanish Colonial
          Cartagena.
        </p>

        <p>
          Our experts are conducting ongoing studies which, excitingly, you have
          the chance to inquire into. During your visit, Colombia’s historically
          rich and diverse story will start to emerge, as we explore both its
          pre-Hispanic and Spanish colonial history across the country, in
          various settings, from the humid forests of the Amazon, to the
          temperate forests and mountains of the Andes, to the dry tropical
          forests of the Caribbean coast. For well-read and inquisitive
          travelers, Colombia is an historical and anthropological paradise
          which will leave you yearning for more.
        </p>
      </div>
      <div>
        <div>
          <figure>
            <Image
              src="https://la-leyenda.com/ext-images/colombian/history-archaeology/Doorway-Villa-de-Leyva-heritage-Spanish-colonial-town-history-Boyaca-Colombia-Colombian-Project.jpeg"
              alt="Spanish colonial town – Villa De Leyva, Boyaca"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>
              Spanish colonial town – Villa De Leyva, Boyaca
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
