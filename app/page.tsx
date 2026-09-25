import Image from "next/image";
import type { ReactNode } from "react";
import {
  BoxIcon,
  CartIcon,
  GemIcon,
  GlobeIcon,
  LeafIcon,
  PencilIcon,
  PeopleIcon,
  PrinterIcon,
  ShirtIcon,
  ShopIcon,
} from "./icons";

const steps: { title: string; text: string; icon: ReactNode }[] = [
  { title: "Design", text: "Create your designs or use our templates.", icon: <PencilIcon /> },
  { title: "Connect", text: "Link your store (Shopify, Etsy, Amazon and more).", icon: <ShopIcon /> },
  { title: "Sell", text: "Customers place orders in your store.", icon: <CartIcon /> },
  { title: "We Produce", text: "Printed with high quality in our facilities.", icon: <PrinterIcon /> },
  { title: "We Ship", text: "Fast and reliable delivery to your customers worldwide.", icon: <BoxIcon /> },
];

const tiles = [
  { src: "/images/tile-design.jpg", alt: "Laptop with t-shirt design tool", title: "DESIGN", text: "Your creativity. Our technology." },
  { src: "/images/tile-print.jpg", alt: "Direct-to-garment printer printing a t-shirt", title: "PRINT", text: "High quality. Made to last." },
  { src: "/images/tile-pack.jpg", alt: "Folded markalash t-shirts", title: "PACK", text: "Carefully and sustainably." },
  { src: "/images/tile-ship.jpg", alt: "markalash shipping box", title: "SHIP", text: "To the world." },
  { src: "/images/tile-grow.jpg", alt: "Happy woman in a Small Brands Big Stories shirt", title: "GROW", text: "We're with you." },
];

const usps: { label: [string, string]; icon: ReactNode }[] = [
  { label: ["Sustainable", "Production"], icon: <LeafIcon /> },
  { label: ["High", "Quality"], icon: <GemIcon /> },
  { label: ["Supporting", "Entrepreneurs"], icon: <PeopleIcon /> },
  { label: ["Worldwide", "Delivery"], icon: <GlobeIcon /> },
];

const features: { label: [string, string]; icon: ReactNode; col: string }[] = [
  { label: ["Global", "Shipping"], icon: <GlobeIcon />, col: "col-xl-2" },
  { label: ["Eco-Friendly", "Production"], icon: <LeafIcon />, col: "col-xl-2" },
  { label: ["Wide Product", "Range"], icon: <ShirtIcon />, col: "col-xl-2" },
  { label: ["For Entrepreneurs", "and Creators"], icon: <PeopleIcon />, col: "col-xl-3" },
];

function Logo() {
  return (
    <a className="mk-logo" href="#" aria-label="markalash.com home">
      <svg className="mk-mark" viewBox="0 0 132 96">
        <use href="#mk-mark" />
      </svg>
      <span className="word">
        markalash
        <span className="mk-com">
          <span>.com</span>
        </span>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      {/* Reusable logo mark (monogram + colour swoosh) */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <symbol id="mk-mark" viewBox="0 0 132 96">
          <path d="M6 64 V30 c0-10 7-16 15-16 c6 0 10 3 13 7 c3-4 8-7 14-7 c9 0 15 6 15 16 v34 H48 V33 c0-4-2-6-5-6 s-5 2-5 6 v31 H29 V33 c0-4-2-6-5-6 s-5 2-5 6 v31 Z" fill="currentColor" />
          <path d="M67 64 V6 h13 v33 l20-22 h17 l-22 23 l24 24 h-17 l-22-22 v22 Z" fill="currentColor" />
          <path d="M2 70 C 26 92, 70 94, 118 80" fill="none" stroke="#1c6fe3" strokeWidth="5" strokeLinecap="round" />
          <path d="M3 64 C 22 84, 62 88, 108 76" fill="none" stroke="#e8287c" strokeWidth="5" strokeLinecap="round" />
          <path d="M4 58 C 18 76, 50 80, 92 72" fill="none" stroke="#f6c21b" strokeWidth="5" strokeLinecap="round" />
        </symbol>
      </svg>

      <header className="hero">
        <div className="hero-photo">
          <Image src="/images/hero-models.jpg" alt="Two models wearing markalash t-shirts" fill priority sizes="(max-width: 991.98px) 100vw, 64vw" />
        </div>

        <div className="container-fluid hero-inner px-4 hero-pad">
          <div className="hero-copy">
            <Logo />
            <div className="tagline">Your Brand Starts Here</div>

            <h1>
              Turn Your Ideas
              <br />
              Into Real Products
            </h1>
            <p className="lead-line">Design. Sell. We Produce. You Grow.</p>
            <p className="intro">
              Your on-demand production and fulfilment partner for custom apparel. From design to global delivery — we make it simple.
            </p>

            <div className="usp">
              {usps.map(({ label, icon }) => (
                <div key={label.join(" ")}>
                  {icon}
                  <span>
                    {label[0]}
                    <br />
                    {label[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="coming" aria-label="Coming soon – same ideas, bigger possibilities">
          <span className="brush">
            Coming<span>Soon</span>
          </span>
          <svg className="swash" viewBox="0 0 240 40" aria-hidden="true">
            <path d="M6 32 C 70 18, 150 8, 234 6" fill="none" stroke="#e8287c" strokeWidth="9" strokeLinecap="round" />
          </svg>
          <p className="sub">
            Same ideas.
            <br />
            Bigger
            <br />
            possibilities.
          </p>
        </div>
      </header>

      <main>
        {/* How it works */}
        <section className="steps border-bottom" aria-label="How it works">
          <div className="container-fluid px-4 px-xl-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-3 g-lg-4">
              {steps.map(({ title, text, icon }, i) => (
                <div className="col" key={title}>
                  <div className="step">
                    <span className="num">{i + 1}</span>
                    <span className="bubble">{icon}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process photos */}
        <section className="tiles" aria-label="From design to growth">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-1 m-0">
            {tiles.map(({ src, alt, title, text }, i) => (
              <div className={i === tiles.length - 1 ? "col col-12" : "col"} key={title}>
                <figure className="tile m-0">
                  <Image src={src} alt={alt} fill sizes="(max-width: 767.98px) 50vw, (max-width: 991.98px) 33vw, 20vw" />
                  <figcaption>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </section>

        {/* Feature strip */}
        <section className="strip">
          <div className="container-fluid px-4 px-xl-5">
            <div className="row align-items-center g-4">
              {features.map(({ label, icon, col }) => (
                <div className={`col-6 col-md-3 ${col}`} key={label.join(" ")}>
                  <div className="feat">
                    {icon}
                    <span>
                      {label[0]}
                      <br />
                      {label[1]}
                    </span>
                  </div>
                </div>
              ))}
              <div className="col-12 col-xl-3 motto-col py-2">
                <div className="motto" aria-label="Ideas, People, Planet">
                  <span>Ideas</span>
                  <span>People</span>
                  <span>Planet</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="container-fluid px-4 px-xl-5">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-3">
              <Logo />
              <span className="vr-soft d-none d-sm-block"></span>
              <span className="member">A Member of Edsa Group</span>
            </div>
            <a className="url" href="https://www.markalash.com">
              www.markalash.com
            </a>
            <div className="d-flex align-items-center gap-4">
              <span className="vr-soft d-none d-lg-block"></span>
              <nav className="d-flex flex-wrap gap-4" aria-label="Footer">
                <a href="#">Ideas</a>
                <a href="#">Apparel</a>
                <a href="#">People</a>
                <a href="#">Planet</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
