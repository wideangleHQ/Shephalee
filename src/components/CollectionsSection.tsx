"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import collectionsImg from "@/assets/Slideshow/17280265664.jpg";

import trailLehenga from "@/assets/Categories/Lehenga.jpg";
import trailPurpleSaree from "@/assets/Slideshow/17280265835.jpg";
import trailNizami from "@/assets/Categories/Nizami suit.jpg";
import sareeImg from "@/assets/Categories/Saree.jpg";
import contemporaryImg from "@/assets/Categories/Contemprorary Fashion.jpg";
import conceptImg from "@/assets/Categories/Concept Saree.jpg";
import longCoatImg from "@/assets/Categories/Long Coat.png";
import craftImg from "@/assets/Slideshow/17280265653.jpg";
import closingImg from "@/assets/Slideshow/17280265502.jpg";
import tribeImg from "@/assets/Slideshow/17280265363.jpg";
import shems294 from "@/assets/1698834343151.jpg";
import shems295 from "@/assets/1694518900SHEMS295 (1).jpg";
import shems237 from "@/assets/1698313131SHEMS237 (1).jpg";
import sheti018 from "@/assets/1694170411SHETI018 (1).jpg";

import { collections, nav } from "@/lib/site";

interface TrailCardConfig {
  width: number;
  height: number;
  offsetX: number;
  offsetY: number;
  rotation: number;
  lerp: number;
}

const TRAIL_CONFIG: TrailCardConfig[] = [
  {
    width: 125,
    height: 175,
    offsetX: -160,
    offsetY: -130,
    rotation: -3.5,
    lerp: 0.14,
  },
  {
    width: 145,
    height: 195,
    offsetX: 30,
    offsetY: -150,
    rotation: 3,
    lerp: 0.09,
  },
  {
    width: 115,
    height: 160,
    offsetX: -170,
    offsetY: -15,
    rotation: -1.5,
    lerp: 0.06,
  },
];

interface ClusterItem {
  img: StaticImageData;
  alt: string;
}

const COLLECTION_CLUSTERS: Record<string, ClusterItem[]> = {
  default: [
    { img: trailLehenga, alt: "Handcrafted SHEPHALEE lehengas with gold zardozi embroidery" },
    { img: trailPurpleSaree, alt: "Royal purple handwoven silk saree with silver jewellery" },
    { img: trailNizami, alt: "Crimson cape and handwoven Nizami suit under royal palace arch" },
  ],
  "Aurora": [
    { img: sareeImg, alt: "Handwoven SHEPHALEE Aurora silk saree" },
    { img: trailPurpleSaree, alt: "Royal purple silk saree with silver jewellery" },
    { img: shems294, alt: "Tangerine touch pastel pink designer pure silk" },
  ],
  "Time's Fashion Week": [
    { img: contemporaryImg, alt: "Contemporary couture fashion statement" },
    { img: trailNizami, alt: "Crimson cape and handwoven Nizami suit" },
    { img: closingImg, alt: "Ivory and gold floral silk saree" },
  ],
  "Enore": [
    { img: trailLehenga, alt: "Handcrafted SHEPHALEE lehenga with gold zardozi" },
    { img: sareeImg, alt: "Pure silk bridal saree" },
    { img: shems237, alt: "Magenta touch golden pure silk" },
  ],
  "Bahaar": [
    { img: shems295, alt: "Tangerine touch polka dot designer pure silk saree" },
    { img: trailPurpleSaree, alt: "Vibrant royal purple silk saree" },
    { img: craftImg, alt: "Finest handcrafted fashion statement" },
  ],
  "Avyanna": [
    { img: conceptImg, alt: "Concept saree designer creation" },
    { img: sheti018, alt: "Vibrant polka touch gleaming tangerine tissue silk" },
    { img: trailNizami, alt: "Handwoven Nizami couture suit" },
  ],
  "Dubai Fashion Show": [
    { img: longCoatImg, alt: "Handwoven long coat couture accessory" },
    { img: trailLehenga, alt: "Handcrafted lehenga with zardozi embroidery" },
    { img: tribeImg, alt: "Violet and apricot silk sarees" },
  ],
};

export default function CollectionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeKey, setActiveKey] = useState<string>("default");

  const isActiveRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const stopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Current interpolated positions & targets
  const targetPosRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef(TRAIL_CONFIG.map(() => ({ x: 0, y: 0 })));

  const updateCoordinates = (clientX: number, clientY: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    targetPosRef.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const animate = () => {
    const target = targetPosRef.current;

    TRAIL_CONFIG.forEach((config, idx) => {
      const item = itemRefs.current[idx];
      if (!item) return;

      const current = currentPosRef.current[idx];
      // Parallax spring interpolation
      current.x += (target.x - current.x) * config.lerp;
      current.y += (target.y - current.y) * config.lerp;

      const posX = current.x + config.offsetX;
      const posY = current.y + config.offsetY;

      item.style.transform = `translate3d(${posX.toFixed(1)}px, ${posY.toFixed(1)}px, 0) rotate(${config.rotation}deg)`;
    });

    rafRef.current = requestAnimationFrame(animate);
  };

  const handlePointerEnter = (
    collectionKey: string,
    e: React.MouseEvent<HTMLAnchorElement> | React.PointerEvent<HTMLAnchorElement>
  ) => {
    if (typeof window !== "undefined" && window.innerWidth < 960) return;

    if (stopTimeoutRef.current) {
      clearTimeout(stopTimeoutRef.current);
      stopTimeoutRef.current = null;
    }

    setActiveKey(collectionKey);
    updateCoordinates(e.clientX, e.clientY);

    // Initialise positions immediately to target if starting fresh
    if (!isActiveRef.current) {
      currentPosRef.current = TRAIL_CONFIG.map(() => ({
        x: targetPosRef.current.x,
        y: targetPosRef.current.y,
      }));
    }

    isActiveRef.current = true;

    if (trailRef.current) {
      trailRef.current.classList.add("is-active");
    }

    // If user prefers reduced motion, position statically without RAF loop
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      TRAIL_CONFIG.forEach((config, idx) => {
        const item = itemRefs.current[idx];
        if (!item) return;
        const posX = targetPosRef.current.x + config.offsetX;
        const posY = targetPosRef.current.y + config.offsetY;
        item.style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${config.rotation}deg)`;
      });
      return;
    }

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(animate);
    }
  };

  const handlePointerMove = (e: React.MouseEvent<HTMLAnchorElement> | React.PointerEvent<HTMLAnchorElement>) => {
    if (!isActiveRef.current) return;
    updateCoordinates(e.clientX, e.clientY);
  };

  const handlePointerLeave = () => {
    if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
    stopTimeoutRef.current = setTimeout(() => {
      isActiveRef.current = false;
      if (trailRef.current) {
        trailRef.current.classList.remove("is-active");
      }
      setTimeout(() => {
        if (!isActiveRef.current && rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      }, 400);
    }, 80);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
    };
  }, []);

  const cluster = COLLECTION_CLUSTERS[activeKey] || COLLECTION_CLUSTERS.default;

  return (
    <section ref={sectionRef} className="collections" aria-labelledby="col-title">
      {/* Floating editorial image cluster following cursor when hovering any collection button */}
      <div ref={trailRef} className="collections-trail" aria-hidden="true">
        {TRAIL_CONFIG.map((config, idx) => {
          const item = cluster[idx] || COLLECTION_CLUSTERS.default[idx];
          return (
            <div
              key={idx}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              className="collections-trail-item"
              style={{ width: config.width, height: config.height }}
            >
              <div className="collections-trail-card">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes={`${config.width * 2}px`}
                  className="cover"
                />
              </div>
            </div>
          );
        })}
      </div>

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
              <a
                href={c.href}
                onMouseEnter={(e) => handlePointerEnter(c.name, e)}
                onMouseMove={handlePointerMove}
                onMouseLeave={handlePointerLeave}
                onPointerEnter={(e) => handlePointerEnter(c.name, e)}
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
              >
                {c.name}
              </a>
            </li>
          ))}
        </ol>
        <a
          id="view-all-collections-cta"
          data-cta="collections-view-all"
          className="text-link"
          href={nav.collections}
          onMouseEnter={(e) => handlePointerEnter("default", e)}
          onMouseMove={handlePointerMove}
          onMouseLeave={handlePointerLeave}
          onPointerEnter={(e) => handlePointerEnter("default", e)}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          View all collections
        </a>
      </div>
    </section>
  );
}
