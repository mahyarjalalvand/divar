import { getCategory } from "@/services/admin";
import { createPost } from "@/services/post";
import { useMutation, useQuery } from "@tanstack/react-query";
import type React from "react";
import { toast } from "sonner";

function AddPost() {
  const { data } = useQuery({ queryKey: ["get-categories"], queryFn: getCategory });
  const { mutate, isPending } = useMutation({
    mutationFn: createPost,
  });

  const addHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    mutate(new FormData(form), {
      onSuccess: (data) => {
        toast.success(data.message ?? "آگهی با موفقیت ثبت شد");
        form.reset();
      },
      onError: (error) => {
        toast.error(error instanceof Error ? error.message : "خطایی رخ داد!");
      },
    });
  };
  return (
    <form
      onSubmit={addHandler}
      className="flex flex-col gap-3 pt-5 [&>input]:rounded-sm [&>input]:py-2 [&>input]:ps-2 [&>input]:text-sm [&>input]:w-75 [&>input]:border [&>input]:border-gray-300 [&>input]:block [&>label]:block [&>label]:text-sm [&>label]:mb-2.5">
      <h3 className="mb-7 pb-3 border-b-2 border-red-800 w-fit">افزودن آگهی</h3>
      <label htmlFor="title">عنوان</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="content">توضیحات</label>
      <textarea name="content" id="content" className="border border-gray-300 ps-2 py-2 text-sm rounded-sm block w-75" rows={5}></textarea>
      <label htmlFor="amount">قیمت</label>
      <input type="number" name="amount" id="amount" />
      <label htmlFor="city">شهر</label>
      <input type="text" name="city" id="city" />
      <label htmlFor="category">دسته بندی ها</label>
      <select name="category" id="category" className="w-75 outline-0 border border-gray-300 rounded-sm py-2 px-2">
        {data?.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
      <label htmlFor="images">عکس</label>
      <input type="file" name="images" id="images" />
      <button type="submit" disabled={isPending} className="bg-red-800 text-white cursor-pointer rounded-sm text-base py-2.5 px-6 w-fit">
        {isPending ? "در حال ثبت..." : "ایجاد"}
      </button>
    </form>
  );
}

export default AddPost;
