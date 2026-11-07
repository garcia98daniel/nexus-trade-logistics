import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
  children?: ReactNode;
}

export default function PageHeader({ eyebrow, title, text, dark = false, children }: PageHeaderProps) {
  return (
    <section className={`relative overflow-hidden ${dark ? "bg-navy" : "bg-white"}`}>
      {!dark && (
        <div aria-hidden className="absolute inset-0 rounded-br-[60%_70%] bg-cloud lg:w-[70%]" />
      )}
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} text={text} dark={dark} />
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
