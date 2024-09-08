import { createRoot } from "react-dom/client";
import Menu from "./page/Menu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./app/store";
import { Provider } from "react-redux";
import './index.css'
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  //   <Menu />
  // </Provider>
  <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <AppRouter /> */}<Menu />
      </QueryClientProvider>
    </Provider>
);
