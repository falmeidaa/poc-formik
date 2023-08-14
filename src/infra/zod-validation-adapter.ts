import { ZodError, ZodIssue, ZodSchema } from "zod"
import { Validation } from "./validation"

export class ZodValidationAdapter implements Validation {
  constructor(private readonly zodSchema: ZodSchema) { }

  validate<T = unknown>(input: T) {
    try {
      this.zodSchema.parse(input)
      return null

    } catch (error) {
      const zodError = error as ZodError
      return zodError.issues.reduce((acc: Record<keyof T, string>, issue: ZodIssue) => {
        const key = issue.path[0] as keyof T
        acc[key] = issue.message
        return acc
      }, {} as Record<keyof T, string>)
    }
  }
}