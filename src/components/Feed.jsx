import PostCard from "./PostCard";
import StoriesCard from "./StoriesCard";
import Title from "./Title";

let posts = new Array(9).fill(null);

const Feed = () => {
  return (
    <div className="border min-h-screen max-h-screen flex max-lg:flex-col justify-between  overflow-y-auto [&::-webkit-scrollbar]:w-0">
      <div>
        <div className="lg:pl-20 lg:pt-20">
          <Title heading={"disscussion fourm"} />
        </div>
        {posts?.map((post, idx) => (
          <PostCard key={post + idx + "unique"} />
        ))}
      </div>

      <StoriesCard />
    </div>
  );
};

export default Feed;
