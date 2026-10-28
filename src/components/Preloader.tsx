"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import emblem from "@/assets/Logo Icon.png";
import wordmark from "@/assets/Logo Wordmark.png";
import dancersPattern from "@/assets/Patterns/dancers.png";
import bandTilePattern from "@/assets/Patterns/band-tile.png";

export interface ScriptItem {
  script: string;
  text: string;
}

// Linguistically verified phonetic renderings of SHEPHALEE across 8 major Indian scripts:
// 1. Odia (ଶେଫାଳୀ)
// 2. Bengali (শেফালী)
// 3. Hindi (शेफाली)
// 4. Telugu (షెఫాలీ)
// 5. Tamil (ஷெபாலி)
// 6. Kannada (ಶೆಫಾಲಿ)
// 7. Malayalam (ഷെഫാലി)
// 8. Gujarati (શેફાલી)
export const MULTILINGUAL_NAMES: ScriptItem[] = [
  { script: "Odia", text: "ଶେଫାଳୀ" },
  { script: "Bengali", text: "শেফালী" },
  { script: "Hindi", text: "शेफाली" },
  { script: "Telugu", text: "షెఫాలీ" },
  { script: "Tamil", text: "ஷெபாலி" },
  { script: "Kannada", text: "ಶೆಫಾಲಿ" },
  { script: "Malayalam", text: "ഷെഫാലി" },
  { script: "Gujarati", text: "શેફાલી" },
];

export default function Preloader() {
  const [phase, setPhase] = useState<"opening" | "multilingual" | "identity" | "done">("opening");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Respect prefers-reduced-motion: skip animation immediately
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.dataset.preloader = "skip";
      setPhase("done");
      return;
    }

    // Ensure stale attribute from previous run is cleared on fresh mount
    if (typeof document !== "undefined") {
      delete document.documentElement.dataset.preloader;
    }

    // Stage 1: The quiet opening (0 - 220ms) - Ivory background & heritage patterns appear
    const openingTimer = setTimeout(() => {
      setPhase("multilingual");
    }, 220);

    // Stage 2: Cycle through the 8 Indian scripts (320ms each, pure opacity fade in, hold, fade out)
    const SCRIPT_DURATION = 320;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < MULTILINGUAL_NAMES.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, SCRIPT_DURATION);

    // Stage 3 & 4: Final script fades out completely, followed by the identity reveal
    // 220ms opening + 8 * 320ms (= 2560ms) + 120ms pause = 2900ms
    const identityTimer = setTimeout(() => {
      setPhase("identity");
    }, 220 + MULTILINGUAL_NAMES.length * SCRIPT_DURATION + 120);

    // Stage 5 & 6: Preloader smoothly dissolves into the homepage
    // Identity reveals emblem, wordmark follows sequentially, holds briefly until 3850ms
    const finishTimer = setTimeout(() => {
      setPhase("done");
      if (typeof document !== "undefined") {
        document.documentElement.dataset.preloader = "done";
      }
    }, 3850);

    // Absolute fallback safety net (never stuck beyond 4.5s)
    const safetyTimer = setTimeout(() => {
      if (typeof document !== "undefined") {
        document.documentElement.dataset.preloader = "done";
      }
    }, 4500);

    return () => {
      clearTimeout(openingTimer);
      clearInterval(interval);
      clearTimeout(identityTimer);
      clearTimeout(finishTimer);
      clearTimeout(safetyTimer);
    };
  }, []);

  const currentScript = MULTILINGUAL_NAMES[currentIndex];

  return (
    <div className={`preloader ${phase === "done" ? "is-done" : ""}`} aria-hidden="true">
      {/* Persistent Traditional Background Patterns */}
      <div
        className="preloader-dancers"
        style={{ backgroundImage: `url(${dancersPattern.src})` }}
        aria-hidden="true"
      />
      <div
        className="preloader-band"
        style={{ backgroundImage: `url(${bandTilePattern.src})` }}
        aria-hidden="true"
      />

      <div className="preloader-content">
        {/* Stage 2: Multilingual Sequence (Pure Opacity Fade - No Language Labels) */}
        <div
          className={`preloader-multilingual ${phase === "multilingual" ? "is-visible" : "is-hidden"}`}
        >
          <div className="preloader-script-wrap" key={currentIndex}>
            <span className="preloader-script">{currentScript.text}</span>
          </div>
        </div>

        {/* Stage 3: The Identity Reveal (Emblem + Wordmark pure opacity fade) */}
        <div className={`preloader-identity ${phase === "identity" ? "is-visible" : "is-hidden"}`}>
          <Image
            src={emblem}
            alt="SHEPHALEE"
            priority
            className="preloader-emblem"
            sizes="132px"
          />
          <Image
            src={wordmark}
            alt="SHEPHALEE"
            priority
            className="preloader-wordmark"
            sizes="240px"
          />
        </div>
      </div>
    </div>
  );
}
