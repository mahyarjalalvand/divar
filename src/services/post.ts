import { getCookie } from "@/utils/cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;
type CreatePostResponse = { message: string };
export const createPost = async (formDate: FormData): Promise<CreatePostResponse> => {
  const token = getCookie("accessToken");
  if (!token) {
    throw new Error("لطفا ابتدا وارد حساب کاربری خود شوید");
  }
  const response = await fetch(`${BASE_URL}post/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formDate,
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error("ثبت آگهی ناموفق بود");
  }
  return data;
};
