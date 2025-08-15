import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Main } from "./components/Main/Main";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="Wrap">
        <button></button>
        <Sidebar />
      </div>
      <Main />
    </QueryClientProvider>
  );
}
