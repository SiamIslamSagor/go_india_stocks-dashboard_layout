"use client";
import { useState } from "react";
import PostCard from "./PostCard";
import StoriesCard from "./StoriesCard";
import Title from "./Title";

let posts = new Array(9).fill(null);

const Feed = () => {
  const [tab, setTab] = useState(1);
  return (
    <div>
      <div className="lg:hidden w-full border text-white">
        <div className="flex justify-between">
          <div
            onClick={() => setTab(1)}
            className={`flex-1 text-center p-5 bg-navy active:scale-95 cursor-pointer duration-300 z-10  ${
              tab === 1 ? "bg-navy-dark border-b-4 border-red-700" : "bg-navy"
            }`}
          >
            <h5 className="select-none sm:text-lg md:text-xl duration-300">
              Disscussion Fourm
            </h5>
          </div>
          <div
            onClick={() => setTab(2)}
            className={`flex-1 text-center p-5 bg-navy active:scale-95 cursor-pointer duration-300 z-10  ${
              tab === 2 ? "bg-navy-dark border-b-4 border-red-700" : "bg-navy"
            }`}
          >
            <h5 className="select-none sm:text-lg md:text-xl duration-300">
              Market Stories
            </h5>
          </div>
        </div>
      </div>
      <div className="min-h-screen max-h-screen flex max-lg:flex-col justify-between  overflow-y-auto [&::-webkit-scrollbar]:w-0">
        <div className={`lg:!w-[70%] ${tab === 2 ? "max-lg:hidden" : ""}`}>
          <div className="p-5 lg:pl-20 lg:pt-20 max-lg:hidden">
            <Title heading={"disscussion fourm"} />
          </div>
          {posts?.map((post, idx) => (
            <PostCard key={post + idx + "unique"} />
          ))}
        </div>

        <div className={`lg:!w-[30%] ${tab === 1 ? "max-lg:hidden" : ""}`}>
          <div className="p-5 2xl:pl-20 lg:pt-20 max-lg:hidden">
            <Title heading={"market stories"} />
          </div>
          {posts?.map((post, idx) => (
            <StoriesCard key={post + idx + "unique stories"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
