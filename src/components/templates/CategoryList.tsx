import { deleteCategoryHandler, getCategory } from "@/services/admin";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Spinner } from "../ui/spinner";
import { toast } from "sonner";

function CategoryList() {
  const { data, isLoading } = useQuery({ queryKey: ["get-categories"], queryFn: getCategory });
  const queryClient = useQueryClient();
  const {
    mutate: deleteCategory,
    isPending,
    variables,
  } = useMutation({
    mutationFn: deleteCategoryHandler,
    onSuccess: () => {
      toast.success("دسته بندی با موفقیت حذف شد");
      queryClient.invalidateQueries({
        queryKey: ["get-categories"],
      });
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "خطا در حذف دسته بندی!");
    },
  });
  return (
    <div className="mt-12.5 mb-17.5 [&_div]:flex [&_div]:gap-3 [&_div]:items-center [&_div]:my-5 [&_div]:p-4 [&_div]:border-2 [&_div]:bg-gray-200 [&_div]:rounded-sm">
      {isLoading ? (
        <Spinner className="size-10" />
      ) : (
        data?.map((item) => (
          <div key={item._id}>
            <img src={`${item.icon}.svg`} alt="" />
            <h5 className="ms-2.5 text-sm w-30">{item.name}</h5>
            <p className="w-full text-end text-red-800">slug:{item.slug}</p>
            <button onClick={() => deleteCategory(item._id)} className="bg-red-800 w-fit text-white py-2 px-3 text-sm rounded-sm cursor-pointer">
              {isPending && variables === item._id ? "در حال حذف" : "حذف"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
