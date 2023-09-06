import { Layout } from "./shared/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <Layout>
      <h1>
        Hola <FontAwesomeIcon icon={faChevronDown} />
      </h1>
    </Layout>
  );
};
