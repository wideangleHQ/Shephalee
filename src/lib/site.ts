// Content mirrored from the live store (shephalee.com), verified 2026-10-28.
// Commerce (cart, checkout, account, product pages) still lives there, so links are absolute.
export const STORE = "https://shephalee.com";
const s = (path: string) => `${STORE}${path}`;

export const nav = {
  couture: s("/category/indian-couture"),
  collections: s("/collections"),
  story: s("/about-us"),
  fashionStatement: s("/fashion-statement"),
  bespoke: s("/bespoke"),
  blog: s("/shephalees-world/blogs"),
  contact: s("/contact-us"),
  account: s("/profile"),
  wishlist: s("/wishlist"),
  cart: s("/cart"),
  privacy: s("/privacy-policy"),
  terms: s("/terms-and-conditions"),
  returns: s("/returns-and-exchanges"),
};

export const social = {
  instagram: "https://instagram.com/shephaleeofficial",
  facebook: "https://www.facebook.com/shephaleeofficial/",
  pinterest: "https://in.pinterest.com/Shephaleeofficial/",
  whatsapp: "https://wa.me/+917735964445",
};

export const collections = [
  { name: "Aurora", href: s("/collections/aurora") },
  { name: "Time's Fashion Week", href: s("/collections/times-fashion-week") },
  { name: "Enore", href: s("/collections/enore") },
  { name: "Bahaar", href: s("/collections/bahaar") },
  { name: "Avyanna", href: s("/collections/avyanna") },
  { name: "Dubai Fashion Show", href: s("/collections/dubai-fashion-show") },
];

const cat = (id: number, path = "indian-couture") => s(`/category/${path}?subcategory=${id}`);
export const categories = {
  saree: cat(18),
  lehenga: cat(19),
  nizami: cat(20),
  concept: cat(21),
  longCoat: cat(22, "accessories"),
  contemporary: cat(23),
};

export const productUrl = (slug: string) => s(`/product/${slug}`);
