import Image from "next/image";

export const BannerInternal = ({ type }) => {
  if (type === "banner") {
    return (
      <Image
        src="https://la-leyenda.com/ext-images/colombian/banner/banner.jpeg"
        alt="Image Colombian Project Culture"
        width="0"
        height="0"
        sizes="100%"
        className="h-auto w-full"
      />
    );
  } else {
    return (
      <Image
        src="https://la-leyenda.com/ext-images/colombian/banner/sub.jpeg"
        alt="Image Colombian Project Culture"
        width="0"
        height="0"
        sizes="100%"
        className="h-auto w-full"
      />
    );
  }
};
