import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, MockupType, SelectedPage } from "@/shared/types";
import { motion as m } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import mockupHomepage from "../../assets/MobileApp01.png";
import mockupMap from "../../assets/MobileApp02.png";
import mockupEvent from "../../assets/MobileApp03.png";
import MocksUp from "./MocksUp";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
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
          <HText>More than just an app.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>
        {/* BENEFITS */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={container}
          className="item-center mt-5 justify-between gap-8 md:flex"
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
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={container}
          className="item-center mt-10 justify-between gap-10 md:flex"
        >
          {mocksup.map((mockup: MockupType) => (
            <MocksUp image={mockup.image} />
          ))}
        </m.div>
      </m.div>
    </section>
  );
};

export default Benefits;
