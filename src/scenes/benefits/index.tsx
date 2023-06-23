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
      "Meeting new people is great, with the same sport's hobbies, even better. What about discover a new sport ?",
  },
  {
    icon: <MapPinIcon className="h-6 w-6" />,
    title: "Schedule a meeting point",
    description:
      "Awesome ! Schedule in a blink of an eyes a meeting point with your new Pal for your activity today.",
  },
  {
    icon: <RocketLaunchIcon className="h-6 w-6" />,
    title: "Get started !",
    description:
      "Prepare your gear and show up ! No more excuses, thanks to Sport's Pal, you will always have someone to have fun with.",
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
        <m.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="md:my-5 md:w-3/5"
        >
          <HText>More than just an app</HText>
          <p className="my-5 text-sm">
            What is so awesome about Sport's Pal ? Well, it's obviously sharing
            with others !
            <br />
            Ever wanted to do snorkeling but no one amongst your friend is
            available ? We are sure here at Sport's Pal, that you could quickly
            find someone on the app, who will be delighted to come with you !
          </p>
        </m.div>
        {/* BENEFITS */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
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
        <m.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="md:my-15 mt-10 md:w-3/5"
        >
          <HText>As fast as you can</HText>
          <p className="my-5 text-sm">
            We know here at Sport's Pal, that our members are active, productive
            and want to do it... NOW. That's the reason why our mobile app is
            intuitive and collaborative.
            <br />
            You will be able to see on the map all the events that are going on
            around you.
            <br />
            Participate to an event, or create yours, has never been so easy !
            <br />
            Ready to meet your new friends ?
          </p>
        </m.div>
      </m.div>
    </section>
  );
};

export default Benefits;
