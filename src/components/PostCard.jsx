import Image from "next/image";
import Title from "./Title";
import { FaRegCommentAlt, FaRegHeart } from "react-icons/fa";
import { IoEyeOutline, IoShareSocialOutline } from "react-icons/io5";

const PostCard = () => {
  return (
    <div className="max-lg:w-full lg:px-14 duration-300 2xl:px-20 px-5 lg:py-2">
      <div className="border rounded-md my-6 lg:my-10 shadow-sm hover:shadow-xl duration-300 w-full p-2 flex justify-around">
        <div className="min-w-16">
          <Image
            className="rounded-[50%]"
            src={"/man.jpg"}
            width="44"
            height="44"
            alt="author image"
            loading="lazy"
          ></Image>
        </div>
        <div className="space-y-4 lg:space-y-6 ">
          <div className="flex items-center">
            <h4 className="font-semibold text-lg flex-1">
              Mr. Rajesh{" "}
              <span className="rounded-full bg-[#3652AD] p-1 px-2 ml-5 text-white text-xs">
                Section 2
              </span>
            </h4>
            <span className="text-[#3652AD] font-bold">2 min ago</span>
          </div>
          <p className="text-wrap sm:pr-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            nihil labore ipsa fugiat, suscipit natus consectetur aliquid
            praesentium aspernatur beatae, placeat nisi qui voluptas unde.
          </p>
          <div className="flex justify-between sm:pr-20">
            <p className="flex items-center gap-2 text-wrap truncate cursor-pointer">
              <FaRegHeart className="text-2xl " /> 2k
            </p>
            <p className="flex items-center gap-2 text-wrap truncate cursor-pointer">
              <IoEyeOutline className="text-2xl " /> 2k
            </p>
            <p className="flex items-center gap-2 text-wrap truncate cursor-pointer">
              <FaRegCommentAlt className="text-2xl " /> 2k{" "}
              <span className="max-sm:hidden">Comments</span>
            </p>
            <p className="flex items-center gap-2 text-wrap truncate cursor-pointer">
              <IoShareSocialOutline className="text-2xl " /> Share
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
