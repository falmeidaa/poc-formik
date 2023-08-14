export interface Validation {
  validate: <T = unknown>(input: T) => Record<keyof T, string> | null;
}
