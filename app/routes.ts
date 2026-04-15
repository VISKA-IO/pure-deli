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
    route("news", "routes/news.tsx"),
  ]),
] satisfies RouteConfig;
