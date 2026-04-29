import { getCategory } from "@/services/admin";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../ui/spinner";
interface CategoryDataType {
  name: string;
  _id: number;
  icon: string;
  slug: string;
}
function CategoryList() {
  const { data, isLoading } = useQuery({ queryKey: ["get-categories"], queryFn: getCategory });
  return (
    <div className="mt-12.5 mb-17.5 [&_div]:flex [&_div]:my-5 [&_div]:p-4 [&_div]:border-2 [&_div]:bg-gray-200 [&_div]:rounded-sm">
      {isLoading ? (
        <Spinner className="size-10" />
      ) : (
        data.data?.map((item: CategoryDataType) => (
          <div key={item._id}>
            <img src={`${item.icon}.svg`} alt="" />
            <h5 className="ms-2.5 text-sm w-30">{item.name}</h5>
            <p className="w-full text-end text-red-800">slug:{item.slug}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
