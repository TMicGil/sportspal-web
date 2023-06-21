type Props = {
  name: string;
  description?: string;
  image: string;
};

const ClassComponent = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[400px] w-[600px] flex-col items-center justify-center
    whitespace-normal bg-primary-100 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <li className="relative mx-5 inline-block h-[400px] w-[600px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img className="rounded-md" alt={`${image}`} src={image} />
    </li>
  );
};

export default ClassComponent;
