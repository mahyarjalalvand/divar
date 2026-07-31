import Main from "@/components/templates/Main";
import Sidebar from "@/components/templates/Sidebar";
import { Spinner } from "@/components/ui/spinner";
import { getCategory } from "@/services/admin";
import { getAllPosts } from "@/services/user";
import { useQuery } from "@tanstack/react-query";

function HomePage() {
  const { data: postsRes, isLoading: postLoading } = useQuery({ queryKey: ["post-list"], queryFn: getAllPosts });
  const { data: categories, isLoading: categoriesLoading } = useQuery({ queryKey: ["get-categories"], queryFn: getCategory });

  return (
    <>
      {postLoading || categoriesLoading ? (
        <div className="center w-full h-[50svh]">
          <Spinner className="size-10" />
        </div>
      ) : (
        <div className="flex container">
          <Sidebar categories={categories ?? []} />
          <Main posts={postsRes?.posts ?? []} />
        </div>
      )}
    </>
  );
}

export default HomePage;
