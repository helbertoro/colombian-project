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
              <span className="text-primary">●</span> Specialist agricultural
              visits
            </li>
            <li>
              <span className="text-primary">●</span> Conferences with NGOs and
              guest speakers
            </li>
            <li>
              <span className="text-primary">●</span> Museum visits
            </li>
            <li>
              <span className="text-primary">●</span> City tours
            </li>
            <li>
              <span className="text-primary">●</span> Cultural activities -
              dance classes and crafting workshops
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
