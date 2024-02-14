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
          <b className="text-primary">Day 2:</b> Ride to Villeta, 86 km.
        </p>
        <p>
          <b className="text-primary">Day 3:</b> Ride to Mariquita, 121 km.
        </p>
        <p>
          <b className="text-primary">Day 4:</b> Ride to Los Nevados – ‘Letras’
          mountain pass.
        </p>
        <p>
          <b className="text-primary">Day 5:</b> Rest day at mountain hotel and
          hot springs.
        </p>
        <p>
          <b className="text-primary">Day 6:</b> Descend to Manizales. Optional
          MTB ride descent (14 km) or road. descent (35 km). Coffee tour.
        </p>
        <p>
          <b className="text-primary">Day 7:</b> Ride to Salamina, 71 km.
        </p>
        <p>
          <b className="text-primary">Day 8:</b> Ride to La Pintada, 91 km.
        </p>
        <p>
          <b className="text-primary">Day 9:</b> Ride to Medellin, 91 km.
        </p>
        <p>
          <b className="text-primary">Day 10:</b> Morning city tour of Medellin.
          Free time.
        </p>
        <p>
          <b className="text-primary">Day 11:</b> Fly out.
        </p>
      </div>
      <div>
        <div>
          <figure>
            <Image
              src="https://la-leyenda.com/ext-images/colombian/cycling/Cycling-unpaved-road-Colombia-Andes.jpeg"
              alt="Unexplored off-road routes"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>Unexplored off-road routes</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
