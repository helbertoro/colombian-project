import Link from "next/link";

export const Footer = () => {
  const getYear = () => new Date().getFullYear();

  return (
    <footer className="bg-texture bg-secondary">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <ul className="z-10 flex">
            <li>
              <Link className="btn btn-secondary btn-sm m-1" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="btn btn-secondary btn-sm m-1"
                href="megadiverse-country"
              >
                Why Colombia
              </Link>
            </li>
          </ul>
          <span className="text-accent">
            © {getYear()} - The Colombian Project. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
