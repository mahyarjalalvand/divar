import { getUserPosts } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../ui/spinner";
import { sp } from "@/utils/numbers";
import { truncateWords } from "@/utils/truncateWords";

function PostList() {
  const { data, isLoading } = useQuery({ queryKey: ["my-post-list"], queryFn: getUserPosts });

  return isLoading ? (
    <div className="w-full h-[50svh] center">
      <Spinner />
    </div>
  ) : (
    <div className="flex flex-col gap-3 pt-5">
      <h3 className="mb-7 pb-3 border-b-2 border-red-800 w-fit font-semibold">آگهی های شما</h3>
      {data?.posts.map((post) => (
        <div key={post._id} className="flex w-full items-center justify-between gap-3 border border-gray-300 p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} alt={post.options.title} />
            <div>
              <p>{post.options.title}</p>
              <span>{truncateWords(post.options.content, 8)}</span>
            </div>
          </div>
          <div className="center flex-col gap-3">
            <span>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</span>
            <span>{sp(post.amount)} تومان</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
