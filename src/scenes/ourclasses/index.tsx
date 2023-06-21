import { SelectedPage, ClassType } from "@/shared/types";
import imageTennis from "../../assets/GraphicTennis.jpg";
import imageCycling from "../../assets/GraphicCycling.jpg";
import imageRunning from "../../assets/GraphicRunning.jpg";
import imageFitness from "../../assets/GraphicFitness.jpg";
import imageSnorkeling from "../../assets/GraphicSnorkeling.jpg";
import imageHiking from "../../assets/GraphicHiking.jpg";
import { motion as m } from "framer-motion";
import HText from "@/shared/HText";
import ClassComponent from "./ClassComponent";

const classes: Array<ClassType> = [
  {
    name: "Hiking with people",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: imageHiking,
  },
  {
    name: "Cycling around",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: imageCycling,
  },
  {
    name: "Running training and challenges",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: imageRunning,
  },
  {
    name: "Snorkeling around",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: imageSnorkeling,
  },
  {
    name: "Fitness training",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: imageFitness,
  },
  {
    name: "Tennis training and matches",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: imageTennis,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-gray-20 py-40">
      <m.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <div className="mx-auto w-5/6">
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <ClassComponent
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </m.div>
    </section>
  );
};

export default OurClasses;
