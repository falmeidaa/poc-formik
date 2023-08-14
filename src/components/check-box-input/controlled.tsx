import { Field, FieldProps } from "formik";
import { DumbCheckboxInput, DumbCheckboxInputProps } from "./dumb";

type CheckBoxProps = DumbCheckboxInputProps;

export const CheckBox = ({ name, ...props }: CheckBoxProps) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const error = meta.error;
        return (
          <DumbCheckboxInput {...props} {...field} error={error} name={name} />
        );
      }}
    </Field>
  );
};
