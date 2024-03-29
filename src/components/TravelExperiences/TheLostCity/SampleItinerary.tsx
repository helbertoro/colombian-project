import Image from "next/image";

export const SampleItinerary = () => {
  return (
    <div className="columns-two my-20">
      <div>
        <h2>SAMPLE ITINERARY</h2>
        <p>
          <b className="text-primary">Day 1:</b> Pick up from Santa Marta hotel
          and transfer to trek starting point. Lunch and begin trek to Camp 1.
        </p>

        <p>
          <b className="text-primary">Day 2:</b> Trek to Camp 3.
        </p>

        <p>
          <b className="text-primary">Day 3:</b> Visit The Lost City. Return to
          Camp 2.
        </p>

        <p>
          <b className="text-primary">Day 4:</b> Trek to Camp 1.
        </p>

        <p>
          <b className="text-primary">Days 5-6:</b> Trek to trail head, lunch.
          Transfer to private beach hotel. Free afternoon. <b>Day at</b>{" "}
          leisure.
        </p>

        <p>
          <b className="text-primary">Day 7:</b> Free morning on the beach. Fly
          out.
        </p>
      </div>
      <div>
        <div>
          <figure>
            <Image
              src="https://la-leyenda.com/ext-images/colombian/the-lost-city/Lost-City-carved-stone-Sierra-Nevada-Santa-Marta-Trek-Ciudad-Perdida-Colombia-Colombian-Project.jpeg"
              alt="Carved stone, Lost City"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>Carved stone, Lost City</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
