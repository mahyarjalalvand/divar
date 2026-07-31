import CategoryFrom from "@/components/templates/CategoryFrom";
import CategoryList from "@/components/templates/CategoryList";

function AdminPage() {
  return (
    <div className="container">
      <CategoryList />
      <CategoryFrom />
    </div>
  );
}

export default AdminPage;
