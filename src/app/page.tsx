import Image, { type StaticImageData } from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { categories, collections, nav, productUrl, social } from "@/lib/site";

import heroImg from "@/assets/Slideshow/17280265262.jpg";
import collectionsImg from "@/assets/Slideshow/17280265664.jpg";
import craftImg from "@/assets/Slideshow/17280265653.jpg";
import tribeImg from "@/assets/Slideshow/17280265363.jpg";
import closingImg from "@/assets/Slideshow/17280265502.jpg";

import sareeImg from "@/assets/Categories/Saree.jpg";
import lehengaImg from "@/assets/Categories/Lehenga.jpg";
import nizamiImg from "@/assets/Categories/Nizami suit.jpg";
import conceptImg from "@/assets/Categories/Concept Saree.jpg";
import longCoatImg from "@/assets/Categories/Long Coat.png";
import contemporaryImg from "@/assets/Categories/Contemprorary Fashion.jpg";

import shems294 from "@/assets/1698834343151.jpg";
import shems295 from "@/assets/1694518900SHEMS295 (1).jpg";
import shems237 from "@/assets/1698313131SHEMS237 (1).jpg";
import sheti018 from "@/assets/1694170411SHETI018 (1).jpg";

const categoryPanels: { label: string; href: string; img: StaticImageData; pos?: string }[] = [
  { label: "Saree", href: categories.saree, img: sareeImg },
  { label: "Lehenga", href: categories.lehenga, img: lehengaImg },
  { label: "Nizami Suit", href: categories.nizami, img: nizamiImg },
  { label: "Concept Saree", href: categories.concept, img: conceptImg },
  { label: "Long Coat", href: categories.longCoat, img: longCoatImg, pos: "38% 50%" },
  { label: "Contemporary Fashion", href: categories.contemporary, img: contemporaryImg },
];

// Prices and stock as listed on shephalee.com product pages (2026-10-28).
const products = [
  { code: "SHEMS294", name: "Tangerine touch pastel pink designer pure silk", slug: "tangerine-touch-pastel-pink-designer-pure-silk-shems294", img: shems294, mrp: 60700, price: 54600 },
  { code: "SHEMS295", name: "Shephalee tangerine touch polka dot designer pure silk saree", slug: "shephalee-tangerine-touch-polka-dot-designer-pure-silk-saree-shems295", img: shems295, mrp: 60700, price: 54600 },
  { code: "SHEMS237", name: "Shephalee Magenta Touch Golden Pure Silk", slug: "shephalee-magenta-touch-golden-pure-silk-shems237", img: shems237, mrp: 76100, price: 68460, soldOut: true },
  { code: "SHETI018", name: "Vibrant polka touch gleaming tangerine tissue silk", slug: "vibrant-polka-touch-gleaming-tangerine-tissue-silk-sheti018", img: sheti018, mrp: 60700, price: 54600 },
];

const textiles = ["Shephalee Silk", "Shephalee Tissue Silk", "Shephalee Tussar", "Shephalee Cotton"];

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* 03 — Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media">
            <Image
              src={heroImg}
              alt="Two women in handwoven SHEPHALEE silk sarees with gold jewellery, standing in a heritage room"
              priority
              placeholder="blur"
              sizes="100vw"
              className="cover"
            />
          </div>
          <div className="hero-copy">
            <h1 id="hero-title" className="display">Timeless traditions of spellbound craftsmanship</h1>
            <a className="text-link" href={nav.couture}>Discover Indian Couture</a>
          </div>
        </section>

        {/* 04 — Categories */}
        <section className="section categories" aria-labelledby="cat-title">
          <header className="section-head">
            <h2 id="cat-title" className="title">Our categories</h2>
          </header>
          <ul className="cat-grid">
            {categoryPanels.map((c) => (
              <li key={c.label}>
                <a href={c.href} className="cat">
                  <span className="frame frame-tall">
                    <Image
                      src={c.img}
                      alt=""
                      placeholder="blur"
                      sizes="(min-width: 960px) 30vw, 45vw"
                      className="cover zoom"
                      style={c.pos ? { objectPosition: c.pos } : undefined}
                    />
                  </span>
                  <span className="cat-label">{c.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* 05 — Collections */}
        <section className="collections" aria-labelledby="col-title">
          <div className="collections-media">
            <Image
              src={collectionsImg}
              alt="A model in an ivory silk saree with a green and maroon border, in a candlelit royal chamber"
              placeholder="blur"
              sizes="(min-width: 960px) 55vw, 100vw"
              className="cover"
            />
          </div>
          <div className="collections-index">
            <h2 id="col-title" className="label">Our collections</h2>
            <ol>
              {collections.map((c) => (
                <li key={c.name}>
                  <a href={c.href}>{c.name}</a>
                </li>
              ))}
            </ol>
            <a className="text-link" href={nav.collections}>View all collections</a>
          </div>
        </section>

        {/* 06 — Craftsmanship */}
        <section className="section craft" aria-labelledby="craft-title">
          <div className="craft-media">
            <Image
              src={craftImg}
              alt="A model seated in a planter's chair wearing a turquoise and tangerine handwoven silk saree"
              placeholder="blur"
              sizes="(min-width: 960px) 60vw, 100vw"
              className="cover"
            />
          </div>
          <div className="craft-copy">
            <h2 id="craft-title" className="title">Spellbound artistry</h2>
            <p>
              Encounter finest handcrafted fashion statements revealing a whole new dimension of
              Indian craftsmanship with pride.
            </p>
            <ul className="textiles" aria-label="Our textiles">
              {textiles.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <a className="text-link" href={nav.fashionStatement}>Our Fashion Statement</a>
          </div>
        </section>

        {/* 07 — Products */}
        <section className="section products" aria-labelledby="prod-title">
          <header className="section-head split">
            <h2 id="prod-title" className="title">Selected pieces</h2>
            <a className="text-link" href={nav.couture}>View all</a>
          </header>
          <ul className="prod-grid">
            {products.map((p) => (
              <li key={p.code}>
                <a href={productUrl(p.slug)} className="prod">
                  <span className="frame frame-prod">
                    <Image src={p.img} alt={p.name} placeholder="blur" sizes="(min-width: 960px) 23vw, 46vw" className="cover zoom" />
                  </span>
                  <span className="prod-code">{p.code}</span>
                  <span className="prod-name">{p.name}</span>
                  <span className="prod-price">
                    <span>{inr(p.price)}</span>
                    <s><span className="sr-only">Original price </span>{inr(p.mrp)}</s>
                  </span>
                  {p.soldOut && <span className="prod-stock">Out of stock</span>}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* 08 — Community */}
        <section className="section tribe" aria-labelledby="tribe-title">
          <div className="tribe-media">
            <Image
              src={tribeImg}
              alt="Two women laughing on a colonnaded balcony in violet and apricot silk sarees"
              placeholder="blur"
              sizes="(min-width: 960px) 62vw, 100vw"
              className="cover"
            />
          </div>
          <div className="tribe-copy">
            <h2 id="tribe-title" className="title">#shephaleetribe</h2>
            <p>Share how you wear SHEPHALEE and follow the house for new collections and campaigns.</p>
            <ul className="inline-links">
              <li><a className="text-link" href={social.instagram} rel="noopener">Instagram</a></li>
              <li><a className="text-link" href={social.facebook} rel="noopener">Facebook</a></li>
              <li><a className="text-link" href={social.pinterest} rel="noopener">Pinterest</a></li>
            </ul>
          </div>
        </section>

        {/* 09 — Closing statement */}
        <section className="closing" aria-labelledby="close-title">
          <div className="closing-copy">
            <h2 id="close-title" className="display">Six yards of sheer brilliance</h2>
            <a className="text-link" href={nav.collections}>Explore the collections</a>
          </div>
          <div className="closing-media">
            <Image
              src={closingImg}
              alt="A model reclining on a daybed in an ivory and gold floral silk saree"
              placeholder="blur"
              sizes="100vw"
              className="cover"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
