import { fetchWithAuth } from "./auth";

// import { toast, Toaster } from "sonner";
const getProfile = async () => {
  const res = await fetchWithAuth("user/whoami");
  const data = await res.json();
  return data;
};

export { getProfile };
