const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-60";

export const buttonStyles = {
  primary: `${base} bg-navy text-white shadow-lg shadow-navy/20 hover:bg-navy-light`,
  secondary: `${base} border border-mist bg-white text-navy hover:border-navy`,
  gold: `${base} bg-gold text-navy hover:bg-gold-dark`,
  ghostDark: `${base} border border-white/20 text-white hover:border-gold hover:text-gold`,
};
