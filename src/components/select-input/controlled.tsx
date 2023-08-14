import { Field, FieldProps } from "formik";
import { DumbSelectInput, DumbSelectInputProps } from "./dumb";

type SelectInputProps = DumbSelectInputProps & {
  name: string;
};
export const SelectInput = ({ name, ...props }: SelectInputProps) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const error = meta.error;
        return <DumbSelectInput {...props} {...field} error={error} />;
      }}
    </Field>
  );
};
