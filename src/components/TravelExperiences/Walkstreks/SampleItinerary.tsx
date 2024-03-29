import Image from "next/image";

export const SampleItinerary = () => {
  return (
    <div className="columns-two my-20">
      <div>
        <h2>SAMPLE ITINERARY</h2>
        <p>
          <b className="text-primary">Days 1-2:</b> Arrive to Bogota. City tour
          with markets, museums and Salt Cathedral of Zipaquira.
        </p>

        <p>
          <b className="text-primary">Day 3:</b> Fly to Pereira. Flora and Fauna
          Sanctuary visit with lunch. Start trek to PNN Los Nevados.
        </p>

        <p>
          <b className="text-primary">Days 4-6:</b> Trekking in PNN Los Nevados.
          Descend to mountain hacienda
        </p>

        <p>
          <b className="text-primary">Day 7:</b> Day at leisure to explore
          hacienda and surrounding mountains.
        </p>

        <p>
          <b className="text-primary">Day 8:</b> Morning coffee hacienda tour.
          Fly to Santa Marta and Caribbean Coast. Transfer to Santa Marta beach
          hotel.
        </p>

        <p>
          <b className="text-primary">Days 9-10:</b> Hike in PNN Tayrona. Day at
          leisure on beach.
        </p>

        <p>
          <b className="text-primary">Days 11-13:</b> Transfer to Cartagena.
          City Tour & free time. Fly out.
        </p>
      </div>
      <div>
        <div>
          <figure>
            <Image
              src="https://la-leyenda.com/ext-images/colombian/walkstreks/Trek-Frailejon-Berlin-Valley-PNN-Los-Nevados-Coffee-Region-paramo-Central-Andes-Colombia-Colombian-Project.jpeg"
              alt="Frailejon in páramo: wander through the world’s fastest-evolving ecosystem"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>
              Frailejon in páramo: wander through the world’s fastest-evolving
              ecosystem
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
