import { Link } from "react-router";

const CATEGORIES = [
  { name: "Vefjurnar", url: "/panta?category=697223eb47d171e0186713d7" },
  { name: "Salötin", url: "/panta?category=697223fc7cf2afb6912549b6" },
  { name: "Toastin", url: "/panta?category=697223c789f4922277697fda" },
  {
    name: "Morgunboost/Safar",
    url: "/panta?category=697223d5924865d6fca96f78",
  },
  { name: "Drykkir", url: "/panta?category=69722527c45a042a29570aa9" },
  { name: "Boost - Millimál", url: "/panta?category=6972242d164f1aa780e4a6d3" },
  { name: "Veislubakkar", url: "/panta?category=6972254889f4922277698308" },
  { name: "Safahreinsun", url: "/panta?category=69722540f1dfd80c8b323b18" },
  { name: "Millimál", url: "/panta?category=6972240c47d171e0186714aa" },
];

export default function Footer() {
  return (
    <footer className="bg-footer w-full">
      <div className="container pt-13 lg:pt-16 pb-13 lg:pb-27.5">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-7.5 gap-y-12 lg:gap-y-0 lg:gap-x-12">
          <div className="lg:col-span-1 col-span-2 flex justify-center lg:justify-start">
            <div className="lg:h-32.25 h-25 lg:w-32.25 w-25 rounded-full overflow-hidden bg-olive shadow-sm mb-6">
              <img
                src="/images/pure-deli-logo.png"
                alt="Pure Deli"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl text-black mb-4.5">
              Hafðu samband
            </h4>
            <div className="space-y-2.5">
              <p className="font-body text-sm lg:text-base text-black flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                puredeli@puredeli.is
              </p>
              <p className="font-body text-sm lg:text-base text-black flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                553 3133
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl text-black mb-4.5">
              Matseðill
            </h4>
            <ul className="space-y-3">
              {CATEGORIES.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to={cat.url}
                    className="font-body text-sm lg:text-base text-black hover:underline"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl text-black mb-4.5">
              Samfélagsmiðlar
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.facebook.com/Puredeli.Iceland"
                  className="font-body text-sm lg:text-base text-black hover:underline flex items-center gap-2"
                  target="_blank"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/puredeli_iceland"
                  className="font-body text-sm lg:text-base text-black hover:underline flex items-center gap-2"
                  target="_blank"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/personuverndarstefna"
                  className="font-body text-sm lg:text-base text-black hover:underline"
                >
                  Persónuverndarstefna
                </Link>
              </li>
              <li>
                <Link
                  to="/personuverndarstefna"
                  className="font-body text-sm lg:text-base text-black hover:underline"
                >
                  Notkunarskilmálar
                </Link>
              </li>
              <li>
                <p className="font-body text-sm lg:text-base text-black mt-4">
                  Pure deli &copy; 2026
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
