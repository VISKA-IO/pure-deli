import { useState } from "react";
import { Link } from "react-router";
import { CloseIcon } from "./_shared/icons/CloseIcon";
import { HamburgerIcon } from "./_shared/icons/HamburgerIcon";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-header h-17 lg:h-18">
        <div className="container flex items-center justify-between h-full relative">
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              to="/menu"
              className="font-body text-base uppercase text-black"
            >
              Menu
            </Link>
            <Link
              to="/party"
              className="font-body text-base uppercase text-black"
            >
              Party
            </Link>
            <Link
              to="/news"
              className="font-body text-base uppercase text-black"
            >
              News
            </Link>
          </nav>

          <button
            type="button"
            className="lg:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <HamburgerIcon className="w-6 h-6" />
            )}
          </button>

          <Link
            to="/"
            className="absolute left-1/2 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/3 z-50"
          >
            <div className="lg:h-25 lg:w-25 h-11 w-11 lg:p-1 rounded-full overflow-hidden bg-header lg:shadow-sm">
              <img
                src="/images/logo.png"
                alt="Pure Deli"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          <div className="flex items-center gap-5.5">
            <Link
              to="/account"
              className="hidden md:block font-body text-base uppercase text-black"
            >
              Account
            </Link>
            <a
              href="/order"
              className="rounded-full bg-olive px-4 py-2 lg:py-2.5 font-body font-medium text-sm lg:text-base uppercase text-white"
            >
              Order
            </a>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 top-17 z-40 bg-header lg:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container flex flex-col items-center gap-6 pt-40">
          {[
            { to: "/menu", label: "Menu" },
            { to: "/party", label: "Party" },
            { to: "/news", label: "News" },
            { to: "/account", label: "Account" },
          ].map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className={`font-body text-2xl uppercase text-black transition-all duration-300 ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3"
              }`}
              style={{
                transitionDelay: menuOpen ? `${(i + 1) * 75}ms` : "0ms",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
