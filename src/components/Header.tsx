import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-header h-[72px]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between h-full px-16 relative">
        <nav className="flex items-center gap-6">
          <Link to="/menu" className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-black">Menu</Link>
          <Link to="/party" className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-black">Party</Link>
          <Link to="/news" className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-black">News</Link>
        </nav>

        <Link to="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 z-50">
          <div className="h-[90px] w-[90px] rounded-full overflow-hidden bg-white shadow-sm">
            <img src="/images/logo.png" alt="Pure Deli" className="w-full h-full object-contain" />
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/account" className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-black">Account</Link>
          <a href="/order" className="rounded-full bg-olive px-5 py-2.5 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-white">Order</a>
        </div>
      </div>
    </header>
  );
}
