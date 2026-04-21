import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

export type NavItem = { to: string; label: string };

export default function Header({ brand, nav }: { brand: string; nav: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const items = useMemo(() => nav ?? [], [nav]);

  return (
    <header className="header">
      <div className="container headerInner">
        <Link className="brand" to="/" aria-label="返回首页" onClick={() => setOpen(false)}>
          <span className="brandMark" aria-hidden="true">
            <Logo title="西安鑫雅立道商贸有限公司" />
          </span>
          <span className="brandText">{brand}</span>
        </Link>

        <nav className="nav desktop" aria-label="主导航">
          {items.map((it) => (
            <Link
              key={it.to}
              className={`navLink ${location.pathname === it.to ? "active" : ""}`}
              to={it.to}
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <button className="iconBtn mobile" onClick={() => setOpen(true)} aria-label="打开菜单">
          <span className="hamburger" aria-hidden="true" />
        </button>
      </div>

      {open && (
        <div className="drawer" role="dialog" aria-modal="true" aria-label="移动端菜单">
          <div className="drawerBackdrop" onClick={() => setOpen(false)} />
          <div className="drawerPanel">
            <div className="drawerTop">
              <div className="drawerBrand">{brand}</div>
              <button className="iconBtn" onClick={() => setOpen(false)} aria-label="关闭菜单">
                ✕
              </button>
            </div>
            <div className="drawerNav">
              {items.map((it) => (
                <Link key={it.to} className="drawerLink" to={it.to} onClick={() => setOpen(false)}>
                  {it.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

