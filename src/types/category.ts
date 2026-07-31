export interface CategoryType {
  _id: string;
  children: [];
  icon: string;
  parents: [];
  slug: string;
  name: string;
}
export interface CategoryResponse {
  categories: CategoryType[];
}
