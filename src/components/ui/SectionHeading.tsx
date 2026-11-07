interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
  align?: "left" | "center";
  as?: "h1" | "h2";
}

export default function SectionHeading({
  eyebrow,
  title,
  text,
  dark = false,
  align = "left",
  as: Tag = "h2",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${
          dark ? "text-gold" : "text-steel"
        } ${centered ? "justify-center" : ""}`}
      >
        <span className="h-[3px] w-10 rounded-full bg-gold" aria-hidden />
        {eyebrow}
      </p>
      <Tag
        className={`mt-4 font-serif text-3xl font-extrabold leading-tight sm:text-4xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </Tag>
      {text && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-mist/90" : "text-steel"}`}>{text}</p>
      )}
    </div>
  );
}
