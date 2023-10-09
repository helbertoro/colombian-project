import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const AuxiliarMenu = () => {
  return (
    <div className="bg-texture hidden bg-secondary md:block">
      <div className="container">
        <ul className="flex justify-end">
          <li>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-secondary btn-sm m-1">
                Colombia <FontAwesomeIcon icon={faChevronDown} />
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <Link href="/megadiverse-country">megadiverse country</Link>
                </li>
                <li>
                  <Link href="/combining-interest-in-colombia">
                    combining interest in colombia
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="dropdown-hover dropdown">
              <label tabIndex={0} className="btn btn-secondary btn-sm m-1">
                travel advice <FontAwesomeIcon icon={faChevronDown} />
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <Link href="/traveling-in-colombia">
                    traveling in Colombia
                  </Link>
                </li>
                <li>
                  <Link href="/colombia-visas">VISA information</Link>
                </li>
                <li>
                  <Link href="/trekking-equipment-list">kit</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="z-10">
            <Link className="btn btn-secondary btn-sm m-1" href="/contact-us">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
