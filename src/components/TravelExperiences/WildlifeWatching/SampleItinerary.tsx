import Image from "next/image";

export const SampleItinerary = () => {
  return (
    <div className="columns-two my-20">
      <div>
        <h2>SAMPLE ITINERARY</h2>
        <p>
          <b className="text-primary">Days 1-2:</b> Arrive to Bogota. City tour
          with markets, museums, Cerro Monserrate and Salt Cathedral of
          Zipaquira. Fly to Pereira.
        </p>

        <p>
          <b className="text-primary">Day 3-4:</b> Birding at PNN Los Nevados,
          Termales El Ruiz & Rio Blanco Reserve.
        </p>

        <p>
          <b className="text-primary">Days 5–8:</b> Fly to the Amazon. Calanoa
          Reserve, Fundacion Maikuchiga, Lake Tarapoto, PNN Amacayacu, Mocagua
          Island. Fly to Bogota for overnight at airport hotel.
        </p>

        <p>
          <b className="text-primary">Days 9-11:</b> Fly to Llanos and Hato La
          Aurora. Jeep and river safaris in the Llanos Orientales (Eastern
          Plains). Return to Bogota.
        </p>

        <p>
          <b className="text-primary">Days 12-14:</b> Fly to Santa Marta.
          Birding in Minca and El Dorado Reserve in the Sierra Nevada de Santa
          Marta. Visit San Lorenzo Ridge.
        </p>

        <p>
          <b className="text-primary">Day 15:</b> Descend to Santa Marta. Fly
          home or extension to Cartagena.
        </p>
      </div>
      <div>
        <div>
          <figure>
            <Image
              src="https://la-leyenda.com/ext-images/colombian/wildlife-watching/Purple-throated-Woodstar-Hummingbird-Tatama-Montezuma-Western-Andes-Choco-Bird-Colombian-Project-resized-scaled.jpeg"
              alt="Purple-throated woodstar, Montezuma"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>Purple-throated woodstar, Montezuma</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
