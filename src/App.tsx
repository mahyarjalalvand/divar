import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/Router";
import { Toaster } from "sonner";
import defaultOptions from "./config/reactQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
  const queryClient = new QueryClient({ defaultOptions });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <Toaster />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
