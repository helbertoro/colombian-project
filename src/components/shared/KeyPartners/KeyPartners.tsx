import Image from "next/image";

export const KeyPartners = () => {
  return (
    <div className="container py-8">
      <h3 className="mb-3 text-center text-primary">
        KEY PARTNERS & AFFILIATIONS
      </h3>
      <Image
        src="https://la-leyenda.com/ext-images/colombian/partners.png"
        alt="Image Colombian Project Partners"
        width="0"
        height="0"
        sizes="100vw"
        className="h-auto w-full rounded-lg shadow-lg"
      />
    </div>
  );
};
