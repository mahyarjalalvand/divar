import AuthPage from "./pages/AuthPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import AdminPage from "./pages/AdminPage";
import PageNotFound from "./pages/404";

function App() {
  return (
    <>
      {/* <AuthPage />
      <Toaster /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
