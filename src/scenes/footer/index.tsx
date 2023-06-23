import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-20 py-10">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-12 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5 text-sm">
            Sport's Pal aim to gather people, create new circles of friends with
            the same passion that is sport and be healthier.
          </p>
          <p>©Sport's Pal All Rights Reserved 2023.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-primary-500">Links</h4>
          <p className="my-5 text-sm">Linkedin</p>
          <p className="my-5 text-sm">Careers</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-primary-500">Contact Us</h4>
          <p className="my-5 text-sm">France & Europe</p>
          <p className="text-sm">(33)7 6440 6450</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
