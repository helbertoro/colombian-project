import { Layout } from "../../components/shared/Layout/Layout";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import partners from "../../images/partners.jpeg";
import mentions from "../../images/mentions.jpeg";

export const Home = () => {
  return (
    <Layout>
      <div className="h-96 bg-neutral text-accent">Banner 1</div>
      <div>
        <h1 className="my-8 text-center text-primary">
          YOUR JOURNEY - OUR PASSION
        </h1>
        <div className="bg-neutral pb-5 pt-8">
          <div className="mx-auto w-1/3 text-center text-base-100">
            <p>
              Colombia is a country full of natural and cultural riches borne of
              its vast and varied territory. Rugged and unique natural beauty, a
              myriad of diverse cultures both contemporary and pre-Hispanic,
              unbridled natural diversity – Colombia ranks first in the world
              for bird and orchid species, second in the world for vascular
              plants, amphibians, butterflies and freshwater fish, third for
              reptiles and palms – all merge to forge a truly wonderful country
              – and one which has so much to show and tell the world.
            </p>
            <p>
              More and more people are coming to Colombia and experiencing for
              themselves its charm and magnetism, and the warmth and
              friendliness of its people.
            </p>
            <p>
              Let us here at The Colombian Project create for you an adventure
              of a lifetime, see how to get in touch below.
            </p>
          </div>
        </div>
      </div>
      <div className="py-8">
        <h2 className="mb-12 text-center text-primary">
          WE’RE DIFFERENT. HERE'S WHY.
        </h2>
        <div className="container">
          <div className="grid grid-cols-3 gap-20">
            <div className="text-center">
              <b className="mb-4 block text-2xl text-secondary">KNOWLEDGE</b>
              <p>
                We are students of Colombia – its biology, geography, people and
                history are all subjects that we delve into on a daily basis,
                which in turn allows us to create highly valuable and meaningful
                experiences for the client during their stay.
              </p>
            </div>
            <div className="text-center">
              <b className="mb-4 block text-2xl text-secondary">SPECIALISTS</b>
              <p>
                We consider ourselves experts in what we do with the knowledge
                to put together special interest tours no matter what the niche.
                We measure ourselves against the best and always aim to offer
                something different and better if we can, taking into account
                the small details that make all the difference.
              </p>
            </div>
            <div className="text-center">
              <b className="mb-4 block text-2xl text-secondary">
                MULTI-INTERESTS
              </b>
              <p>
                Using our in-depth understanding of the various niches that we
                work in, we love nothing more than to combine these elements –
                whether wildlife, and adventure, or culture, gastronomy and
                history – into an unforgettable experience, all delivered
                seamlessly for the traveler.
              </p>
            </div>
            <div className="text-center">
              <b className="mb-4 block text-2xl text-secondary">
                <FontAwesomeIcon icon={faEnvelope} /> SEND US AN ENQUIRY
              </b>
              <p>
                Send us a message and one of our travel specialists will get
                right back to you. enquiries@colombianproject.com
              </p>
              <a className="btn btn-secondary btn-sm" href="#">
                Enquire
              </a>
            </div>
            <div className="text-center">
              <b className="mb-4 block text-2xl text-secondary">
                <FontAwesomeIcon icon={faPhone} /> SPEAK TO OUR SPECIALISTS
              </b>
              <p>Drop us a line if you’d prefer to chat with us one on one.</p>
              <b className="text-xl text-secondary">
                Call: (COL) +57 320 657 2177
              </b>
            </div>
            <div className="text-center">
              <b className="mb-4 block text-2xl text-secondary">CONNECT WITH</b>
              <ul>
                <li>
                  <a href="">F</a>
                </li>
                <li>
                  <a href="">T</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <h2 className="mb-12 text-center text-primary">
          CREATING ADVENTURES IN COLOMBIA
        </h2>
        <div className="container">
          <div className="grid grid-cols-4 gap-12">
            <div className="h-60 bg-neutral text-accent">
              cultural natural discovery
            </div>
            <div className="h-60 bg-neutral text-accent">walkstreks</div>
            <div className="h-60 bg-neutral text-accent">wildlife watching</div>
            <div className="h-60 bg-neutral text-accent">birding</div>
            <div className="h-60 bg-neutral text-accent">
              history archaeology
            </div>
            <div className="h-60 bg-neutral text-accent">cycling</div>
            <div className="h-60 bg-neutral text-accent">the lost city</div>
            <div className="h-60 bg-neutral text-accent">family holidays</div>
          </div>
        </div>
      </div>
      <div className="h-96 bg-neutral text-accent">Banner 2</div>
      <div>
        <div className="container py-8">
          <h3 className="mb-3 text-center text-primary">
            KEY PARTNERS & AFFILIATIONS
          </h3>
          <Image src={partners} alt="Image Colombian Project Partners" />
        </div>
      </div>
      <div className="bg-tertiary">
        <div className="container py-8">
          <h3 className="mb-3 text-center text-accent">AS MENTIONED IN</h3>
          <Image
            src={mentions}
            alt="Image Colombian Project Mentions in the Press"
          />
        </div>
      </div>
    </Layout>
  );
};
