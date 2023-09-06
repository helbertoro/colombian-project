import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../images/tcp-logo.png";

export const MainMenu = () => {
  return (
    <div className="bg-base-100">
      <div className="container py-6">
        <div className="flex justify-between">
          <Image
            src={logo}
            width={100}
            height={56}
            alt="Colombian Project Logo"
          />
          <nav>
            <ul className="flex">
              <li>
                <a
                  className="btn btn-ghost btn-lg m-1 h-12 min-h-0 text-primary"
                  href=""
                >
                  tailor made travel
                </a>
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
                      <a href="#">pioneers specialists</a>
                    </li>
                    <li>
                      <a href="#">why the colombian project</a>
                    </li>
                    <li>
                      <a href="#">the team</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
