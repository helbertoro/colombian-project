import Image from "next/image";

interface BannerInternalProps {
  type: string;
}

export const BannerInternal = ({ type }: BannerInternalProps) => {
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
