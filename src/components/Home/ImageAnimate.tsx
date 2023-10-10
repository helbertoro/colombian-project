import Image from "next/image";

export const ImageAnimate = () => {
  return (
    <div className="group relative overflow-hidden">
      <Image
        src="https://la-leyenda.com/ext-images/colombian/home/culture.jpeg"
        alt="Image Colombian Project Culture"
        width="0"
        height="0"
        sizes="100%"
        className="h-auto w-full"
      />
      {/* <div className="bg-black transition-bg-opacity absolute inset-0 bg-opacity-0 duration-300 group-hover:bg-opacity-80">
        <h3 className="absolute top-5 z-10 w-full text-center uppercase text-accent">
          Culture & nature
        </h3>
        <p className="">Texto animado de arriba hacia abajo</p>
      </div> */}
      <div className="group h-64 w-64 bg-primary p-4 transition duration-300 ease-in-out hover:bg-secondary">
        <p className="text-black transition duration-300 group-hover:text-accent">
          Texto de ejemplo
        </p>
      </div>
    </div>
  );
};
