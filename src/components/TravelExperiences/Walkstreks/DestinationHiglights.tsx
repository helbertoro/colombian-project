import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWalking,
  faHiking,
  faMountain,
  faFrog,
  faKiwiBird,
} from "@fortawesome/free-solid-svg-icons";

export const DestinationHiglights = () => {
  return (
    <div className="my-20">
      <h2>DESTINATION HIGHLIGHTS</h2>
      <div className="flex justify-between gap-6">
        <div>
          <div className="text-center text-2xl text-primary">
            <FontAwesomeIcon icon={faWalking} />
          </div>
          <h3 className="mb-3 text-center">TREK TYPES</h3>
          <ul>
            <li>
              <span className="text-primary">●</span> Circuit
            </li>
            <li>
              <span className="text-primary">●</span> Out-and-back
            </li>
            <li>
              <span className="text-primary">●</span> Point to point
            </li>
          </ul>
        </div>
        <div>
          <div className="text-center text-2xl text-primary">
            <FontAwesomeIcon icon={faHiking} />
          </div>
          <h3 className="mb-3 text-center">TYPICAL TREK DAY</h3>
          <ul>
            <li>
              <span className="text-primary">●</span> 7-17km
            </li>
            <li>
              <span className="text-primary">●</span> 3-8hrs
            </li>
            <li>
              <span className="text-primary">●</span> 300m – 1.2km ascents
            </li>
          </ul>
        </div>
        <div>
          <div className="text-center text-2xl text-primary">
            <FontAwesomeIcon icon={faMountain} />
          </div>
          <h3 className="mb-3 text-center">SUMMITS</h3>
          <ul>
            <li>
              <span className="text-primary">●</span> Nevado del Tolima (PNN Los
              Nevados)
            </li>
            <li>
              <span className="text-primary">●</span> Nevado de Santa Isabel
              (PNN Los Nevados)
            </li>
          </ul>
        </div>
        <div>
          <div className="text-center text-2xl text-primary">
            <FontAwesomeIcon icon={faFrog} />
          </div>
          <h3 className="mb-3 text-center">ECOSYSTEMS</h3>
          <ul>
            <li>
              <span className="text-primary">●</span> Sub-tropical forest
            </li>
            <li>
              <span className="text-primary">●</span> Andean cloud forest
            </li>
            <li>
              <span className="text-primary">●</span> High-Andean Forest
            </li>
            <li>
              <span className="text-primary">●</span> Sub-Paramo
            </li>
            <li>
              <span className="text-primary">●</span> Paramo
            </li>
            <li>
              <span className="text-primary">●</span> Super-paramo
            </li>
            <li>
              <span className="text-primary">●</span> Dry tropical forest
            </li>
            <li>
              <span className="text-primary">●</span> Humid tropical forest
            </li>
            <li>
              <span className="text-primary">●</span> Coastal savannah
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
              <span className="text-primary">●</span> Andean Condor
            </li>
            <li>
              <span className="text-primary">●</span> Red Howler-Monkey
            </li>
            <li>
              <span className="text-primary">●</span> Mountain Tapir
            </li>
            <li>
              <span className="text-primary">●</span> Mountain Tanagers and
              literally
            </li>
          </ul>
          <p className="my-2">HUNDREDS of other birds…</p>
          <ul>
            <li>
              <span className="text-primary">●</span> Long-tailed Sylph
              Hummingbird
            </li>
            <li>
              <span className="text-primary">●</span> Grey-breasted
              Mountain-Toucan
            </li>
            <li>
              <span className="text-primary">●</span> Black-chested
              Buzzard-Eagle
            </li>
            <li>
              <span className="text-primary">●</span> Cottontop Tamarin
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
