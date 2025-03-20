import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { Toaster } from "@/components/ui/sonner";

import "./i18n";
import { store } from "./redux";

import "@/resources/styles/main.css";
import { UserProvider } from "./components/context/UserProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <UserProvider>
        <App />
      </UserProvider>
      <Toaster />
    </Provider>
  </StrictMode>
);
