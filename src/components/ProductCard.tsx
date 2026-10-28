"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { productUrl } from "@/lib/site";

export interface ProductItem {
  code: string;
  name: string;
  slug: string;
  img: StaticImageData;
  mrp: number;
  price: number;
  soldOut?: boolean;
}

interface ProductCardProps {
  product: ProductItem;
  priority?: boolean;
}

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted((prev) => !prev);
  };

  return (
    <li className="prod-item">
      <a
        href={productUrl(product.slug)}
        className="prod"
        aria-label={`${product.name} — ${inr(product.price)}${product.soldOut ? " (Sold Out)" : ""}`}
      >
        <div className="prod-media">
          <Image
            src={product.img}
            alt={product.name}
            placeholder="blur"
            sizes="(min-width: 1200px) 25vw, (min-width: 960px) 33vw, 50vw"
            className="cover prod-zoom"
            priority={priority}
          />

          {product.soldOut && (
            <span className="prod-badge" aria-label="Availability: Sold Out">
              Sold Out
            </span>
          )}

          <button
            type="button"
            className={`prod-wishlist-btn ${isWishlisted ? "is-active" : ""}`}
            aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
            aria-pressed={isWishlisted}
            onClick={handleWishlistClick}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={isWishlisted ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>

        <div className="prod-overlay">
          <div className="prod-details">
            <span className="prod-code">{product.code}</span>
            <h3 className="prod-name">{product.name}</h3>

            <div className="prod-pricing">
              <span className="prod-price">{inr(product.price)}</span>
              {product.mrp > product.price && (
                <s className="prod-mrp">
                  <span className="sr-only">Original price </span>
                  {inr(product.mrp)}
                </s>
              )}
            </div>

            <div className="prod-action" aria-hidden="true">
              <span>View Piece</span>
              <span className="prod-action-arrow">&rarr;</span>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
