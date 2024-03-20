import PostCard from "./PostCard";
import StoriesCard from "./StoriesCard";

const Feed = () => {
  return (
    <div className="border flex justify-between">
      <PostCard />
      <StoriesCard />
    </div>
  );
};

export default Feed;
