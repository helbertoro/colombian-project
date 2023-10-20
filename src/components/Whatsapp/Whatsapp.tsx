import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const Whatsapp = () => {
  return (
    <a
      className="bg-whatsapp fixed bottom-2 right-2 z-20 flex h-[50px] w-[50px] items-center justify-center rounded-3xl p-2 text-4xl text-accent hover:opacity-60"
      href="https://wa.me/3209001645"
      target="_blank"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
};
