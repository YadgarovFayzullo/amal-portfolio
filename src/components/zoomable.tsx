"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icon";

type ZoomableProps = {
  src: string;
  /** Версия в исходном разрешении — открывается в просмотрщике. */
  full?: string;
  alt?: string;
  ratio: string;
  className?: string;
  label?: string;
};

/**
 * Схемы и User Flow мелкие в тексте, поэтому по клику открывается
 * полноразмерная версия: сначала вписанная в экран, вторым кликом — 1:1 со скроллом.
 */
export function Zoomable({ src, full, alt = "", ratio, className = "", label }: ZoomableProps) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setZoomed(false);
          setOpen(true);
        }}
        aria-label={label}
        className="group/zoom relative block w-full cursor-zoom-in"
      >
        <img src={src} alt={alt} className={`w-full object-cover ${className}`} style={{ aspectRatio: ratio }} />
        <span className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-full bg-bg/80 text-fg opacity-0 backdrop-blur transition-opacity group-hover/zoom:opacity-100">
          <Icon name="zoom" size={16} />
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-[rgba(31,31,31,0.96)] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div className="flex shrink-0 justify-end p-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white"
              aria-label="Close"
            >
              <Icon name="xmark" size={24} />
            </button>
          </div>
          <div
            className={`flex-1 ${zoomed ? "overflow-auto" : "flex items-center justify-center overflow-hidden"} p-4 pt-0`}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={full ?? src}
              alt={alt}
              onClick={() => setZoomed((value) => !value)}
              className={zoomed ? "max-w-none cursor-zoom-out" : "max-h-full max-w-full cursor-zoom-in object-contain"}
            />
          </div>
        </div>
      )}
    </>
  );
}
