import { Validation } from "./validation";
import { Schema } from "yup";

export class YupValidationAdapter implements Validation {
  constructor(private readonly yupSchema: Schema) { }

  validate<T>(input: T) {
    const errors = this.yupSchema.validateSync(input, { abortEarly: false })
    console.log({ errors })
    return null
  }
}