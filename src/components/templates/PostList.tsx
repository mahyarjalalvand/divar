import { getUserPosts } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../ui/spinner";

function PostList() {
  const { data, isLoading } = useQuery({ queryKey: ["my-post-list"], queryFn: getUserPosts });

  return isLoading ? (
    <div className="w-full h-[50svh] center">
      <Spinner />
    </div>
  ) : (
    <div>
      {data?.posts.map((post) => (
        <div key={post._id}>
          <img src={post.images[0]} alt={post.options.title} />
          <p>{post.options.title}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
