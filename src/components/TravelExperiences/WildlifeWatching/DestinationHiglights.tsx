import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrog, faKiwiBird } from "@fortawesome/free-solid-svg-icons";

export const DestinationHiglights = () => {
  return (
    <div className="my-20">
      <h2>DESTINATION HIGHLIGHTS</h2>
      <div className="flex justify-evenly gap-6">
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
              <span className="text-primary">●</span> Humid and wet tropical
              forest
            </li>
            <li>
              <span className="text-primary">●</span> Savannah grasslands
            </li>
            <li>
              <span className="text-primary">●</span> Wetlands
            </li>
            <li>
              <span className="text-primary">●</span> Varzea forest
            </li>
            <li>
              <span className="text-primary">●</span> Terra Firme Humid Tropical
              Forest
            </li>
            <li>
              <span className="text-primary">●</span> Sandy-belt forest
            </li>
            <li>
              <span className="text-primary">●</span> Rivers
            </li>
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
              <span className="text-primary">●</span> Paramo
            </li>
          </ul>
        </div>
        <div>
          <div className="text-center text-2xl text-primary">
            <FontAwesomeIcon icon={faKiwiBird} />
          </div>
          <h3 className="mb-3 text-center">POSSIBLE SPECIES</h3>
          <div className="grid grid-cols-2">
            <ul>
              <li>
                <span className="text-primary">●</span> Brown Spider Monkey (CR)
              </li>
              <li>
                <span className="text-primary">●</span> Scarlet Ibis
              </li>
              <li>
                <span className="text-primary">●</span> Cottontop Tamarin (E)
              </li>
              <li>
                <span className="text-primary">●</span> Indigo-winged (Fuertes’)
                Parrot
              </li>
              <li>
                <span className="text-primary">●</span> (CR, E)
              </li>
              <li>
                <span className="text-primary">●</span> Silvery-brown Tamarin
                (E)
              </li>
              <li>
                <span className="text-primary">●</span> Brown Woolly Monkey
              </li>
              <li>
                <span className="text-primary">●</span> Andean Spectacled Bear
              </li>
              <li>
                <span className="text-primary">●</span> Gold-ringed Tanager (E)
              </li>
              <li>
                <span className="text-primary">●</span> Anaconda
              </li>
              <li>
                <span className="text-primary">●</span> Hoffman’s Two-toed Sloth
              </li>
            </ul>
            <ul className="ml-4">
              <li>
                <span className="text-primary">●</span> Capybara
              </li>
              <li>
                <span className="text-primary">●</span> Giant Anteater
              </li>
              <li>
                <span className="text-primary">●</span> White-tailed Deer
              </li>
              <li>
                <span className="text-primary">●</span> Red Howler-Monkey
              </li>
              <li>
                <span className="text-primary">●</span> Neotropical River Otter
              </li>
              <li>
                <span className="text-primary">●</span> Boto (Pink River
                Dolphin)
              </li>
              <li>
                <span className="text-primary">●</span> Ocelot
              </li>
              <li>
                <span className="text-primary">●</span> Crab-eating Fox
              </li>
              <li>
                <span className="text-primary">●</span> Kinkajou
              </li>
              <li>
                <span className="text-primary">●</span> Various Macaws
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
