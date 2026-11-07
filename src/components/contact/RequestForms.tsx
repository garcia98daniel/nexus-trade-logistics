"use client";

import { useEffect, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearPrefill, type SubmissionState } from "@/redux/contact/slice";
import { selectQuotePrefill } from "@/redux/contact/selectors";
import { useTranslation } from "@/i18n/useTranslation";
import { validateContact, validateQuote, type ValidationError } from "@/lib/validation";
import { buttonStyles } from "@/components/ui/buttonStyles";
import type { ContactData, QuoteData } from "@/types";
import FormField from "./FormField";
import { useRequestForm } from "./useRequestForm";

const emptyQuote: QuoteData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  operation: "",
  product: "",
  volume: "",
  message: "",
};

const emptyContact: ContactData = { name: "", company: "", email: "", phone: "", subject: "", message: "" };

function useErrorText() {
  const { t } = useTranslation();
  return (code?: ValidationError) => (code ? t.contact.errors[code] : undefined);
}

export function QuoteForm() {
  const dispatch = useAppDispatch();
  const prefill = useAppSelector(selectQuotePrefill);
  const { t } = useTranslation();
  const f = t.contact.fields;
  const errorText = useErrorText();
  const { values, errors, onChange, onSubmit, reset, submission } = useRequestForm(
    "quote",
    () => ({ ...emptyQuote, operation: prefill?.operation ?? "", product: prefill?.product ?? "" }),
    validateQuote,
  );

  useEffect(() => {
    if (prefill) dispatch(clearPrefill());
  }, [prefill, dispatch]);

  return (
    <FormShell submission={submission} onSubmit={onSubmit} onReset={reset}>
      <FormField name="fullName" label={f.fullName} value={values.fullName} onChange={onChange} error={errorText(errors.fullName)} required autoComplete="name" />
      <FormField name="company" label={f.company} value={values.company} onChange={onChange} error={errorText(errors.company)} required autoComplete="organization" />
      <FormField name="email" type="email" label={f.email} value={values.email} onChange={onChange} error={errorText(errors.email)} required autoComplete="email" />
      <FormField name="phone" type="tel" label={f.phone} value={values.phone} onChange={onChange} error={errorText(errors.phone)} required autoComplete="tel" />
      <FormField name="country" label={f.country} value={values.country} onChange={onChange} error={errorText(errors.country)} required autoComplete="country-name" />
      <FormField name="operation" type="select" label={f.operation} value={values.operation} onChange={onChange} error={errorText(errors.operation)} required>
        <option value="">{f.operationPlaceholder}</option>
        <option value="import">{f.import}</option>
        <option value="export">{f.export}</option>
      </FormField>
      <FormField name="product" label={f.product} value={values.product} onChange={onChange} error={errorText(errors.product)} required />
      <FormField name="volume" label={f.volume} value={values.volume} onChange={onChange} />
      <FormField name="message" type="textarea" label={f.message} value={values.message} onChange={onChange} className="sm:col-span-2" />
    </FormShell>
  );
}

export function ContactForm() {
  const { t } = useTranslation();
  const f = t.contact.fields;
  const errorText = useErrorText();
  const { values, errors, onChange, onSubmit, reset, submission } = useRequestForm(
    "contact",
    () => ({ ...emptyContact }),
    validateContact,
  );

  return (
    <FormShell submission={submission} onSubmit={onSubmit} onReset={reset}>
      <FormField name="name" label={f.name} value={values.name} onChange={onChange} error={errorText(errors.name)} required autoComplete="name" />
      <FormField name="company" label={f.companyOptional} value={values.company} onChange={onChange} autoComplete="organization" />
      <FormField name="email" type="email" label={f.email} value={values.email} onChange={onChange} error={errorText(errors.email)} required autoComplete="email" />
      <FormField name="phone" type="tel" label={f.phone} value={values.phone} onChange={onChange} error={errorText(errors.phone)} required autoComplete="tel" />
      <FormField name="subject" label={f.subject} value={values.subject} onChange={onChange} error={errorText(errors.subject)} required className="sm:col-span-2" />
      <FormField name="message" type="textarea" label={f.messageGeneral} value={values.message} onChange={onChange} error={errorText(errors.message)} required className="sm:col-span-2" />
    </FormShell>
  );
}

interface FormShellProps {
  submission: SubmissionState;
  onSubmit: (e: FormEvent) => void;
  onReset: () => void;
  children: ReactNode;
}

function FormShell({ submission, onSubmit, onReset, children }: FormShellProps) {
  const { t } = useTranslation();

  if (submission.status === "succeeded") {
    return (
      <div role="status" className="flex flex-col items-center py-12 text-center">
        <CheckCircle2 className="h-14 w-14 text-gold" />
        <h3 className="mt-5 font-serif text-2xl font-extrabold text-navy">{t.contact.successTitle}</h3>
        <p className="mt-3 max-w-md text-steel">{t.contact.successText}</p>
        {submission.referenceId && (
          <p className="mt-4 rounded-full bg-cloud px-4 py-1.5 text-sm font-semibold text-navy">
            {t.contact.reference}: {submission.referenceId}
          </p>
        )}
        <button type="button" onClick={onReset} className={`${buttonStyles.secondary} mt-8`}>
          {t.contact.another}
        </button>
      </div>
    );
  }

  const loading = submission.status === "loading";
  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      {children}
      {submission.status === "failed" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
          {t.contact.errors.generic}
        </p>
      )}
      <div className="sm:col-span-2">
        <button type="submit" disabled={loading} className={`${buttonStyles.primary} w-full sm:w-auto`}>
          {loading && <Loader2 className="h-5 w-5 animate-spin" />}
          {loading ? t.contact.sending : t.contact.submit}
        </button>
      </div>
    </form>
  );
}
