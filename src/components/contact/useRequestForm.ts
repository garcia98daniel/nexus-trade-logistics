"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { resetSubmission, submitRequest } from "@/redux/contact/slice";
import { selectSubmission } from "@/redux/contact/selectors";
import { hasErrors, type FieldErrors } from "@/lib/validation";
import type { ContactData, QuoteData, SubmitPayload } from "@/types";

type FormMap = { quote: QuoteData; contact: ContactData };

export function useRequestForm<K extends keyof FormMap>(
  kind: K,
  initial: () => FormMap[K],
  validator: (data: FormMap[K]) => FieldErrors<FormMap[K]>,
) {
  const dispatch = useAppDispatch();
  const submission = useAppSelector(selectSubmission(kind));
  const [values, setValues] = useState<FormMap[K]>(initial);
  const [errors, setErrors] = useState<FieldErrors<FormMap[K]>>({});

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validator(values);
    setErrors(found);
    if (!hasErrors(found)) dispatch(submitRequest({ kind, data: values } as SubmitPayload));
  };

  const reset = () => {
    setValues(initial());
    setErrors({});
    dispatch(resetSubmission(kind));
  };

  return { values, errors, onChange, onSubmit, reset, submission };
}
