import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./HomePage.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutPage from "./pages/about/AboutPage.tsx";
import ProductsPage from "./pages/products/ProductsPage.tsx";
import ContactPage from "./pages/contact/ContactPage.tsx";
import SubscriptionPage from "./pages/subscription/SubscriptionPage.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="subscription" element={<SubscriptionPage />} />

        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
