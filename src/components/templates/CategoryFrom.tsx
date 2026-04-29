import { addCategory } from "@/services/admin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
export interface FormStateType {
  name: string;
  slug: string;
  icon: string;
}
function CategoryFrom() {
  // todo add type for fc event
  const queryClient = useQueryClient();
  const [form, setForm] = useState<FormStateType>({ name: "", slug: "", icon: "" });

  const { mutate, error, data } = useMutation(addCategory, {
    onSuccess: () => queryClient.invalidateQueries("get-categories"),
  });

  // console.log({ error });

  const changeHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    setForm({ ...form, [event.target?.name]: event.target.value });
  };

  const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!form.name || !form.slug || !form.icon) return;
    // console.log(form);
    mutate(form);
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className="[&_label]:block [&_label]:text-sm [&_label]:mb-2.5 [&_input]:block [&_input]:w-75 [&_input]:p-2.5 [&_input]:border [&_input]:border-gray-300 [&_input]:rounded-sm [&_input]:mb-7.5 [&_p]:bg-red-800 [&_p]:text-white [&_p]:mb-5 [&_p]:p-1.5 [&_p]:text-center [&_p]:rounded-sm">
      <h3 className="mb-7.5 border-b-2 border-red-800 w-fit pb-1.5">دسته بندی جدید</h3>
      {!!error && <p>مشکلی پیش آمده است</p>}
      {data?.status === 201 && <p>دسته بندی با موفقیت ایجاد شد</p>}
      <label htmlFor="name">نام دسته بندی</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="slug">اسلاگ</label>
      <input type="text" name="slug" id="slug" />
      <label htmlFor="icon">ایکن</label>
      <input type="text" name="icon" id="icon" />
      <button type="submit" className="bg-red-800 text-white py-2.5 px-6.25 text-sm cursor-pointer rounded-sm">
        ایجاد
      </button>
    </form>
  );
}

export default CategoryFrom;
