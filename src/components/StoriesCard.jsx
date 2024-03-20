import Image from "next/image";
import Title from "./Title";
import mountainImg from "../../public/mountain.jpg";
const StoriesCard = () => {
  return (
    <div className="max-lg:w-full 2xl:px-20 my-2 md:my-5 p-5">
      <div className="border">
        <div>
          <Image
            className="object-cover w-full "
            src={mountainImg}
            alt="mountain image"
            loading="lazy"
          ></Image>
        </div>
        <div className="p-5 md:p-10">
          <h4 className="font-semibold text-lg capitalize">
            the coldest sunset
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            nostrum quo, reprehenderit deserunt, dolorum praesentium recusandae
            laudantium at consequatur animi dicta amet itaque, impedit mollitia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoriesCard;
