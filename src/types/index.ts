export type Locale = "es" | "en";

export type LocalizedText = Record<Locale, string>;

export type RequestStatus = "idle" | "loading" | "succeeded" | "failed";

export type CategoryIcon =
  | "sprout"
  | "snowflake"
  | "coffee"
  | "wheat"
  | "droplets"
  | "leaf"
  | "fish"
  | "beef"
  | "trees"
  | "brick"
  | "factory";

export interface Subcategory {
  id: string;
  name: LocalizedText;
  products: LocalizedText[];
  pending?: boolean;
}

export interface Category {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  icon: CategoryIcon;
  image?: string;
  subcategories: Subcategory[];
}

export type OperationType = "import" | "export";

export interface QuoteData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  operation: OperationType | "";
  product: string;
  volume: string;
  message: string;
}

export interface ContactData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type SubmitPayload =
  | { kind: "quote"; data: QuoteData }
  | { kind: "contact"; data: ContactData };

export type RequestKind = SubmitPayload["kind"];
