import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/_layout.tsx", [
    index("routes/home.tsx"),
    route("panta", "routes/order.tsx"),
    route("frettir", "routes/news.tsx"),
    route("frettir/:slug", "routes/news-detail.tsx"),
    route("personuverndarstefna", "routes/privacy-policy.tsx"),
  ]),
] satisfies RouteConfig;
