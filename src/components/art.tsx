import type { CSSProperties, ReactNode } from "react";

/** Один пиксель макета. */
export const u = (value: number) => `calc(var(--u) * ${value})`;

type ArtProps = {
  width: number;
  height: number;
  children: ReactNode;
  className?: string;
};

/** Холст с координатами макета, который масштабируется по ширине контейнера. */
export function Art({ width, height, children, className = "" }: ArtProps) {
  return (
    <div className={`art w-full ${className}`}>
      <div
        className="art-canvas relative w-full overflow-hidden"
        style={{ ["--art-w" as string]: width, aspectRatio: `${width} / ${height}` }}
      >
        {children}
      </div>
    </div>
  );
}

type PieceProps = {
  src: string;
  x: number;
  y: number;
  w: number;
  h: number;
  radius?: number;
  className?: string;
  style?: CSSProperties;
  contain?: boolean;
};

/** Картинка, расставленная по координатам макета. */
export function Piece({ src, x, y, w, h, radius, className = "", style, contain }: PieceProps) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      className={`absolute ${contain ? "object-contain" : "object-cover"} ${className}`}
      style={{
        left: u(x),
        top: u(y),
        width: u(w),
        height: u(h),
        borderRadius: radius ? u(radius) : undefined,
        ...style,
      }}
    />
  );
}

/** Ярлыки категорий в углу обложки. */
export function Tags({ items, pad }: { items: string[]; pad: number }) {
  return (
    <div
      className="absolute bottom-0 left-0 flex w-full flex-wrap items-center"
      style={{ padding: u(pad), gap: u(8) }}
    >
      {items.map((tag) => (
        <span
          key={tag}
          className="flex items-center justify-center bg-white font-semibold text-[#383838]"
          style={{
            minWidth: u(28),
            padding: u(6),
            borderRadius: u(16),
            fontSize: u(12),
            lineHeight: u(16),
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
