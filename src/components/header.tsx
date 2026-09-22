"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./icon";
import { ThemeToggle } from "./theme";
import { contacts, site } from "@/content/site";
import { otherLocale, type Locale } from "@/lib/i18n";

const links = [
  { label: "Email", href: contacts.email },
  { label: "LinkedIn", href: contacts.linkedin },
  { label: "Telegram", href: contacts.telegram },
  { label: "CV", href: contacts.cv },
];

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const target = otherLocale(locale);
  const switchHref = pathname.replace(`/${locale}`, `/${target}`) || `/${target}`;
  const name = site.name[locale];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-header backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 md:px-16 md:py-6">
        <nav className="hidden items-center gap-4 text-base font-medium leading-5 text-fg md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:opacity-70">
              {link.label}
            </a>
          ))}
        </nav>

        <Link href={`/${locale}`} className="text-base font-semibold leading-5 text-fg md:text-lg md:leading-6">
          {name}
        </Link>

        <div className="flex items-center gap-2 md:w-[249px] md:justify-end md:gap-2.5">
          <ThemeToggle label={site.ui.theme[locale]} />
          <Link
            href={switchHref}
            className="flex h-8 min-w-8 items-center justify-center rounded-[18px] bg-control px-2 text-xs font-semibold uppercase text-fg transition-opacity hover:opacity-80"
          >
            {target}
          </Link>
          <button
            type="button"
            aria-label={site.ui.menu[locale]}
            onClick={() => setMenuOpen(true)}
            className="flex size-8 items-center justify-center text-fg md:hidden"
          >
            <Icon name="menu" size={20} />
          </button>
        </div>
      </div>

      {menuOpen && <MobileMenu locale={locale} onClose={() => setMenuOpen(false)} />}
    </header>
  );
}

function MobileMenu({ locale, onClose }: { locale: Locale; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pb-4 pt-[38px] md:hidden"
      style={{ background: "rgba(31,31,31,0.64)" }}
      onClick={onClose}
    >
      <div
        className="flex w-full flex-col gap-4 overflow-hidden rounded-[32px] bg-surface pb-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-base font-semibold leading-5 text-fg">{site.name[locale]}</span>
          <button type="button" aria-label={site.ui.close[locale]} onClick={onClose} className="text-fg">
            <Icon name="xmark" size={24} />
          </button>
        </div>
        {[
          { label: "Email", href: contacts.email },
          { label: site.ui.connect[locale], href: contacts.telegram },
          { label: "LinkedIn", href: contacts.linkedin },
          { label: "Telegram", href: contacts.telegram },
          { label: "CV", href: contacts.cv },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-fg"
          >
            {link.label}
            <Icon name="arrow-up-right" size={20} className="text-subtle" />
          </a>
        ))}
      </div>
    </div>
  );
}
