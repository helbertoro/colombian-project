import Image from "next/image";

export const Overview = () => {
  return (
    <div className="columns-two my-20">
      <div>
        <h2>TREKKING & WALKING</h2>
        <p>
          Colombia, with its three immense Andean mountain ranges, vast
          inter-Andean valleys and endless slopes and foothills, makes it one of
          the world’s most exciting, new destinations for trekking and walking.
          No matter what your level or experience there is a walk or trek for
          you, providing an opportunity to behold some of Colombia’s most
          beautiful mountain landscapes that are just waiting to be explored.
          Over the past ten years we’ve pioneered and developed spectacular
          mountain routes, while implementing the high standards of service,
          comfort, safety and trip planning that The Colombian Project is known
          for.
        </p>
        <p>
          We have a range of mid-to-high altitude mountain walks with cozy
          guesthouses, traditional farmhouses and hotels waiting for you at the
          end of each day, or multi-day camping treks and expeditions that will
          test your legs to the full – it all depends on your time, interest,
          and stamina.
        </p>
        <p>
          During our treks you’ll hike winding paths along valley slopes, cross
          jungle rivers and bathe in spectacular waterfalls and private
          hot-springs, climb thousands of meters up through cloud forest to
          remote plateaus, home to teeming wildlife and biodiversity to emerge
          onto a magical, high-altitude landscape almost entirely unique to
          Colombia: the páramo. An otherworldly, mystical highland ecosystem of
          volcanoes, clouds, lakes and incredible ‘frailejones’ plants, the
          páramo crowns the highest reaches of the tropical Andes in Colombia.
        </p>
        <p>
          English-speaking, local mountain guides accompany our trips which
          include the chance to spend time with local communities and get an
          insight into traditional mountain life in the Colombian high-Andes.
        </p>
      </div>
      <div>
        <div>
          <figure>
            <Image
              src="https://la-leyenda.com/ext-images/colombian/walkstreks/El-Bosque-descent-via-River-Otun-Canyon-PNN-Los-Nevados-Colombia.jpeg"
              alt="River otun canyon & descent"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>River otun canyon & descent</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
