import { addCategory } from "@/services/admin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "sonner";
export interface FormStateType {
  name: string;
  slug: string;
  icon: string;
}
function CategoryFrom() {
  // todo add type for fc event
  // todo use react hook form and valibot
  const queryClient = useQueryClient();
  const [form, setForm] = useState<FormStateType>({ name: "", slug: "", icon: "" });

  const { mutate, isPending } = useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      toast.success("دسته ایجاد شد");

      queryClient.invalidateQueries({
        queryKey: ["get-categories"],
      });
    },
    onError: () => {
      toast.error("مشکلی پیش آمده است");
    },
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.slug || !form.icon) {
      toast.error("لطفا مقادیر را کامل پر کنید");
      return;
    }
    mutate(form, {
      onSuccess: () => {
        setForm({ name: "", slug: "", icon: "" });
      },
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="[&_label]:block [&_label]:text-sm [&_label]:mb-2.5 [&_input]:block [&_input]:w-75 [&_input]:p-2.5 [&_input]:border [&_input]:border-gray-300 [&_input]:rounded-sm [&_input]:mb-7.5 [&_p]:bg-red-800 [&_p]:text-white [&_p]:mb-5 [&_p]:p-1.5 [&_p]:text-center [&_p]:rounded-sm">
      <h3 className="mb-7.5 border-b-2 border-red-800 w-fit pb-1.5">دسته بندی جدید</h3>
      <label htmlFor="name">نام دسته بندی</label>
      <input type="text" name="name" id="name" value={form.name} onChange={changeHandler} />
      <label htmlFor="slug">اسلاگ</label>
      <input type="text" name="slug" id="slug" value={form.slug} onChange={changeHandler} />
      <label htmlFor="icon">ایکن</label>
      <input type="text" name="icon" id="icon" value={form.icon} onChange={changeHandler} />
      <button type="submit" disabled={isPending} className="bg-red-800 text-white py-2.5 px-6.25 text-sm cursor-pointer rounded-sm">
        {isPending ? "در حال ثبت..." : "ایجاد"}
      </button>
    </form>
  );
}

export default CategoryFrom;
