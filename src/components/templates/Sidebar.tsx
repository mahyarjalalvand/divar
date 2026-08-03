import type { CategoryType } from "@/types/category";
import clsx from "clsx";
import type { Dispatch, SetStateAction } from "react";

// todo . add type for getting data from api

interface SidebarProps {
  categories: CategoryType[];
  catId: CategoryType["_id"] | null;
  setCatId: Dispatch<SetStateAction<CategoryType["_id"] | null>>;
}

function Sidebar({ categories, catId, setCatId }: SidebarProps) {
  return (
    <div className="mt-7.5 w-50">
      <h4>دسته ها</h4>
      <ul>
        {categories?.map((cat) => (
          <li
            key={cat._id}
            className={clsx("flex gap-3 my-4 items-center px-1 py-1 rounded-sm justify-between text-gray-400 hover:text-black transition-colors duration-200", {
              "bg-gray-300 text-black!": catId === cat._id,
            })}>
            <button type="button" onClick={() => setCatId(cat._id)} className="flex items-center cursor-pointer w-full">
              <img src={`${cat.icon}.svg`} alt="" />
              <p className="font-extralight ms-2.5 ">{cat.name}</p>
            </button>
            {catId === cat._id && (
              <button className="text-red-800 cursor-pointer" type="button" onClick={() => setCatId(null)}>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
