import type { CategoryType } from "@/types/category";
import type { Post } from "@/types/post";
import { sp } from "@/utils/numbers";
interface MainCompoType {
  posts: Post[];
  catId: CategoryType["_id"] | null;
}

function Main({ posts, catId }: MainCompoType) {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const filtredPost = catId !== null ? posts.filter((post) => post.category === catId) : posts;

  return (
    <div className=" flex flex-wrap justify-between mt-5 w-[calc(100%-200px)]">
      {filtredPost?.map((post) => {
        const title = post.title ?? post.options?.title ?? "بدون عنوان";
        const city = post.city ?? post.options?.city ?? "";
        return (
          <div key={post._id} className="w-82.5 flex justify-between border border-gray-200 m-2.5 rounded-sm ">
            <div className="flex justify-between flex-col">
              <p>{title}</p>
              <div className="text-gray-400 text-sm">
                <p>{sp(post.amount)} تومان</p>
                <span>{city}</span>
              </div>
            </div>
            <img src={`${BASE_URL}${post.images[0]}`} alt="" className="w-37.5 h-32.5 rounded-xs" />
          </div>
        );
      })}
    </div>
  );
}

export default Main;
