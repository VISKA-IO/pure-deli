import { useEffect } from "react";
import type { MetaFunction } from "react-router";
import "./order.css";

const WIDGET_SRC = "https://widget.upsell.is/dist/index.js?v=2025-04-13";
const STORE_ID = "6970d21403e86bbbf6a6d40c";

export const meta: MetaFunction = () => [
  { title: "Order - Pure Deli" },
];

export default function Order() {
  useEffect(() => {
    if (!window.upsell_widget) {
      window.upsell_widget = function (...args: unknown[]) {
        (window.upsell_widget.q = window.upsell_widget.q || []).push(args);
      };
    }

    if (!document.getElementById("upsell_widget")) {
      const script = document.createElement("script");
      script.id = "upsell_widget";
      script.src = WIDGET_SRC;
      script.async = true;
      const first = document.getElementsByTagName("script")[0];
      first.parentNode!.insertBefore(script, first);
    }

    window.upsell_widget("init", { id: STORE_ID });

    return () => {
      const el = document.getElementById("upsell-widget");
      if (el) el.innerHTML = "";
    };
  }, []);

  return (
    <div className="order-page">
      <header className="order-header">
        <a href="/" className="order-logo-link">
          <img className="order-logo" src="/images/logo.png" alt="Pure Deli" />
        </a>
      </header>
      <div className="widget-container">
        <div style={{ maxWidth: "unset" }} id="upsell-widget" />
      </div>
    </div>
  );
}
