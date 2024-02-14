import Image from "next/image";

export const Overview = () => {
  return (
    <div className="columns-two my-20">
      <div>
        <h2>FAMILY HOLIDAYS</h2>
        <p>
          There is nothing better than travelling with your family knowing
          they’ll be looked after by people who understand your needs and
          resulting in a fun-packed holiday full of adventure and lasting
          memories.
        </p>
        <p>
          In Colombia we’ve selected the best kid-friendly resorts and hotels,
          destinations that are easily accessible that don’t involve long
          transfers, activities in which the entire family can take part and
          also soft-adventure experiences suitable for children and teenagers
          that will keep them active and engaged for the whole day.
        </p>
        <p>
          Simple country hikes, comfortable hotels with family rooms and safe
          swimming pools, child-friendly mountain bike trails, zip lining,
          interactive nature observation, Caribbean island retreats for privacy
          and much, much more.
        </p>
        <p>
          With the right planning, a family holiday to the beautiful landscapes
          of Colombia can be the experience of a lifetime.
        </p>
      </div>
      <div>
        <div>
          <figure>
            <Image
              src="https://la-leyenda.com/ext-images/colombian/family-holidays/family.jpeg"
              alt="Family Holidays"
              width="0"
              height="0"
              sizes="100%"
              className="h-auto w-full rounded-lg shadow-lg"
            />
            <figcaption>Family Holidays</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
