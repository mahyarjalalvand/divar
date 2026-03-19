import type { FormStateType } from "@/components/templates/CategoryFrom";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const addCategory = async (data: FormStateType) => {
  try {
    const createReq = await fetch(`${BASE_URL}category`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await createReq.json();
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getCategory = async () => {
  try {
    const req = await fetch(`${BASE_URL}category`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export default addCategory;
