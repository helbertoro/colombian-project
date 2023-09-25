import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../images/tcp-logo.png";

export const MainMenu = () => {
  return (
    <div className="bg-base-100">
      <div className="container py-6">
        <div className="flex justify-between">
          <Link href="/">
            <Image
              src={logo}
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
                      <a href="#">cultural-natural-discovery</a>
                    </li>
                    <li>
                      <a href="#">walkstreks</a>
                    </li>
                    <li>
                      <a href="#">wildlife-watching</a>
                    </li>
                    <li>
                      <a href="#">birding</a>
                    </li>
                    <li>
                      <a href="#">history-archaeology</a>
                    </li>
                    <li>
                      <a href="#">cycling</a>
                    </li>
                    <li>
                      <a href="#">the-lost-city</a>
                    </li>
                    <li>
                      <a href="#">family-holidays</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  className="btn btn-ghost btn-lg m-1 h-12 min-h-0 text-primary"
                  href=""
                >
                  birding
                </a>
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
                        pioneers specialists
                      </Link>
                    </li>
                    <li>
                      <Link href="/why-the-colombian-project">
                        why the colombian project
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
            <button className="btn btn-ghost btn-lg text-primary">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
