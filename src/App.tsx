import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="Wrap">
        <Header />
        <Main />
      </div>
    </QueryClientProvider>
  );
}
