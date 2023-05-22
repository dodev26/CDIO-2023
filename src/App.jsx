// import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ServiceCategoryPage from "./pages/ServicesPage/ServiceCategoryPage";
import ServicesCategoryNamePage from "./pages/ServicesPage/ServicesCategoryNamePage";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />}>
            <Route index element={<ServiceCategoryPage />} />
            <Route path="category" element={<ServicesCategoryNamePage />} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
