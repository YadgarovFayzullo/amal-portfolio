import { Art, Piece, Tags, u } from "./art";
import type { CaseSlug } from "@/content/types";

/**
 * Обложки проектов из макета. Каждая рисуется дважды:
 * в размерах карточки (504×400) и широкой обложки кейса (1200×460).
 */

const OVERLAY = { mixBlendMode: "overlay" } as const;

function ThemedImg({
  light,
  dark,
  ...rest
}: { light: string; dark: string } & Omit<Parameters<typeof Piece>[0], "src">) {
  return (
    <>
      <Piece src={light} {...rest} className={`${rest.className ?? ""} dark:hidden`} />
      <Piece src={dark} {...rest} className={`${rest.className ?? ""} hidden dark:block`} />
    </>
  );
}

function Label({
  children,
  x,
  y,
  size,
  color,
  className = "",
}: {
  children: React.ReactNode;
  x: number;
  y: number;
  size: number;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={`absolute whitespace-nowrap ${className}`}
      style={{ left: u(x), top: u(y), fontSize: u(size), lineHeight: u(size * 1.25), color }}
    >
      {children}
    </span>
  );
}

/** card — карточка на главной, hover — её состояние при наведении, hero — обложка кейса. */
type Variant = "card" | "hover" | "hero";
type ArtProps = { variant: Variant; tags: string[] };

const geometry = {
  card: { w: 504, h: 400, pad: 16 },
  hover: { w: 504, h: 400, pad: 16 },
  hero: { w: 1200, h: 460, pad: 32 },
} as const;

function MaryArt({ variant, tags }: ArtProps) {
  const g = geometry[variant];
  const hero = variant === "hero";
  const hover = variant === "hover";
  const card = !hero;
  const brand = hero || hover;
  return (
    <Art width={g.w} height={g.h} className={brand ? "" : "bg-surface"}>
      {brand && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${hero ? "168.96deg" : "158deg"}, #ff4800 14.14%, #ff9850 85.84%)`,
          }}
        />
      )}
      <Piece
        src={card ? "/img/home/mary-bg.svg" : "/img/mary-ai/ece5b.svg"}
        x={card ? (g.w - 516) / 2 - 22 : (g.w - 692) / 2 - 37}
        y={card ? (g.h - 512) / 2 - 21 : (g.h - 686) / 2}
        w={card ? 516 : 692}
        h={card ? 512 : 686}
        style={OVERLAY}
      />
      <Piece
        src="/img/home/mary-screen.webp"
        contain
        x={card ? (g.w - 411) / 2 : g.w - 659}
        y={card ? (g.h - 273) / 2 : 37}
        w={card ? 411 : 659}
        h={card ? 273 : 427}
      />
      <div className="absolute left-0 top-0 flex items-center" style={{ padding: u(g.pad), gap: u(card ? 8 : 12) }}>
        <img
          src={hero ? "/img/mary-ai/fe5bf.svg" : hover ? "/img/mary-ai/logo-white.svg" : "/img/home/mary-mark.svg"}
          alt=""
          style={{ width: u(card ? 27 : 38), height: u(card ? 27 : 38) }}
        />
        <span
          className="font-poppins font-semibold"
          style={{ fontSize: u(card ? 15 : 20.9), color: brand ? "#fff" : "#ff4800" }}
        >
          Mary Ai
        </span>
      </div>
      <Tags items={tags} pad={g.pad} />
    </Art>
  );
}

function FinarumArt({ variant, tags }: ArtProps) {
  const g = geometry[variant];
  const hero = variant === "hero";
  const hover = variant === "hover";
  const card = !hero;
  const shots = ["/img/finarum/16177.webp", "/img/finarum/6cf21.webp", "/img/finarum/e6c0d.webp"];
  return (
    <Art width={g.w} height={g.h} className={hover ? "bg-[#e8f3ff]" : card ? "bg-surface" : ""}>
      {hero && (
        <>
          <div className="absolute inset-0" style={{ background: "rgba(27,132,255,0.1)" }} />
          <Piece src="/img/finarum/05a21.svg" x={296} y={-114} w={752} h={752} style={OVERLAY} />
        </>
      )}
      {hover && (
        <Piece src="/img/finarum/watermark.svg" x={102} y={-22} w={430} h={430} style={OVERLAY} />
      )}
      {shots.map((src, i) => (
        <Piece
          key={src}
          src={src}
          x={card ? 88 + i * 120.351 + 30.17 : 567 + i * 183.478 + 46}
          y={card ? 86.5 : 50.2}
          w={card ? 112.48 : 171.479}
          h={card ? 235.896 : 359.63}
          radius={card ? 11.522 : 17.565}
        />
      ))}
      <div
        className="absolute left-0 top-0 flex items-center"
        style={{ padding: u(g.pad + (card ? 4.5 : 6)), gap: u(card ? 9 : 12) }}
      >
        <img
          src="/img/home/finarum-mark.svg"
          alt=""
          style={{ width: u(card ? 27 : 36), height: u(card ? 27 : 36) }}
        />
        <img
          src={card ? "/img/home/finarum-word.svg" : "/img/finarum/487bc.svg"}
          alt=""
          className={hover ? "" : "dark:hidden"}
          style={{ width: u(card ? 90 : 120), height: u(card ? 18 : 24) }}
        />
        <img
          src={card ? "/img/home/finarum-word-dark.svg" : "/img/finarum/487bc.svg"}
          alt=""
          className={hover ? "hidden" : "hidden dark:block"}
          style={{ width: u(card ? 90 : 120), height: u(card ? 18 : 24) }}
        />
      </div>
      <Tags items={tags} pad={g.pad} />
    </Art>
  );
}

function IpotekaArt({ variant, tags }: ArtProps) {
  const g = geometry[variant];
  const hover = variant === "hover";
  const card = variant === "card";
  if (!card && !hover) {
    return (
      <Art width={g.w} height={g.h} className="bg-[#48992a]">
        <Piece src="/img/ipoteka/0b7f2.svg" x={544} y={-113} w={656} h={666} />
        <Piece src="/img/ipoteka/0d1ff.svg" x={g.pad} y={g.pad} w={172.917} h={36.836} />
        <Tags items={tags} pad={g.pad} />
      </Art>
    );
  }
  return (
    <Art width={g.w} height={g.h} className={hover ? "bg-[#48992a]" : "bg-surface"}>
      {hover && <Piece src="/img/ipoteka/watermark.svg" contain x={87} y={-13} w={420} h={427} />}
      {hover ? (
        <Piece src="/img/ipoteka/logo-white.svg" contain x={16} y={16} w={170} h={36} />
      ) : (
        <ThemedImg
          light="/img/home/ipoteka-logo.svg"
          dark="/img/home/ipoteka-logo-dark.svg"
          x={16}
          y={16}
          w={170}
          h={36}
        />
      )}
      <div
        className="absolute flex flex-col items-center justify-center bg-glass backdrop-blur-[10px]"
        style={{
          left: u((504 - 140) / 2),
          top: u((400 - 140) / 2),
          width: u(140),
          height: u(140),
          borderRadius: u(32),
          gap: u(16),
        }}
      >
        {hover ? (
          <img src="/img/ipoteka/lock-white.svg" alt="" style={{ width: u(32), height: u(32) }} />
        ) : (
          <>
            <img src="/img/home/lock.svg" alt="" className="dark:hidden" style={{ width: u(32), height: u(32) }} />
            <img
              src="/img/home/lock-dark.svg"
              alt=""
              className="hidden dark:block"
              style={{ width: u(32), height: u(32) }}
            />
          </>
        )}
        <span
          className={`font-display ${hover ? "text-white" : "text-fg"}`}
          style={{ fontSize: u(32), lineHeight: u(36) }}
        >
          NDA
        </span>
      </div>
      <Tags items={tags} pad={g.pad} />
    </Art>
  );
}

function HammersmithArt({ variant, tags }: ArtProps) {
  const g = geometry[variant];
  const hero = variant === "hero";
  const hover = variant === "hover";
  return (
    <Art width={g.w} height={g.h} className="bg-[#d79f9b]">
      {hero && (
        <Piece
          src="/img/hammersmith/825dd.svg"
          x={656}
          y={-10}
          w={511}
          h={496}
          className="-scale-y-100 opacity-12"
          style={OVERLAY}
        />
      )}
      {hover && (
        <Piece
          src="/img/hammersmith/watermark.svg"
          x={504 - 92 - 412.5}
          y={0}
          w={412.5}
          h={400}
          className="-scale-y-100 opacity-12"
          style={OVERLAY}
        />
      )}
      <Piece
        src={hover ? "/img/hammersmith/logo-hover.svg" : "/img/hammersmith/9a93a.svg"}
        contain
        x={g.pad}
        y={g.pad}
        w={hero ? 303 : 194.75}
        h={hero ? 49.787 : 32}
      />
      <Tags items={tags} pad={g.pad} />
    </Art>
  );
}

function QrtifactArt({ variant, tags }: ArtProps) {
  const g = geometry[variant];
  const hero = variant === "hero";
  const hover = variant === "hover";
  const card = !hero;
  const shots = [
    "/img/qrtifact/79fe9.webp",
    "/img/qrtifact/a3f2b.webp",
    "/img/qrtifact/a4657.webp",
    "/img/qrtifact/75f4e.webp",
  ];
  return (
    <Art width={g.w} height={g.h} className={hover || hero ? "bg-[#f9e1e1]" : "bg-surface"}>
      {hero && <Piece src="/img/qrtifact/11f21.svg" x={167} y={-3} w={463} h={463} />}
      {hover && <Piece src="/img/qrtifact/watermark.svg" x={132} y={-3} w={438} h={438} />}
      {(card ? shots.slice(0, 2) : shots).map((src, i) => (
        <Piece
          key={src}
          src={src}
          x={card ? 199.5 + i * 145.12 : 315.1 + i * 219.153}
          y={card ? 55 : (460 - 425.571) / 2}
          w={card ? 138.077 : 202.921}
          h={card ? 289.577 : 425.571}
          radius={card ? 14.144 : 20.786}
        />
      ))}
      <Piece
        src="/img/qrtifact/logo.svg"
        contain
        x={g.pad}
        y={g.pad}
        w={card ? 99 : 132}
        h={card ? 24 : 32}
        className={card && !hover ? "dark:invert" : ""}
      />
      <Tags items={tags} pad={g.pad} />
    </Art>
  );
}

function UzumArt({ variant, tags }: ArtProps) {
  const g = geometry[variant];
  const hero = variant === "hero";
  const hover = variant === "hover";
  const card = !hero;
  return (
    <Art width={g.w} height={g.h} className={hover ? "bg-[#e2ccff]" : card ? "bg-surface" : ""}>
      {hero && (
        <>
          <div className="absolute inset-0" style={{ background: "rgba(112,0,255,0.2)" }} />
          <div
            className="absolute overflow-hidden opacity-10"
            style={{ left: u(583), top: u(-46), width: u(606), height: u(596.677), ...OVERLAY }}
          >
            <img
              src="/img/uzum-bank/6a852.webp"
              alt=""
              className="absolute left-0 top-0 h-full max-w-none"
              style={{ width: "315.77%" }}
            />
          </div>
        </>
      )}
      <Piece
        src={card ? "/img/home/uzum-logo.webp" : "/img/uzum-bank/6a852.webp"}
        contain
        x={g.pad}
        y={g.pad}
        w={card ? 103 : 205}
        h={card ? 32 : 64}
      />
      <Piece
        src="/img/uzum-bank/93c15.webp"
        x={card ? 119.03 : 488}
        y={card ? 68 : 13}
        w={card ? 149.657 : 234.27}
        h={card ? 314.281 : 491.967}
        radius={card ? 12.776 : 20}
      />
      <Piece
        src="/img/uzum-bank/8769c.webp"
        x={card ? 273.17 : 726}
        y={card ? 68 : 13}
        w={card ? 153.721 : 234.273}
        h={card ? 314.214 : 478.866}
      />
      <Piece
        src="/img/uzum-bank/fb2a9.webp"
        x={card ? 317.93 : 865}
        y={card ? 138.22 : 120}
        w={card ? 208.5 : 317.756}
        h={card ? 173.835 : 264.926}
      />
      <Tags items={tags} pad={g.pad} />
    </Art>
  );
}

function RemoutlyArt({ variant, tags }: ArtProps) {
  const g = geometry[variant];
  const hero = variant === "hero";
  const hover = variant === "hover";
  const card = !hero;
  const shots = ["/img/remoutly/cc3d8.webp", "/img/remoutly/16984.webp", "/img/remoutly/1e34f.webp"];
  return (
    <Art width={g.w} height={g.h} className={hover || hero ? "bg-[#dcf99c]" : "bg-surface"}>
      {hero && (
        <>
          <div
            className="absolute bg-white opacity-20"
            style={{
              left: u((1200 - 542.109) / 2),
              top: u((460 - 542.109) / 2),
              width: u(542.109),
              height: u(542.109),
              borderRadius: u(135.527),
              ...OVERLAY,
            }}
          />
          <Piece src="/img/remoutly/rem-big.svg" contain x={(1200 - 543) / 2} y={0} w={543} h={460} />
        </>
      )}
      {shots.map((src, i) => (
        <Piece
          key={src}
          src={src}
          x={card ? 77 + i * 139.628 : 486.7 + i * 226.428}
          y={card ? 65 : 76}
          w={card ? 135.628 : 205.428}
          h={card ? 284.442 : 430.829}
          radius={card ? 13.893 : 21.043}
        />
      ))}
      {card ? (
        <div className="absolute left-0 top-0 flex items-center" style={{ padding: u(16), gap: u(10.667) }}>
          <img src="/img/remoutly/rem-small.svg" alt="" style={{ width: u(32), height: u(32) }} />
          <img src="/img/remoutly/wordmark.svg" alt="" style={{ width: u(117.333), height: u(24.033) }} />
        </div>
      ) : (
        <Piece src="/img/remoutly/logo.svg" contain x={32} y={32} w={233} h={48} />
      )}
      <Tags items={tags} pad={g.pad} />
    </Art>
  );
}

const arts: Record<CaseSlug, (props: ArtProps) => React.ReactElement> = {
  "mary-ai": MaryArt,
  finarum: FinarumArt,
  "ipoteka-bank": IpotekaArt,
  hammersmith: HammersmithArt,
  qrtifact: QrtifactArt,
  "uzum-bank": UzumArt,
  remoutly: RemoutlyArt,
};

export function ProjectArt({
  slug,
  variant,
  tags,
}: {
  slug: CaseSlug;
  variant: Variant;
  tags: string[];
}) {
  const Component = arts[slug];
  return <Component variant={variant} tags={tags} />;
}
