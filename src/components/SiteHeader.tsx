import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/Logo Full.png";
import { nav } from "@/lib/site";

const primary = [
  { label: "Indian Couture", href: nav.couture },
  { label: "Collections", href: nav.collections },
  { label: "Our Story", href: nav.story },
  { label: "Bespoke", href: nav.bespoke },
];

export default function SiteHeader() {
  return (
    <>
      <p className="announce">
        Customisation and bespoke orders by appointment.{" "}
        <a href={nav.bespoke}>Book an appointment</a>
      </p>
      <header className="header">
        {/* <details> gives a no-JS, keyboard-operable mobile menu */}
        <details className="menu">
          <summary>
            <span className="menu-bars" aria-hidden="true" />
            <span>Menu</span>
          </summary>
          <nav aria-label="Mobile">
            <ul>
              {primary.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
              <li><a href={nav.fashionStatement}>Our Fashion Statement</a></li>
              <li><a href={nav.blog}>Blog</a></li>
              <li><a href={nav.contact}>Contact Us</a></li>
              <li><a href={nav.account}>Account</a></li>
              <li><a href={nav.wishlist}>Wishlist</a></li>
            </ul>
          </nav>
        </details>

        <nav className="nav-primary" aria-label="Primary">
          <ul>
            {primary.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <Link href="/" className="logo" aria-label="SHEPHALEE home">
          <Image src={logo} alt="SHEPHALEE" priority sizes="(min-width: 960px) 220px, 160px" />
        </Link>

        <nav className="nav-utility" aria-label="Account">
          <ul>
            <li className="hide-sm"><a href={nav.blog}>Blog</a></li>
            <li className="hide-sm"><a href={nav.account}>Account</a></li>
            <li><a href={nav.cart}>Bag</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
