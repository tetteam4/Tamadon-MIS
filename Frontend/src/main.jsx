import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Components/Home.jsx";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";
import About from "./Components/about";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StyledEngineProvider>
    <CssBaseline />
    <RouterProvider router={router} />
  </StyledEngineProvider>
);
