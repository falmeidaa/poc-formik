import { Field, FieldProps } from "formik";
import { DumbRadioInput, DumbRadioInputProps } from "./dumb";

type RadioInputProps = DumbRadioInputProps;

export const RadioInput = ({ name, ...props }: RadioInputProps) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const error = meta.error;
        return (
          <DumbRadioInput {...props} {...field} error={error} name={name} />
        );
      }}
    </Field>
  );
};
