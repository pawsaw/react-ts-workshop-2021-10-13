export type ISBN = string;

export interface Book {
  isbn: ISBN;
  title?: string;
  subtitle?: string;
  numPages?: number;
  [key: string]: unknown;
}
