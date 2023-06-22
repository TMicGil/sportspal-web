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
    name: "Hiking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: imageHiking,
  },
  {
    name: "Cycling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: imageCycling,
  },
  {
    name: "Running",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: imageRunning,
  },
  {
    name: "Snorkeling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: imageSnorkeling,
  },
  {
    name: "Yoga",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: imageFitness,
  },
  {
    name: "Tennis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: imageTennis,
  },
];

const arrowVariant = {
  animation: {
    x: [0, -2400, 0],
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
    <section id="sports" className="w-full bg-gray-20 py-40">
      <m.div onViewportEnter={() => setSelectedPage(SelectedPage.Sports)}>
        <div className="mx-auto w-5/6">
          <div className="md:w-3/5">
            <HText>Select sports that you wish</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
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
