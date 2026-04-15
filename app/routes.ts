import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/_layout.tsx", [
    index("routes/home.tsx"),
    route("order", "routes/order.tsx"),
    route("panta", "routes/order.tsx", { id: "panta" }),
    route("news", "routes/news.tsx"),
    route("frettir", "routes/news.tsx", { id: "frettir" }),
    route("news/:slug", "routes/news-detail.tsx"),
    route("frettir/:slug", "routes/news-detail.tsx", { id: "frettir-detail" }),
    route("personuverndarstefna", "routes/privacy-policy.tsx"),
  ]),
] satisfies RouteConfig;
