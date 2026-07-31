import type { PostsResponse } from "@/types/post";
import { sp } from "@/utils/numbers";

function Main({ posts }: PostsResponse) {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  return (
    <div className=" flex flex-wrap justify-between mt-5 w-[calc(100%-200px)]">
      {posts?.map((post) => (
        <div key={post._id} className="w-82.5 flex justify-between border border-gray-200 m-2.5 rounded-sm ">
          <div className="flex justify-between flex-col">
            <p>{post.options.title}</p>
            <div className="text-gray-400 text-sm">
              <p>{sp(post.amount)} تومان</p>
              <span>{post.options?.city}</span>
            </div>
          </div>
          <img src={`${BASE_URL}${post.images[0]}`} alt="" className="w-37.5 h-32.5 rounded-xs" />
        </div>
      ))}
    </div>
  );
}

export default Main;
