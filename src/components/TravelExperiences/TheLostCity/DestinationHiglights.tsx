import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrog, faKiwiBird } from "@fortawesome/free-solid-svg-icons";

export const DestinationHiglights = () => {
  return (
    <div className="my-20">
      <h2>DESTINATION HIGHLIGHTS</h2>
      <div className="flex justify-between gap-6">
        <div>
          <div className="text-center text-2xl text-primary">
            <FontAwesomeIcon icon={faFrog} />
          </div>
          <h3 className="mb-3 text-center">ECOSYSTEMS</h3>
          <ul>
            <li>
              <span className="text-primary">●</span> Dry tropical forest
            </li>
            <li>
              <span className="text-primary">●</span> Humid tropical forest
            </li>
            <li>
              <span className="text-primary">●</span> Andean sub-tropical forest
            </li>
          </ul>
        </div>
        <div>
          <div className="text-center text-2xl text-primary">
            <FontAwesomeIcon icon={faKiwiBird} />
          </div>
          <h3 className="mb-3 text-center">POSSIBLE SPECIES</h3>
          <ul>
            <li>
              <span className="text-primary">●</span> White-bearded and
              Golden-Headed Manakin
            </li>
            <li>
              <span className="text-primary">●</span> Red-howler Monkey
            </li>
            <li>
              <span className="text-primary">●</span> Rufous-tailed Jacamar
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
