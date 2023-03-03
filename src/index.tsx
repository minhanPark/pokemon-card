import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createGlobalStyle } from "styled-components";

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
 }
  body {
    margin: 0;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <GlobalStyle />
    </QueryClientProvider>
  </React.StrictMode>
);
