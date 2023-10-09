import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking } from "@fortawesome/free-solid-svg-icons";

export const DestinationHiglights = () => {
  return (
    <div className="my-20">
      <h2>DESTINATION HIGHLIGHTS</h2>
      <div className="flex justify-between gap-6">
        <div>
          <div className="text-center text-2xl text-primary">
            <FontAwesomeIcon icon={faWalking} />
          </div>
          <h3 className="mb-3 text-center">POSSIBLE ACTIVITIES</h3>
          <ul>
            <li>
              <span className="text-primary">●</span> Farm visits
            </li>
            <li>
              <span className="text-primary">●</span> Zip lining
            </li>
            <li>
              <span className="text-primary">●</span> Interactive nature spots
            </li>
            <li>
              <span className="text-primary">●</span> MTB rides
            </li>
            <li>
              <span className="text-primary">●</span> Day walks and hikes
            </li>
            <li>
              <span className="text-primary">●</span> Theme parks
            </li>
            <li>
              <span className="text-primary">●</span> Caving
            </li>
            <li>
              <span className="text-primary">●</span> River rafting
            </li>
            <li>
              <span className="text-primary">●</span> Sea kayaking
            </li>
            <li>
              <span className="text-primary">●</span> Snorkelling
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
