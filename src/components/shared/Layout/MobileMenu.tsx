import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <button
        className="btn btn-ghost btn-lg text-primary"
        onClick={() => setShowMenu(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      {showMenu && (
        <div className="fixed bottom-0 left-0 top-0 z-20 h-full w-full bg-base-100">
          <div className="px-2 py-3 text-right">
            <button
              className="btn btn-ghost btn-lg text-primary"
              onClick={() => setShowMenu(false)}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
          <div>
            <ul className="menu-mobile menu">
              <li>
                <Link href="/">home</Link>
              </li>
              <li>
                <details>
                  <summary>Colombia</summary>
                  <ul>
                    <li>
                      <Link href="/megadiverse-country">
                        megadiverse country
                      </Link>
                    </li>
                    <li>
                      <Link href="/combining-interest-in-colombia">
                        combining interests in colombia
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>travel advice</summary>
                  <ul>
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
                </details>
              </li>
              <li>
                <Link href="/tailor-made-holidays">tailor made travel</Link>
              </li>
              <li>
                <details>
                  <summary>travel experiences</summary>
                  <ul>
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
                    <li>
                      <Link href="/travel-experiences/educational-tourism">
                        educational tourism
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>about us</summary>
                  <ul>
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
                </details>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
