import { useEffect } from "react";
import type { MetaFunction } from "react-router";
import "./order.css";
import "../styles/productPage.css";
import "../styles/loginPage.css";
import "../styles/detailPage.css";
import "../styles/dealPage.css";
import "../styles/orderMethodPage.css";
import "../styles/checkoutPage.css";
import "../styles/myAccountPage.css";
import "../styles/orderDetailPage.css";

const WIDGET_SRC = "https://widget.upsell.is/dist/index.js?v=2025-04-13";
const STORE_ID = "6970d21403e86bbbf6a6d40c"; // Pure Deli
// const STORE_ID = "6577142c338bfd38f9a79d2a"; // VISKA

export const meta: MetaFunction = () => [{ title: "Panta - Pure Deli" }];

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
      <div className="widget-container md:container!">
        <div style={{ maxWidth: "unset" }} id="upsell-widget" />
      </div>
    </div>
  );
}
