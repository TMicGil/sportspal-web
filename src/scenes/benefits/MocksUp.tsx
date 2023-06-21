import { motion as m } from "framer-motion";

type Props = {
  image: string;
};

const childVariant = {
  hidden: { opacity: 1, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const MocksUp = ({ image }: Props) => {
  return (
    <m.div
      variants={childVariant}
      className="h-auto items-center justify-center"
    >
      <img alt={`${image}`} src={image} />
    </m.div>
  );
};

export default MocksUp;
