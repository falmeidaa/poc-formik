import { object, string } from "zod";
import { ZodValidationAdapter } from "../infra/zod-validation-adapter";

const schema = object({
  name: string().min(3).max(255),
  gender: string({
    required_error: 'Gender is required'
  })
});

export const zodFormValidation = new ZodValidationAdapter(schema);
