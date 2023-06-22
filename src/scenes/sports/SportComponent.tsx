type Props = {
  name: string;
  description?: string;
  image: string;
};

const SportComponent = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[350px] w-[550px] flex-col items-center justify-center
    whitespace-normal bg-primary-100 text-center text-white opacity-0 transition duration-500 hover:opacity-90 rounded-md`;
  return (
    <li className="relative mx-5 inline-block h-[350px] w-[550px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img
        className="h-[350px] w-[550px] rounded-md"
        alt={`${image}`}
        src={image}
      />
    </li>
  );
};

export default SportComponent;
