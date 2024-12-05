import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ReactQueryProvider from "./api/config/react-query/react-query.provider.tsx";
import { DataStoreProvider } from "./context/DataStore.provider.tsx";
import "./index.css";
import { AppRoutes } from "./routes/app-routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ReactQueryProvider>
        <DataStoreProvider>
          <AppRoutes />
        </DataStoreProvider>
      </ReactQueryProvider>
    </BrowserRouter>
  </StrictMode>
);
