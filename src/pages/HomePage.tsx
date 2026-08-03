import Main from "@/components/templates/Main";
import Sidebar from "@/components/templates/Sidebar";
import { Spinner } from "@/components/ui/spinner";
import { getCategory } from "@/services/admin";
import { getAllPosts } from "@/services/user";
import type { CategoryType } from "@/types/category";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function HomePage() {
  const { data: postsRes, isLoading: postLoading } = useQuery({ queryKey: ["post-list"], queryFn: getAllPosts });
  const { data: categories, isLoading: categoriesLoading } = useQuery({ queryKey: ["get-categories"], queryFn: getCategory });

  const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryType["_id"] | null>(null);

  return (
    <>
      {postLoading || categoriesLoading ? (
        <div className="center w-full h-[50svh]">
          <Spinner className="size-10" />
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row container">
          <Sidebar categories={categories ?? []} catId={selectedCategoryId} setCatId={setSelectedCategoryId} />
          <Main posts={postsRes?.posts ?? []} catId={selectedCategoryId} />
        </div>
      )}
    </>
  );
}

export default HomePage;
