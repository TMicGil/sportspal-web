import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion as m } from "framer-motion";
import { useForm } from "react-hook-form";
import HomePageText from "../../assets/HomePageText.png";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyle = `w-full rounded-lg bg-gray-100 px-5 py-3 placeholder-primary-500 mt-2 text-primary-500`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 py-24">
      <m.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* HEADER */}
        <div className="md:w-3/5">
          <HText>Interested ?</HText>
          <p className="my-5">
            Our devs are still working on the app, it's a matter of time !
            <br />
            To join the team, to be on the private list of the user testing
            interface, or provide some suggestions, such as sports that you'd
            like to have on the app, please fill in this form.
          </p>
        </div>
        {/* FORM */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <div className="mt-10 basis-3/5 md:mt-0">
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/1622ff61ee4e3baa50fd7a54515eeee9"
            >
              {/* NAME */}
              <m.div
                initial={{ x: -300 }}
                whileInView={{ x: 0 }}
                transition={{ delay: 0.1, type: "spring" }}
              >
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="Your name"
                  {...register("name", {
                    required: true,
                    maxLength: 40,
                  })}
                />
                {errors?.name && (
                  <p className="mt-1 text-sm text-secondary-500">
                    {errors.name.type === "required" &&
                      "Your name is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is 40 characters."}
                  </p>
                )}
              </m.div>
              {/* EMAIL */}
              <m.div
                initial={{ x: -300 }}
                whileInView={{ x: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <input
                  className={inputStyle}
                  type="email"
                  placeholder="Your email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors?.email && (
                  <p className="mt-1 text-sm text-secondary-500">
                    {errors.email.type === "required" &&
                      "Your email is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}
              </m.div>
              {/* MESSAGE */}
              <m.div
                initial={{ x: -300 }}
                whileInView={{ x: 0 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <textarea
                  className={inputStyle}
                  placeholder="Any suggestions ?"
                  autoCorrect="on"
                  rows={4}
                  cols={50}
                  {...register("message", {
                    required: true,
                    maxLength: 480,
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-secondary-500">
                    {errors.message.type === "required" &&
                      "Hey, write why you're here !"}
                    {errors.message.type === "maxLength" &&
                      "Max length is 480 char."}
                  </p>
                )}
              </m.div>
              <button
                type="submit"
                className="mt-2 rounded-md bg-primary-500 px-10 py-2 text-white transition duration-500 hover:bg-secondary-500"
              >
                Submit
              </button>
            </form>
          </div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="relative ml-5 mt-10 basis-3/5"
          >
            <div className="mt-2 before:-left-20 before:-top-20 before:z-[-1]  md:before:absolute md:before:content-bebettertext">
              <img alt="home-page-text" src={HomePageText} />
            </div>
          </m.div>
        </div>
      </m.div>
    </section>
  );
};

export default ContactUs;
