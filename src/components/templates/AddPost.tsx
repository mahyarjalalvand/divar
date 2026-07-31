import { getCategory } from "@/services/admin";
import { useQuery } from "@tanstack/react-query";
import type React from "react";

function AddPost() {
  const { data } = useQuery({ queryKey: ["get-categories"], queryFn: getCategory });
  const addHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };
  return (
    <form onSubmit={addHandler} className="flex flex-col gap-3 pt-5 [&>input]:bg-gray-300 [&>input]:rounded-sm [&>input]:py-2 [&>input]:ps-2 [&>input]:text-sm ">
      <h3>افزودن آگهی</h3>
      <label htmlFor="title">عنوان</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="content">توضیحات</label>
      <textarea name="content" id="content" className="bg-gray-300 ps-2 py-2 text-sm rounded-sm" rows={5}></textarea>
      <label htmlFor="amount">عنوان</label>
      <input type="text" name="amount" id="amount" />
      <label htmlFor="city">شهر</label>
      <input type="text" name="city" id="city" />
      <label htmlFor="category">دسته بندی ها</label>
      <select name="category" id="category">
        {data?.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
      <label htmlFor="images">عکس</label>
      <input type="file" name="images" id="images" />
      <button type="submit">ایجاد</button>
    </form>
  );
}

export default AddPost;
