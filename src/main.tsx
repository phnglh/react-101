import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
import Provider from "./provider.tsx";
import reportWebVitals from "./reportWebVitals.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
reportWebVitals(console.log);
