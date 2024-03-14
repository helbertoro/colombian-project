import Image from "next/image";
import Link from "next/link";

export const Tours = () => {
  const content = [
    {
      title:
        "COLOMBIAN ISOLATED ENDEMICS – WESTERN ANDES, CHOCO & SIERRA NEVADA",
      days: "13 days",
      link: "#",
      image:
        "Brown-banded-Antpitta-endemic-Central-Andes-Colombia-Birding-Photo-Juan-Diego-Castillo.jpeg",
    },
    {
      title: "NORTHERN COLOMBIA BIRDING TRAIL",
      days: "12 days",
      link: "#",
      image:
        "Santa-Marta-Screech-Owl-endemic-Sierra-Nevada-de-Santa-Marta-Copyright-Colombian-Project.jpeg",
    },
    {
      title: "EASTERN ANDES, LLANOS FOOTHILLS & AMAZON TRANSITION ZONE",
      days: "10 days",
      link: "#",
      image:
        "Sword-billed-Hummingbird-Birding-Colombia-Juan-Diego-Castillo-Andes.jpeg",
    },
    {
      title: "ANDEAN RANGES OF COLOMBIA & MAGDALENA VALLEY + LLANOS",
      days: "21 days",
      link: "#",
      image: "Pale-headed-Jacamar-Llanos-Birding-Colombia-Alejandro-Pinto.jpeg",
    },
    {
      title: "MAGDALENA VALLEY & EASTERN ANDES FOOTHILLS",
      days: "13 days",
      link: "#",
      image: "Indigo-capped-Hummingbird.jpeg",
    },
    {
      title: "SOUTHERN ANDES, COLOMBIAN MASSIF & AMAZON FOOTHILLS",
      days: "12 days",
      link: "#",
      image: "Deep-blue-Flowerpiercer.jpeg",
    },
    {
      title: "3 ANDEAN RANGES & MAGDALENA VALLEY ENDEMICS BONANZA",
      days: "11 days",
      link: "#",
      image:
        "Magdalena-Antbird-Rio-Claro-endemic-Colombia-Alejandro-Pinto.jpeg",
    },
    {
      title: "MITU",
      days: "6 days",
      link: "#",
      image: "White-eyed-Parakeet-Juan-Diego-Castillo.jpeg",
    },
    {
      title: "ANDEAN RANGES (EASTERN, WESTERN, CENTRAL) & INTER-ANDEAN VALLEYS",
      days: "15 days",
      link: "#",
      image:
        "Bogota-Rail-Rallus-semiplumbeus-endemic-La-Florida-Colombia-Birding-Alejandro-Pinto.jpeg",
    },
    {
      title: "INIRIDA",
      days: "7 days",
      link: "#",
      image: "Collared-Puffbird.jpeg",
    },
  ];
  return (
    <div className="mx-auto grid grid-cols-2 gap-6 sm:w-4/6">
      {content.map((item, index) => (
        <div key={`tour-${index}`}>
          <Link href={item.link}>
            <div className="relative">
              <Image
                src={`https://la-leyenda.com/ext-images/colombian/birding/regions/tours/${item.image}`}
                alt={item.title}
                width="0"
                height="0"
                sizes="100%"
                className="h-auto w-full rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-black bg-opacity-0 pt-24 text-center transition-all duration-500 hover:bg-opacity-80 hover:pt-20">
                <div className="text-xl text-accent">
                  <b>{item.title}</b>
                  <p>{item.days}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
