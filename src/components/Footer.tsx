import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-footer">
      <div className="mx-auto max-w-[1200px] px-16 py-16">
        <div className="grid grid-cols-5 gap-12">
          <div>
            <div className="h-[70px] w-[70px] rounded-full overflow-hidden bg-olive shadow-sm mb-6">
              <img src="/images/logo.png" alt="Pure Deli" className="w-full h-full object-contain" />
            </div>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-black mb-6">Contact us</h4>
            <div className="space-y-3">
              <p className="font-body text-sm text-black/60 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                puredeli@puredeli.is
              </p>
              <p className="font-body text-sm text-black/60 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                862 3333
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-black mb-6">Menu</h4>
            <ul className="space-y-3">
              {["Salatir", "Vefjurnar", "Toastin", "Morgunmatur/Sníður", "Drykkir", "Bakstur - kaffihaus", "Sérframleiðsla"].map((item) => (
                <li key={item}>
                  <Link to="/menu" className="font-body text-sm text-black/60 hover:text-black transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-black mb-6">Social media</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-body text-sm text-black/60 hover:text-black transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-black/60 hover:text-black transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3 mt-10">
              <li><Link to="/privacy" className="font-body text-sm text-black/60 hover:text-black transition-colors">Privacy policy</Link></li>
              <li><Link to="/terms" className="font-body text-sm text-black/60 hover:text-black transition-colors">Terms use</Link></li>
              <li><p className="font-body text-sm text-black/40 mt-4">Pure deli &copy; 2026</p></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
