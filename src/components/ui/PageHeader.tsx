import Image from "next/image";
import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
  image?: { src: string; alt: string };
  children?: ReactNode;
}

export default function PageHeader({ eyebrow, title, text, dark = false, image, children }: PageHeaderProps) {
  return (
    <section className={`relative overflow-hidden ${dark ? "bg-navy" : "bg-white"}`}>
      {!dark && (
        <div aria-hidden className="absolute inset-0 rounded-br-[60%_70%] bg-cloud lg:w-[70%]" />
      )}
      <div
        className={`relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20 ${
          image ? "grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14" : ""
        }`}
      >
        <div>
          <SectionHeading as="h1" eyebrow={eyebrow} title={title} text={text} dark={dark} />
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {image && (
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-navy shadow-2xl shadow-navy/20">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
          </div>
        )}
      </div>
    </section>
  );
}
