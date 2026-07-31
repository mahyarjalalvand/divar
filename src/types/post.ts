export interface Post {
  _id: string;
  title: string;
  amount: number;
  userId: string;
  content: string;
  category: string;
  province: string;
  city: string;
  distrct: string;
  address: string;
  cordinate: [number, number];
  images: string[];
  options: Record<string, string>;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface PostsResponse {
  posts: Post[];
}
