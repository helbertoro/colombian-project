import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const AuxiliarMenu = () => {
  return (
    <div className="bg-secondary">
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
                  <a href="/megadiverse-country">megadiverse country</a>
                </li>
                <li>
                  <a href="/combining-interest-in-colombia">
                    combining interest in colombia
                  </a>
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
                  <a href="/megadiverse-country">traveling in Colombia</a>
                </li>
                <li>
                  <a href="/combining-interest-in-colombia">VISA information</a>
                </li>
                <li>
                  <a href="/combining-interest-in-colombia">kit</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a className="btn btn-secondary btn-sm m-1" href="">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
