export interface CategoryType {
  _id: string;
  children: [];
  icon: string;
  parents: [];
  slug: string;
  name: string;
}
export type ErrorResponse = { message: string };
export interface CategoryResponse {
  categories: CategoryType[];
}
