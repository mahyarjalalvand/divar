import Main from "@/components/templates/Main";
import Sidebar from "@/components/templates/Sidebar";
import { Spinner } from "@/components/ui/spinner";
import { getCategory } from "@/services/admin";
import { getAllPosts } from "@/services/user";
import { useQuery } from "@tanstack/react-query";

function HomePage() {
  const { data: posts, isLoading: postLoading } = useQuery({ queryKey: ["post-list"], queryFn: getAllPosts });
  const { data: categories, isLoading: categoriesLoading } = useQuery({ queryKey: ["get-categories"], queryFn: getCategory });
  return (
    <>
      {postLoading || categoriesLoading ? (
        <Spinner className="size-10" />
      ) : (
        <div className="flex">
          <Main posts={posts} />
          <Sidebar categories={categories} />
        </div>
      )}
    </>
  );
}

export default HomePage;
