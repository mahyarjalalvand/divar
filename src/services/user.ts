import { getCookie } from "@/utils/cookie";
import { fetchWithAuth } from "./auth";
import type { PostsResponse } from "@/types/post";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const getProfile = async () => {
  const hasToken = getCookie("accessToken") || getCookie("refreshToken");

  if (!hasToken) return null;

  const res = await fetchWithAuth("user/whoami");
  const data = await res.json();
  return data;
};

const getAllPosts = async (): Promise<PostsResponse> => {
  try {
    const req = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!req.ok) {
      throw new Error("Failed to fetch posts");
    }
    const res: PostsResponse = await req.json();
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getProfile, getAllPosts };
