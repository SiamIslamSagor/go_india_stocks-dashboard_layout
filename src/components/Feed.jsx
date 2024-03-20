import PostCard from "./PostCard";
import StoriesCard from "./StoriesCard";
import Title from "./Title";

let posts = new Array(9).fill(null);

const Feed = () => {
  return (
    <div className="min-h-screen max-h-screen flex max-lg:flex-col justify-between  overflow-y-auto [&::-webkit-scrollbar]:w-0">
      <div className="lg:!w-[70%]">
        <div className="p-5 lg:pl-20 lg:pt-20">
          <Title heading={"disscussion fourm"} />
        </div>
        {posts?.map((post, idx) => (
          <PostCard key={post + idx + "unique"} />
        ))}
      </div>

      <div className=" lg:!w-[30%]">
        <div className="p-5 2xl:pl-20 lg:pt-20">
          <Title heading={"market stories"} />
        </div>
        {posts?.map((post, idx) => (
          <StoriesCard key={post + idx + "unique stories"} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
