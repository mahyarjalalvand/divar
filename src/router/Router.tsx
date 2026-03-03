import { Spinner } from "@/components/ui/spinner";
import PageNotFound from "@/pages/404";
import AdminPage from "@/pages/AdminPage";
import AuthPage from "@/pages/AuthPage";
import DashboardPage from "@/pages/DashboardPage";
import HomePage from "@/pages/HomePage";
import { getProfile } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";

function Router() {
  const { data, isLoading, error } = useQuery({ queryKey: ["profile"], queryFn: getProfile });
  console.log(data, error, isLoading);
  if (isLoading) return <Spinner className="size-8" />;
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
