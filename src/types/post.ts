export interface Post {
  _id: string;
  title?: string;
  amount: number;
  userId: string;
  content?: string;
  category: string;
  province: string;
  city?: string;
  distrct: string;
  address: string;
  cordinate: [number, number];
  images: string[];
  options: {
    title?: string;
    content?: string;
    city?: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface PostsResponse {
  posts: Post[];
}
