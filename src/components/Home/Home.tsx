import { Layout } from "@/components/shared";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { BannerInternal } from "@/components/shared";
import { ImageAnimate } from "./ImageAnimate";

export const Home = () => {
  return (
    <Layout>
      <div id="banner">
        <BannerInternal type="banner" />
      </div>
      <div>
        <h1 className="mt-8">YOUR JOURNEY - OUR PASSION</h1>
        <div className="bg-texture bg-neutral pb-5 pt-8">
          <div className="mx-auto w-full px-3 text-center text-base-100 sm:w-3/4 md:w-2/4 xl:w-1/3">
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
      <div className="mb-16 py-8">
        <h2 className="mb-12 text-center text-primary">
          WE&rsquo;RE DIFFERENT. HERE&apos;S WHY.
        </h2>
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 lg:grid-cols-3">
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
              <a className="btn btn-primary btn-sm text-accent" href="#">
                Enquire
              </a>
            </div>
            <div className="text-center">
              <b className="mb-4 block text-2xl text-secondary">
                <FontAwesomeIcon icon={faPhone} /> SPEAK TO OUR SPECIALISTS
              </b>
              <p>Drop us a line if you’d prefer to chat with us one on one.</p>
              <b className="text-xl text-secondary">
                Call: (COL) +57 320 900 1645
              </b>
            </div>
            <div className="text-center">
              <b className="mb-4 block text-2xl text-secondary">CONNECT WITH</b>
              <ul className="flex justify-center gap-3">
                <li>
                  <a className="btn btn-primary text-2xl text-accent" href="">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a className="btn btn-primary text-2xl text-accent" href="">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a className="btn btn-primary text-2xl text-accent" href="">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16 py-8">
        <h2 className="mb-12 text-center text-primary">
          CREATING ADVENTURES IN COLOMBIA
        </h2>
        <div className="container">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-12 lg:grid-cols-4">
            {/* <ImageAnimate /> */}
            <div>
              <Image
                src="https://la-leyenda.com/ext-images/colombian/home/culture.jpeg"
                alt="Image Colombian Project Culture"
                width="0"
                height="0"
                sizes="100%"
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Image
                src="https://la-leyenda.com/ext-images/colombian/home/trekking.jpeg"
                alt="Image Colombian Project Culture"
                width="0"
                height="0"
                sizes="100%"
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Image
                src="https://la-leyenda.com/ext-images/colombian/home/wildlife.jpeg"
                alt="Image Colombian Project Culture"
                width="0"
                height="0"
                sizes="100%"
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Image
                src="https://la-leyenda.com/ext-images/colombian/home/history.jpeg"
                alt="Image Colombian Project Culture"
                width="0"
                height="0"
                sizes="100%"
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Image
                src="https://la-leyenda.com/ext-images/colombian/home/cycling.jpeg"
                alt="Image Colombian Project Culture"
                width="0"
                height="0"
                sizes="100%"
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Image
                src="https://la-leyenda.com/ext-images/colombian/home/the-lost-city.jpeg"
                alt="Image Colombian Project Culture"
                width="0"
                height="0"
                sizes="100%"
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Image
                src="https://la-leyenda.com/ext-images/colombian/home/family.jpeg"
                alt="Image Colombian Project Culture"
                width="0"
                height="0"
                sizes="100%"
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="sub-banner">
        <BannerInternal type="sub" />
      </div>
      <div>
        <div className="container py-8">
          <h3 className="mb-3 text-center text-primary">
            KEY PARTNERS & AFFILIATIONS
          </h3>
          <Image
            src="https://la-leyenda.com/ext-images/colombian/partners.jpeg"
            alt="Image Colombian Project Partners"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="bg-tertiary">
        <div className="container py-8">
          <h3 className="mb-3 text-center text-accent">AS MENTIONED IN</h3>
          <Image
            src="https://la-leyenda.com/ext-images/colombian/mentions.jpeg"
            alt="Image Colombian Project Mentions in the Press"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </Layout>
  );
};
