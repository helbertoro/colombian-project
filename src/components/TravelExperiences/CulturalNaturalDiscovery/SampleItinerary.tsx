import Image from "next/image";

export const SampleItinerary = () => {
  return (
    <div className="columns-two my-20">
      <div>
        <h2>SAMPLE ITINERARY</h2>
        <p>
          <b className="text-primary">Days 1-2:</b> Arrive in Bogota. City tour
          with markets, museums and Salt Cathedral of Zipaquira.
        </p>

        <p>
          <b className="text-primary">Days 3–4:</b> Villa de Leyva.
        </p>

        <p>
          <b className="text-primary">Days 5–7:</b> Fly to the Colombian Coffee
          Region. Cocora Valley, Salento & visit to working coffee hacienda.
          Hike in the stunning Otun basin. Fly to Cartagena.
        </p>

        <p>
          <b className="text-primary">Days 8-9:</b> City tour of Cartagena &
          free time.
        </p>

        <p>
          <b className="text-primary">Day 10-11:</b> Transfer to Santa Marta
          beach hotel. Hike in PNN Tayrona.
        </p>

        <p>
          <b className="text-primary">Days 12-13:</b> Relaxing beach day. Fly
          out.
        </p>
      </div>
      <div>
        <div>
          <figure>
            <Image
              src="https://la-leyenda.com/ext-images/colombian/cultural-natural-discovery/Zipaquira-Salt-Cathedral-chapel-tour-Bogota-Colombia.jpeg"
              alt="Zipaquira: a subterranean marvel"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>Zipaquira: a subterranean marvel</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
