import { getCategory } from "@/services/admin";
import { useQuery } from "@tanstack/react-query";

function Sidebar() {
  const { data } = useQuery({ queryKey: ["get-categories"], queryFn: getCategory });
  //   console.log(data)
  return <div>sidebar</div>;
}

export default Sidebar;
