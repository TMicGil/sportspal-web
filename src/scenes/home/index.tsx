// import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion as m } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  // const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <m.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-center md:mt-20 md:flex md:h-5/6"
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5 ">
          {/* HEADINGS */}
          <m.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:-left-20 before:-top-20 before:z-[-1] md:before:absolute  md:before:content-bebettertext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Sport's Pal is an application, both available on web and mobile,
              that allows you to do sports, or discover new ones, with people
              that are around you.
              <br />
              You'll then be able to meet like minded-people, with the same
              hobbies as you do, stay in contact, share goals and improve
              yourself while having fun !
            </p>
          </m.div>
          {/* ACTIONS */}
          <div className="mt-8 flex items-center gap-8">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-secondary-500 underline hover:text-primary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* iMAGE */}
        <div>
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </m.div>
      {/* ---- SPONSORS ---- {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} IMPORT IMAGE />
              <img alt="forbes-sponsor" src={SponsorForbes} IMPORT IMAGE />
              <img alt="fortune-sponsor" src={SponsorFortune} IMPORT IMAGE />
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Home;
