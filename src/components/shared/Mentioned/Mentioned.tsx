import Image from "next/image";

export const Mentioned = () => {
  return (
    <div className="container py-8">
      <h3 className="mb-3 text-center text-accent">AS MENTIONED IN</h3>
      <Image
        src="https://res.cloudinary.com/df4oqzjjm/image/upload/v1776305903/mentions_x0k7dk.jpg"
        alt="Image Colombian Project Mentions in the Press"
        width="0"
        height="0"
        sizes="100vw"
        className="h-auto w-full rounded-lg shadow-lg"
      />
    </div>
  );
};
