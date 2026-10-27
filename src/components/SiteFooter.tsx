import Image from "next/image";
import logo from "@/assets/Logo Full.png";
import { nav, social } from "@/lib/site";

// The live site's newsletter field has no working endpoint, so the form only
// renders once a real one is configured.
const newsletterAction = process.env.NEXT_PUBLIC_NEWSLETTER_ACTION;

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Indian Couture", href: nav.couture },
      { label: "Collections", href: nav.collections },
      { label: "Bespoke", href: nav.bespoke },
    ],
  },
  {
    title: "House",
    links: [
      { label: "Our Story", href: nav.story },
      { label: "Our Fashion Statement", href: nav.fashionStatement },
      { label: "Blog", href: nav.blog },
    ],
  },
  {
    title: "Assistance",
    links: [
      { label: "Contact Us", href: nav.contact },
      { label: "WhatsApp +91 77359 64445", href: social.whatsapp },
      { label: "Returns & Exchanges", href: nav.returns },
      { label: "Privacy Policy", href: nav.privacy },
      { label: "Terms & Conditions", href: nav.terms },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Image src={logo} alt="SHEPHALEE" sizes="200px" style={{ width: 200, height: "auto" }} />
          <p>
            Shephalee began as an effect of deliberations, dialogue, sheer passion, and a thirst to
            showcase our handwoven fabrics to the world in a new avatar.
          </p>
        </div>

        {columns.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h2 className="label">{c.title}</h2>
            <ul>
              {c.links.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="footer-news">
          <h2 className="label">Newsletter</h2>
          {newsletterAction ? (
            <form action={newsletterAction} method="post" className="news-form">
              <label htmlFor="sub_email" className="sr-only">Email address</label>
              <input id="sub_email" name="sub_email" type="email" required placeholder="Your email" autoComplete="email" />
              <button type="submit">Subscribe</button>
            </form>
          ) : (
            <p>Follow SHEPHALEE for new collections.</p>
          )}
          <ul className="footer-social">
            <li><a href={social.instagram} rel="noopener">Instagram</a></li>
            <li><a href={social.facebook} rel="noopener">Facebook</a></li>
            <li><a href={social.pinterest} rel="noopener">Pinterest</a></li>
          </ul>
        </div>
      </div>
      <p className="footer-legal">© 2024 SHEPHALEE FASHION (OPC) PVT LTD. All rights reserved.</p>
    </footer>
  );
}
