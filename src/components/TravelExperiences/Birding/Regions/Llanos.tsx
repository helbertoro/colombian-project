import Image from "next/image";

export const Llanos = () => {
  return (
    <div>
      <h3 className="mb-4">LLANOS ECOREGION</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        <div>
          <p>
            The largest tropical savanna north of the Amazon basin is called
            ‘Los Llanos’ (‘The Plains’) and it is as large as Germany. Spread
            over the countries of Venezuela and Colombia, it extends as far as
            the eye can see. This vast, flat land drains to the Orinoco River
            and floods seasonally with Llanero cowboys wading through
            saddle-high waters on horseback during the rainy season. The further
            north you head (and further from the Amazon), to the departments of
            Casanare and Arauca, the more marked the dry season becomes, which
            lasts from November to March. There are two Llanos endemics and the
            birding and general wildlife watching here is excellent.
          </p>

          <p>
            Open grassy landscapes, unforgettable sunrises and incredible
            returns to roost for thousands of Scarlet Ibis capture the essence
            of a typical day in the Llanos. All major and large rivers have
            belts of gallery forest bordering them which are great for spotting
            hummingbirds, flycatchers and sizeable icterids. Wetlands in the
            grassy plains are home to animals from Capybara, Anaconda, Giant
            Anteater and even wild pigs, along with a plethora of riparian
            species that include varieties of stork, heron and ibis. In the
            grasses, thick-knees and nighthawks await, observing the comings and
            goings of the numerous ranchers going about their daily business,
            barefoot, of course.
          </p>

          <p>
            Flights arrive in to Yopal and a 5hr 4×4 ride will get you to the
            ‘Hato’, or ranch, where all activities take place. There is also
            good birding along the Eastern Andes foothills which lead into the
            Llanos, where a humid tropical forest extends along the base of this
            range from the Amazon.
          </p>
        </div>
        <div>
          <figure>
            <Image
              src="https://la-leyenda.com/ext-images/colombian/birding/regions/big/orinoquia.png"
              alt="Llanos ecoregion - Colombia birding sites"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </figure>
          <h4 className="mt-6">BIRDING SITES</h4>
          <ol>
            <li>Hato La Aurora</li>
            <li>Bosque Bavaria</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
