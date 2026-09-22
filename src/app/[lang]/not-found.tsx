import Link from "next/link";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[1440px] flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="font-display text-[64px] leading-[64px] text-fg">404</p>
      <p className="text-2xl font-medium text-secondary">{site.ui.notFound.ru}</p>
      <Link
        href="/"
        className="rounded-[26px] bg-accent px-8 py-4 text-base font-semibold text-white"
      >
        {site.ui.toHome.ru}
      </Link>
    </section>
  );
}
