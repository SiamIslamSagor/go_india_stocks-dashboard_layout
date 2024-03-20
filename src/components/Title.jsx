const Title = ({ heading }) => {
  return (
    <h1 className="duration-300 text-xl md:text-2xl xl:text-3xl w-max p-2 md:p-3 xl:p-5 font-bold text-soft-red uppercase bg-gray-300">
      {heading}
    </h1>
  );
};

export default Title;
