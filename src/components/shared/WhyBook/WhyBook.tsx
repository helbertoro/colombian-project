import { WhyBookContent } from "./WhyBookContent";

interface Props {
  section: string;
}

interface Items {
  title: string;
  content: string;
}

export const WhyBook = ({ section }: Props) => {
  const content = WhyBookContent[section];

  return (
    <div>
      <h4 className="text-2xl">Why Book</h4>
      <div className="mx-auto mt-14 flex w-9/12 flex-wrap gap-y-6">
        {content.map((item: Items, index: number) => (
          <div key={`${section}-${index}`} className="w-4/12 px-8 text-center">
            <h5 className="mb-2">{item.title}</h5>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
