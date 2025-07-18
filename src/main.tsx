import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./HomePage.tsx";
import { HashRouter, Route, Routes } from "react-router";
import AboutPage from "./pages/about/AboutPage.tsx";
import ProductsPage from "./pages/products/ProductsPage.tsx";
import ContactPage from "./pages/contact/ContactPage.tsx";
import SubscriptionPage from "./pages/subscription/SubscriptionPage.tsx";
import { TranslationProvider } from "./lib/i18n.tsx";
import { ScrollToTop } from "./components/ScrollToTop .tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TranslationProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="subscription" element={<SubscriptionPage />} />

          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </HashRouter>
    </TranslationProvider>
  </StrictMode>
);
