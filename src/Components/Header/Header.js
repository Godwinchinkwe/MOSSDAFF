import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../../App";
import "./Header.css";

const labels = {
  en: {
    about: "About",
    services: "Services",
    business: "Our Business",
    why: "Why Mossdaff",
    approach: "Our Approach",
    insights: "Insights",
    contact: "Contact",
    cta: "Make an Enquiry",
  },
  ja: {
    about: "会社概要",
    services: "サービス",
    business: "事業内容",
    why: "選ばれる理由",
    approach: "取引の流れ",
    insights: "お知らせ",
    contact: "お問い合わせ",
    cta: "お問い合わせ",
  },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = labels[language];
  const nav = [
    ["/about", t.about],
    ["/services", t.services],
    ["/business", t.business],
    ["/why-choose-us", t.why],
    ["/approach", t.approach],
    ["/insights", t.insights],
    ["/contact", t.contact],
  ];
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            {language === "en"
              ? "JAPAN · INTERNATIONAL SOURCING"
              : "日本 · ナイジェリア · 国際調達"}
          </span>
          <div className="topbar-right">
            <a href="mailto:mosdaffinvestment@gmail.com">
              mosdaffinvestment@gmail.com
            </a>
            <div className="language-switch">
              <button
                className={language === "en" ? "active" : ""}
                onClick={() => setLanguage("en")}
                aria-label="English"
              >
                EN
              </button>
              <button
                className={language === "ja" ? "active" : ""}
                onClick={() => setLanguage("ja")}
                aria-label="Japanese"
              >
                日本語
              </button>
            </div>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link
            to="/"
            className="brand"
            onClick={() => setOpen(false)}
            aria-label="Mossdaff Investment home"
          >
            <span className="brand-name">MOSSDAFF</span>
            <span className="brand-sub">INVESTMENT, LTD.</span>
          </Link>
          <button
            className="mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? "×" : "☰"}
          </button>
          <nav className={open ? "nav open" : "nav"}>
            {nav.map(([path, label]) => (
              <NavLink key={path} to={path} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
            <Link
              className="nav-cta"
              to="/contact"
              onClick={() => setOpen(false)}
            >
              {t.cta}
              <span>↗</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
