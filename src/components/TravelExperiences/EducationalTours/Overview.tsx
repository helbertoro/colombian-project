import Image from "next/image";

export const Overview = () => {
  return (
    <div className="columns-two my-20">
      <div>
        <h2>EDUCATIONAL TOURISM AND ACADEMIC TOURS</h2>
        <p>
          Our Study and Leadership academic tours are unique in Colombia.
          Combining genuine insight for academics, professionals and leaders
          from a variety of specialist backgrounds and faculties, with visits to
          the country’s most emblematic cities and interesting locations - they
          provide memorable educational experiences for any college, university
          or research group.
        </p>
        <p>
          First operated in 2014, The Colombian Project has operated Study and
          Leadership Tours for renowned agricultural academic institutions from
          California, Nebraska and Montana for groups of up to 30 people in 5
          different cities around the country.
        </p>
        <p>
          All tours are tailor made for each client leading to the most
          beneficial educational experiences, as well as being accompanied by a
          bilingual team and all the necessary logistical support. Industry
          specific site visits, guest lectures with NGOs and foundations, as
          well as expert guides can all be added to any itinerary, together with
          team building activities and a range of accommodation and culinary
          options to suit any budget.
        </p>
      </div>
      <div>
        <div className="w-full">
          <Image
            src="https://la-leyenda.com/ext-images/colombian/educational-tours/educational-tours-1.jpeg"
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
