import { fetchWithAuth } from "./auth";

// import { toast, Toaster } from "sonner";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const getProfile = async () => {
  const res = await fetchWithAuth("user/whoami");
  const data = await res.json();
  return data;
};

const getAllPosts = async () => {
  try {
    const req = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { getProfile, getAllPosts };
