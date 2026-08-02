import type { FormStateType } from "@/components/templates/CategoryFrom";
import type { CategoryType, ErrorResponse } from "@/types/category";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const GET_CATEGORIES_ERROR = "دریافت دسته بندی ها ناموفق بوده است!";
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
const getCategory = async (): Promise<CategoryType[]> => {
  let req: Response;

  try {
    req = await fetch(`${BASE_URL}category`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
  } catch {
    throw new Error(GET_CATEGORIES_ERROR);
  }

  const res: CategoryType[] | ErrorResponse | null = await req.json().catch(() => null);
  if (!req.ok) {
    throw new Error((res as ErrorResponse | null)?.message ?? GET_CATEGORIES_ERROR);
  }
  if (!Array.isArray(res)) throw new Error(GET_CATEGORIES_ERROR);

  return res as CategoryType[];
};

const deleteCategoryHandler = async (catId: string) => {
  const req = await fetch(`${BASE_URL}category/${catId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  const res = await req.json();
  if (!req.ok) {
    throw new Error(res.message || "حذف دسته بندی ناموفق بود");
  }
  return res;
};
export { addCategory, getCategory, deleteCategoryHandler };
