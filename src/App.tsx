import { useMemo } from "react";
import Header, { type NavItem } from "./components/Header";
import Footer from "./components/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ImagePage from "./pages/ImagePage";

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
          <Route
            path="/"
            element={
              <div className="heroPage">
                <img className="heroImg" src="/img/1.png" alt="西安鑫雅立道商贸有限公司 - 首屏主视觉" />
              </div>
            }
          />
          <Route path="/about" element={<ImagePage src="/img/2.png" alt="公司简介" />} />
          <Route path="/business" element={<ImagePage src="/img/3.png" alt="核心业务" />} />
          <Route path="/categories" element={<ImagePage src="/img/4.png" alt="配送品类齐全" />} />
          <Route path="/clients" element={<ImagePage src="/img/5.png" alt="服务客户" />} />
          <Route path="/process" element={<ImagePage src="/img/6.png" alt="服务流程" />} />
          <Route path="/contact" element={<ImagePage src="/img/7.png" alt="联系我们与公司资质" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

