import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      {/* <AuthPage />
      <Toaster /> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
