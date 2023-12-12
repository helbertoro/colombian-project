import Image from "next/image";

export const SampleItinerary = () => {
  return (
    <div className="columns-two my-20">
      <div>
        <h2>SAMPLE ITINERARY</h2>
        <p>
          <b className="text-primary">Day 1:</b> Arrive to Bogota.
        </p>
        <p>
          <b className="text-primary">Day 2:</b> City tour tour markets, museums
          and Cerro Monserrate.
        </p>
        <p>
          <b className="text-primary">Day 3:</b> Academic visits to local
          agricultural companies.
        </p>
        <p>
          <b className="text-primary">Day 4:</b> Fly to Cali. Academic visit to
          tropical research center. Transfer to Lago Calima. mountain pass.
        </p>
        <p>
          <b className="text-primary">Day 5:</b> Visit local hydroelectric power
          station and sustainable food project.
        </p>
        <p>
          <b className="text-primary">Day 6:</b> Transfer to Manizales. Coffee
          tour and overnight stay on coffee farm.
        </p>
        <p>
          <b className="text-primary">Day 7:</b> Visit to coffee research
          center. Fly to Bogotá.
        </p>
        <p>
          <b className="text-primary">Day 8:</b> Fly home or extension to
          Medellín.
        </p>
      </div>
      <div>
        <div className="w-full">
          <Image
            src="https://la-leyenda.com/ext-images/colombian/educational-tours/educational-tours-2.jpeg"
            alt="Image Colombian Project Educational Tours image"
            width="0"
            height="0"
            sizes="100%"
            className="h-auto w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
