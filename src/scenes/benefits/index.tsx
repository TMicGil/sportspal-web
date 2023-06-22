import { BenefitType, MockupType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import MocksUp from "./MocksUp";
import {
  MapPinIcon,
  UserGroupIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import { motion as m } from "framer-motion";
import mockupHomepage from "../../assets/MobileApp01.png";
import mockupMap from "../../assets/MobileApp02.png";
import mockupEvent from "../../assets/MobileApp03.png";

const benefits: Array<BenefitType> = [
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Meet like minded people",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <MapPinIcon className="h-6 w-6" />,
    title: "Schedule a meeting point",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <RocketLaunchIcon className="h-6 w-6" />,
    title: "Get started !",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const mocksup: Array<MockupType> = [
  {
    image: mockupHomepage,
  },
  {
    image: mockupMap,
  },
  {
    image: mockupEvent,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <m.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* HEADER  */}
        <div className="md:my-5 md:w-3/5">
          <HText>More than just an app</HText>
          <p className="my-5 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            ducimus deleniti error nisi officia sint aliquid obcaecati laborum
            dolorem aperiam itaque omnis, tenetur recusandae veniam similique at
            in? Consequuntur, maiores.
          </p>
        </div>
        {/* BENEFITS */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={container}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </m.div>
        {/* MOCKS UP */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="mt-10 w-full items-center justify-center gap-10 md:flex"
        >
          {mocksup.map((mockup: MockupType) => (
            <MocksUp image={mockup.image} />
          ))}
        </m.div>
        {/* PARAGRAPH */}
        <div className="md:my-15 mt-10 md:w-3/5">
          <HText>As fast as you can !</HText>
          <p className="my-5 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            ducimus deleniti error nisi officia sint aliquid obcaecati laborum
            dolorem aperiam itaque omnis, tenetur recusandae veniam similique at
            in? Consequuntur, maiores.
          </p>
        </div>
      </m.div>
    </section>
  );
};

export default Benefits;
