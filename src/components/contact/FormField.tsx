"use client";

import type { ChangeEvent, ReactNode } from "react";

type FieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;

interface FormFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: FieldChange;
  error?: string;
  required?: boolean;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  autoComplete?: string;
  children?: ReactNode;
  className?: string;
}

const inputClass =
  "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-ink placeholder:text-steel/50 focus:outline-none focus:ring-2 focus:ring-gold/60";

export default function FormField({
  name,
  label,
  value,
  onChange,
  error,
  required = false,
  type = "text",
  autoComplete,
  children,
  className = "",
}: FormFieldProps) {
  const id = `field-${name}`;
  const describedBy = error ? `${id}-error` : undefined;
  const common = {
    id,
    name,
    value,
    onChange,
    required,
    "aria-invalid": Boolean(error),
    "aria-describedby": describedBy,
    className: `${inputClass} ${error ? "border-red-500" : "border-mist"}`,
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-semibold text-navy">
        {label}
        {required && <span className="text-gold-dark"> *</span>}
      </label>
      {type === "textarea" ? (
        <textarea {...common} rows={5} />
      ) : type === "select" ? (
        <select {...common}>{children}</select>
      ) : (
        <input {...common} type={type} autoComplete={autoComplete} />
      )}
      {error && (
        <p id={describedBy} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
