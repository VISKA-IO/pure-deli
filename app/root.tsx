import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { LinksFunction } from "react-router";
import "./index.css";

export const links: LinksFunction = () => [
  {
    rel: "icon",
    type: "image/png",
    href: "/cropped-pure-deli-favhq-32x32.png",
    sizes: "32x32",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/cropped-pure-deli-favhq-192x192.png",
    sizes: "192x192",
  },
  {
    rel: "apple-touch-icon",
    href: "/cropped-pure-deli-favhq-180x180.png",
  },
  {
    rel: "stylesheet",
    href: "https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="msapplication-TileImage"
          content="/cropped-pure-deli-favhq-270x270.png"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
