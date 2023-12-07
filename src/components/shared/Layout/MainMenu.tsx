import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { MobileMenu } from "./";

export const MainMenu = () => {
  return (
    <div className="bg-base-100">
      <div className="container py-3 md:py-6">
        <div className="flex justify-between">
          <Link href="/">
            <Image
              src="https://la-leyenda.com/ext-images/colombian/tcp-logo.png"
              width={100}
              height={56}
              alt="Colombian Project Logo"
            />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex">
              <li>
                <Link
                  className="btn btn-ghost btn-lg m-1 h-12 min-h-0 text-primary"
                  href="/tailor-made-holidays"
                >
                  tailor made travel
                </Link>
              </li>
              <li>
                <div className="dropdown dropdown-hover">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-lg m-1 h-12 min-h-0 text-primary"
                  >
                    travel experiences <FontAwesomeIcon icon={faChevronDown} />
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
                  >
                    <li>
                      <Link href="/travel-experiences/cultural-natural-discovery">
                        Culture & nature
                      </Link>
                    </li>
                    <li>
                      <Link href="/travel-experiences/walkstreks">
                        trekking & walking
                      </Link>
                    </li>
                    <li>
                      <Link href="/travel-experiences/wildlife-watching">
                        wildlife watching
                      </Link>
                    </li>
                    <li>
                      <Link href="/travel-experiences/birding">birding</Link>
                    </li>
                    <li>
                      <Link href="/travel-experiences/history-archaeology">
                        history & archaeology
                      </Link>
                    </li>
                    <li>
                      <Link href="/travel-experiences/cycling">cycling</Link>
                    </li>
                    <li>
                      <Link href="/travel-experiences/the-lost-city">
                        the lost city
                      </Link>
                    </li>
                    <li>
                      <Link href="/travel-experiences/family-holidays">
                        family holidays
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown-hover dropdown">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-lg m-1 h-12 min-h-0 text-primary"
                  >
                    about us <FontAwesomeIcon icon={faChevronDown} />
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
                  >
                    <li>
                      <Link href="/pioneers-specialists">
                        pioneers & specialists
                      </Link>
                    </li>
                    <li>
                      <Link href="/why-the-colombian-project">
                        why the colombian project?
                      </Link>
                    </li>
                    <li>
                      <Link href="/the-team">the team</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <div className="block md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
