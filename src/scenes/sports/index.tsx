import { SelectedPage, SportType } from "@/shared/types";
import imageTennis from "../../assets/GraphicTennis.jpg";
import imageCycling from "../../assets/GraphicCycling.jpg";
import imageRunning from "../../assets/GraphicRunning.jpg";
import imageFitness from "../../assets/GraphicFitness.jpg";
import imageSnorkeling from "../../assets/GraphicSnorkeling.jpg";
import imageHiking from "../../assets/GraphicHiking.jpg";
import { motion as m } from "framer-motion";
import HText from "@/shared/HText";
import SportComponent from "./SportComponent";
import "./hideScroll.css";

const sportsList: Array<SportType> = [
  {
    name: "Cycling",
    description:
      "We're not only talking about pro-cycling, you can as well cruise on the sea-side with the new bike you just bought.",
    image: imageCycling,
  },
  {
    name: "Hiking",
    description:
      "Let's go on a hike to check the nature and surroundings of your area, breath some fresh air and disconnect from work.",
    image: imageHiking,
  },
  {
    name: "Running",
    description:
      "Let's have a detox run around the city, to keep you in shape, aspire to be a better person, and discover new places.",
    image: imageRunning,
  },
  {
    name: "Snorkeling",
    description:
      "For the lucky one's, have some basic gears and dream about fishes and seabeds.",
    image: imageSnorkeling,
  },
  {
    name: "Yoga",
    description:
      "Stay flex and strong with some private yoga classes. We're sure it will be your next hobby.",
    image: imageFitness,
  },
  {
    name: "Tennis",
    description:
      "Well, playing tennis is fun, but what if you could schedule your own tournament ?",
    image: imageTennis,
  },
];

const arrowVariant = {
  animation: {
    x: [70, -2400, 70],
    transition: {
      x: {
        repeat: Infinity,
        duration: 40,
        ease: "easeInOut",
      },
    },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Sports = ({ setSelectedPage }: Props) => {
  return (
    <section id="sports" className="w-full bg-gray-20 py-28">
      <m.div onViewportEnter={() => setSelectedPage(SelectedPage.Sports)}>
        <div className="mx-auto w-5/6">
          <div className="md:w-3/5">
            <HText>Select sports that you wish</HText>
            <p className="py-5">
              We have all popular sports available on Sport's Pal.
              <br />
              What is cool about it, is you can try new ones, who knows, they
              might become your new hobby !
            </p>
          </div>
        </div>
        <div className="hidescroll mt-10 h-[380px] w-full overflow-x-auto overflow-y-hidden">
          <m.ul
            variants={arrowVariant}
            animate="animation"
            className="w-[2800px] whitespace-nowrap"
          >
            {sportsList.map((item: SportType, index) => (
              <SportComponent
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </m.ul>
        </div>
      </m.div>
    </section>
  );
};

export default Sports;
