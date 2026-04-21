import { useMemo } from "react";
import Header, { type NavItem } from "./components/Header";
import Footer from "./components/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Business from "./pages/Business";
import Categories from "./pages/Categories";
import Clients from "./pages/Clients";
import Process from "./pages/Process";
import Contact from "./pages/Contact";

export default function App() {
  const nav = useMemo<NavItem[]>(
    () => [
      { to: "/", label: "首页" },
      { to: "/about", label: "公司简介" },
      { to: "/business", label: "核心业务" },
      { to: "/categories", label: "配送品类齐全" },
      { to: "/clients", label: "服务客户" },
      { to: "/process", label: "服务流程" },
      { to: "/contact", label: "联系我们" },
    ],
    [],
  );

  return (
    <div className="app">
      <Header brand="西安鑫雅立道商贸有限公司" nav={nav} />
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home baseUrl={import.meta.env.BASE_URL} />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

